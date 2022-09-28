import { ReactNode } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export type HomeProps = {
  children: ReactNode
}

export function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-100 dark:bg-slate-900">
      <Text className="dark:text-slate-50">App settings go here</Text>
    </SafeAreaView>
  )
}
