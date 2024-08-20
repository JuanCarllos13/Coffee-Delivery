/* eslint-disable react-native/no-inline-styles */
import Home from '@screens/Home'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return (
		<SafeAreaProvider style={{ flex: 1, backgroundColor: '#ff' }}>
			<StatusBar backgroundColor="transparent" style="dark" translucent />

			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			>
				<Home />
			</KeyboardAvoidingView>
		</SafeAreaProvider>
	)
}
