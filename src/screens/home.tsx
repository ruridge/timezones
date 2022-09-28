import { useTheme } from '@react-navigation/native'
import { ReactNode } from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export type HomeProps = {
  children: ReactNode
}

export function HomeScreen({ navigation }) {
  const { colors } = useTheme()
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-100 dark:bg-slate-900">
      <Text className="dark:text-slate-50">
        Open up App.tsx to start working on your app!
      </Text>
      <Button
        title="Go to settings"
        onPress={() => {
          navigation.navigate('Settings')
        }}
      />
    </SafeAreaView>
  )
}
