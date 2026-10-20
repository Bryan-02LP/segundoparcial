import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  onGetStarted?: () => void;
};

export function CompoDos({ onGetStarted }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jump start your{'\n'}crypto portfolio</Text>

      <Text style={styles.subtitle}>
        Take your investment portfolio{'\n'}to next level
      </Text>

      <Pressable style={styles.button} onPress={onGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 16,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6C5CFF',
    borderRadius: 12,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});