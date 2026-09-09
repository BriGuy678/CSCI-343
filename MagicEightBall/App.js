import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Pressable,
} from 'react-native';

export default function App() {
  const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const responses = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
  ];

  const askMagicEightBall = () => {
    if (question.trim() === '') {
      return;
    }

    const randomNumber = Math.floor(Math.random() * responses.length);

    setSubmittedQuestion(question);
    setResponse(responses[randomNumber]);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setQuestion('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magic 8 Ball</Text>

      <View style={styles.eightBall}>
        <View style={styles.whiteCircle}>
          <Text style={styles.number}>8</Text>
        </View>
      </View>

      <Text style={styles.instructions}>
        Ask the Magic 8 Ball a question
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type your question here"
        value={question}
        onChangeText={setQuestion}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Ask the Magic 8 Ball"
          onPress={askMagicEightBall}
          color="#6a0dad"
        />
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>The Magic 8 Ball Says</Text>

            <Text style={styles.questionLabel}>Your question:</Text>
            <Text style={styles.questionText}>{submittedQuestion}</Text>

            <View style={styles.answerBox}>
              <Text style={styles.answerText}>{response}</Text>
            </View>

            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8dcf5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#3d075f',
    marginBottom: 25,
  },
  eightBall: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  whiteCircle: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#111111',
  },
  instructions: {
    fontSize: 18,
    color: '#3d075f',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#6a0dad',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 18,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  modalBox: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3d075f',
    marginBottom: 22,
    textAlign: 'center',
  },
  questionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  questionText: {
    fontSize: 18,
    color: '#333333',
    marginTop: 5,
    marginBottom: 22,
    textAlign: 'center',
  },
  answerBox: {
    width: 210,
    minHeight: 120,
    backgroundColor: '#3d075f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 25,
  },
  answerText: {
    color: '#ffffff',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#6a0dad',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 45,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});