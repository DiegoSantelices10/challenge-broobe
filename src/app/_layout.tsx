import '../../global.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider';

const RootLayout = () =>(
  <GluestackUIProvider mode="light">
    <Stack
      screenOptions={{
        headerShown: false,

      }}
    />
    <StatusBar style="auto" />
  </GluestackUIProvider>
)
;

export default RootLayout;
