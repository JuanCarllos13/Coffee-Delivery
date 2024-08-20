import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View, TextInput, TextInputProps } from 'react-native'

import styles from './styles'

interface InputProps extends TextInputProps {
	iconName: React.ComponentProps<typeof Feather>['name']
	value?: string
	focusInput: boolean
}

export default function Input({ iconName, value,focusInput, ...rest }: InputProps) {
	return (
		<View style={styles.container}>
			<View style={[styles.iconContainer]}>
				<Feather name={iconName} size={20} color={focusInput ? '#DBAC2C' :'#8D8686'} />
			</View>
			<TextInput style={[styles.inputText]} value={value} {...rest} />
		</View>
	)
}
