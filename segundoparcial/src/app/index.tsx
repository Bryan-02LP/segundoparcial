import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CompoDos } from '@/components/compodos';
import { CompoUno } from '@/components/compouno';
import { BottomTabInset } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <CompoUno />

        <View style={styles.bottom}>
          <CompoDos onGetStarted={() => console.log('Get Started')} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: BottomTabInset + 16,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});