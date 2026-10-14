import { useState } from "react";
import {
  ImageBackground,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import Title from "../components/Title";
import ReserveButton from "../components/ReserveButton";
import Colors from "../constants/colors";

const guestChoices = Array.from({ length: 15 }, (_, index) => index + 1);
const campsiteChoices = Array.from({ length: 5 }, (_, index) => index + 1);

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 700;
  const isLandscape = width > height;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(14, 0, 0, 0);

  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 2);
  nextDay.setHours(11, 0, 0, 0);

  const [checkIn, setCheckIn] = useState(tomorrow);
  const [checkOut, setCheckOut] = useState(nextDay);
  const [temporaryDate, setTemporaryDate] = useState(tomorrow);

  const [guests, setGuests] = useState(2);
  const [campsites, setCampsites] = useState(1);

  const [dateType, setDateType] = useState(null);
  const [pickerType, setPickerType] = useState(null);
  const [reservation, setReservation] = useState(null);

  function openDatePicker(type) {
    setDateType(type);
    setTemporaryDate(type === "checkIn" ? checkIn : checkOut);
  }

  function confirmDate() {
    if (dateType === "checkIn") {
      setCheckIn(temporaryDate);

      if (temporaryDate >= checkOut) {
        const correctedCheckout = new Date(temporaryDate);
        correctedCheckout.setDate(correctedCheckout.getDate() + 1);
        setCheckOut(correctedCheckout);
      }
    } else {
      setCheckOut(temporaryDate);
    }

    setDateType(null);
  }

  function submitReservation() {
    setReservation({
      checkIn,
      checkOut,
      guests,
      campsites,
    });
  }

  function formatDate(date) {
    return date.toLocaleString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <ImageBackground
      source={require("../assets/campground-background.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            isTablet && styles.tabletScrollContent,
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={[
              styles.page,
              isTablet && styles.tabletPage,
              isTablet && isLandscape && styles.landscapePage,
            ]}
          >
            <Title />

            <View style={styles.formCard}>
              <Text style={styles.sectionTitle}>Plan Your Stay</Text>

              <Text style={styles.label}>Check In</Text>
              <Pressable
                style={styles.selectionBox}
                onPress={() => openDatePicker("checkIn")}
              >
                <Text style={styles.selectionText}>
                  {formatDate(checkIn)}
                </Text>
              </Pressable>

              <Text style={styles.label}>Check Out</Text>
              <Pressable
                style={styles.selectionBox}
                onPress={() => openDatePicker("checkOut")}
              >
                <Text style={styles.selectionText}>
                  {formatDate(checkOut)}
                </Text>
              </Pressable>

              <View
                style={[
                  styles.numberRow,
                  isTablet && styles.tabletNumberRow,
                ]}
              >
                <View style={styles.numberSection}>
                  <Text style={styles.label}>Number of Guests</Text>
                  <Pressable
                    style={styles.selectionBox}
                    onPress={() => setPickerType("guests")}
                  >
                    <Text style={styles.selectionText}>
                      {guests} {guests === 1 ? "Guest" : "Guests"}
                    </Text>
                  </Pressable>
                </View>

                <View style={styles.numberSection}>
                  <Text style={styles.label}>Number of Campsites</Text>
                  <Pressable
                    style={styles.selectionBox}
                    onPress={() => setPickerType("campsites")}
                  >
                    <Text style={styles.selectionText}>
                      {campsites}{" "}
                      {campsites === 1 ? "Campsite" : "Campsites"}
                    </Text>
                  </Pressable>
                </View>
              </View>

              <ReserveButton onPress={submitReservation} />

              {reservation && (
                <View style={styles.confirmation}>
                  <Text style={styles.confirmationTitle}>
                    Reservation Selections
                  </Text>

                  <Text style={styles.confirmationText}>
                    Check in: {formatDate(reservation.checkIn)}
                  </Text>

                  <Text style={styles.confirmationText}>
                    Check out: {formatDate(reservation.checkOut)}
                  </Text>

                  <Text style={styles.confirmationText}>
                    Guests: {reservation.guests}
                  </Text>

                  <Text style={styles.confirmationText}>
                    Campsites: {reservation.campsites}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={dateType !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setDateType(null)}
      >
        <View style={styles.modalBackground}>
          <View style={[styles.modalCard, isTablet && styles.tabletModal]}>
            <Text style={styles.modalTitle}>
              Select {dateType === "checkIn" ? "Check In" : "Check Out"}
            </Text>

            <Text style={styles.pickerLabel}>Date</Text>
            <DateTimePicker
              value={temporaryDate}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              minimumDate={
                dateType === "checkOut" ? checkIn : new Date()
              }
              onChange={(event, selectedDate) => {
                if (selectedDate) {
                  setTemporaryDate(selectedDate);
                }
              }}
            />

            <Text style={styles.pickerLabel}>Time</Text>
            <DateTimePicker
              value={temporaryDate}
              mode="time"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(event, selectedTime) => {
                if (selectedTime) {
                  setTemporaryDate(selectedTime);
                }
              }}
            />

            <Text style={styles.datePreview}>
              {formatDate(temporaryDate)}
            </Text>

            <View style={styles.modalButtonRow}>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setDateType(null)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={[styles.modalButton, styles.confirmButton]}
                onPress={confirmDate}
              >
                <Text style={styles.confirmText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={pickerType !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setPickerType(null)}
      >
        <View style={styles.modalBackground}>
          <View style={[styles.modalCard, isTablet && styles.tabletModal]}>
            <Text style={styles.modalTitle}>
              Select Number of{" "}
              {pickerType === "guests" ? "Guests" : "Campsites"}
            </Text>

            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={
                  pickerType === "guests" ? guests : campsites
                }
                onValueChange={(value) => {
                  if (pickerType === "guests") {
                    setGuests(value);
                  } else {
                    setCampsites(value);
                  }
                }}
                style={styles.picker}
                itemStyle={styles.pickerItem}
              >
                {(pickerType === "guests"
                  ? guestChoices
                  : campsiteChoices
                ).map((number) => (
                  <Picker.Item
                    key={number}
                    label={String(number)}
                    value={number}
                  />
                ))}
              </Picker>
            </View>

            <Pressable
              style={[styles.modalButton, styles.confirmButton]}
              onPress={() => setPickerType(null)}
            >
              <Text style={styles.confirmText}>Confirm Selection</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    backgroundColor: Colors.overlay,
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 50,
  },
  tabletScrollContent: {
    paddingHorizontal: 50,
  },
  page: {
    alignSelf: "center",
    maxWidth: 620,
    width: "100%",
  },
  tabletPage: {
    maxWidth: 760,
  },
  landscapePage: {
    maxWidth: 900,
  },
  formCard: {
    backgroundColor: Colors.card,
    borderRadius: 20,
    padding: 20,
  },
  sectionTitle: {
    color: Colors.darkForest,
    fontFamily: "LoraBold",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  label: {
    color: Colors.darkForest,
    fontFamily: "LoraBold",
    fontSize: 15,
    marginBottom: 6,
    marginTop: 12,
  },
  selectionBox: {
    backgroundColor: Colors.white,
    borderColor: Colors.green,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    minHeight: 54,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  selectionText: {
    color: Colors.black,
    fontFamily: "LoraRegular",
    fontSize: 15,
  },
  numberRow: {
    width: "100%",
  },
  tabletNumberRow: {
    flexDirection: "row",
    gap: 16,
  },
  numberSection: {
    flex: 1,
  },
  confirmation: {
    backgroundColor: Colors.lightGreen,
    borderRadius: 12,
    marginTop: 18,
    padding: 15,
  },
  confirmationTitle: {
    color: Colors.darkForest,
    fontFamily: "LoraBold",
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
  confirmationText: {
    color: Colors.darkForest,
    fontFamily: "LoraRegular",
    fontSize: 14,
    marginVertical: 3,
  },
  modalBackground: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  modalCard: {
    backgroundColor: Colors.cream,
    borderRadius: 18,
    maxWidth: 500,
    padding: 20,
    width: "100%",
  },
  tabletModal: {
    maxWidth: 580,
  },
  modalTitle: {
    color: Colors.darkForest,
    fontFamily: "LoraBold",
    fontSize: 21,
    marginBottom: 12,
    textAlign: "center",
  },
  pickerLabel: {
    color: Colors.darkForest,
    fontFamily: "LoraBold",
    fontSize: 15,
    marginTop: 8,
  },
  datePreview: {
    color: Colors.darkForest,
    fontFamily: "LoraRegular",
    fontSize: 15,
    marginVertical: 14,
    textAlign: "center",
  },
  modalButtonRow: {
    flexDirection: "row",
    gap: 12,
  },
  modalButton: {
    borderRadius: 10,
    flex: 1,
    padding: 13,
  },
  cancelButton: {
    backgroundColor: "#D6D6D6",
  },
  confirmButton: {
    backgroundColor: Colors.green,
  },
  cancelText: {
    color: Colors.black,
    fontFamily: "LoraBold",
    textAlign: "center",
  },
  confirmText: {
    color: Colors.white,
    fontFamily: "LoraBold",
    textAlign: "center",
  },
  pickerContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.green,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 16,
    overflow: "hidden",
  },
  picker: {
    color: Colors.darkForest,
    minHeight: 150,
    width: "100%",
  },
  pickerItem: {
    color: Colors.darkForest,
    fontFamily: "LoraRegular",
    fontSize: 22,
  },
});