import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useColorScheme } from 'react-native'
import colors from 'tailwindcss/colors'

import { HomeScreen } from './src/screens/home'
import { SettingsScreen } from './src/screens/settings'

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
}

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    // background: 'rgb(242, 242, 242)',
    card: colors.slate[900],
    // text: 'rgb(28, 28, 30)',
    // border: 'rgb(199, 199, 204)',
    // notification: 'rgb(255, 69, 58)',
  },
}

const Stack = createNativeStackNavigator()

export default function App() {
  const colorScheme = useColorScheme()
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === 'dark' ? MyDarkTheme : MyDefaultTheme}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home Screen' }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: 'Settings Screen' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}
