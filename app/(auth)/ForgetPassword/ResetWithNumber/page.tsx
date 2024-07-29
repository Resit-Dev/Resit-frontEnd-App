import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Link } from 'expo-router';

const VerifyCodePage = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (key) => {
    if (key === '⌫') {
      const lastFilledIndex = code.lastIndexOf('');
      const newCode = [...code];
      if (lastFilledIndex === -1) {
        newCode[code.length - 1] = '';
      } else if (lastFilledIndex === 0) {
        newCode[0] = '';
      } else {
        newCode[lastFilledIndex - 1] = '';
      }
      setCode(newCode);
    } else {
      const newCode = [...code];
      const nextEmptyIndex = newCode.indexOf('');
      if (nextEmptyIndex !== -1) {
        newCode[nextEmptyIndex] = key.toString();
        setCode(newCode);
      }
    }
  };

  const handleContinue = () => {
    if (code.every((digit) => digit !== '')) {
      Alert.alert('Success', 'Code verified successfully');
      // Navigate to the next page
    } else {
      Alert.alert('Error', 'Please enter the complete code');
    }
  };

  const handleResendCode = () => {
    if (timer === 0) {
      setTimer(60);
      // Resend code logic
    }
  };

  return (
    <View style={[styles.container, {paddingTop: 30}]}>
      <StatusBar />
      <Link href='../page'>
        <Text style={styles.backButton}>Back to Forget Password</Text>
      </Link>
      <Text style={styles.infoText}>Code has been send to 081******98</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            value={digit}
            onChangeText={(value) => handleKeyPress(value)}
            keyboardType="numeric"
            maxLength={1}
            editable={false}
          />
        ))}
      </View>
      <Text style={styles.timerText}>Resend Code in {timer}s</Text>
      <View style={styles.keypadContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '•', 0, '⌫'].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.keypadButton}
            onPress={() => handleKeyPress(key)}
          >
            <Text style={styles.keypadButtonText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    color: '#017CFD',
    fontSize: 16,
    marginTop: 20,
  },
  infoText: {
    color: '#0F315E',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
  },
  timerText: {
    color: '#404040',
    fontSize: 16,
    textAlign: 'center',
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 45,
    marginHorizontal: 30,
    gap: 45,
  },
  keypadButton: {
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  keypadButtonText: {
    fontSize: 24,
  },
  continueButton: {
    backgroundColor: '#0F315E',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default VerifyCodePage;
