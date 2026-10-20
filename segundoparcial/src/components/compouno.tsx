import { StyleSheet, Text, View } from 'react-native';

const PETALS = [
  { rotate: '0deg', color: '#6C5CFF', opacity: 0.9 },
  { rotate: '30deg', color: '#8F82FF', opacity: 0.7 },
  { rotate: '60deg', color: '#5A49F0', opacity: 0.7 },
  { rotate: '90deg', color: '#A99FFF', opacity: 0.6 },
  { rotate: '120deg', color: '#7B6CFF', opacity: 0.6 },
  { rotate: '150deg', color: '#C3BCFF', opacity: 0.5 },
];

export function CompoUno() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Crypt<Text style={styles.logoX}>X</Text>
      </Text>

      <View style={styles.hero}>
        {PETALS.map((petal) => (
          <View
            key={petal.rotate}
            style={[
              styles.petal,
              {
                backgroundColor: petal.color,
                opacity: petal.opacity,
                transform: [{ rotate: petal.rotate }],
              },
            ]}
          />
        ))}
        <View style={styles.core} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '700',
  },
  logoX: {
    color: '#6C5CFF',
  },
  hero: {
    height: 320,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petal: {
    position: 'absolute',
    width: 150,
    height: 270,
    borderRadius: 135,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  core: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#C3BCFF',
    opacity: 0.8,
  },
});