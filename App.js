import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreen from './components/MainScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <MainScreen></MainScreen>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
