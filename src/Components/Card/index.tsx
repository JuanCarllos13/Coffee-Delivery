import Coffee from '@assets/Coffee.png'
import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

export default function Card() {
	return (
		<View style={styles.container}>
			<Image source={Coffee} style={styles.icon} />

			<Text style={styles.coffeeType}>Tradicional</Text>

			<Text style={styles.title}>Latte</Text>

			<Text style={styles.description}>
				Café expresso com o dobro de leite e espuma cremosa
			</Text>

			<Text style={styles.money}>R$ 9,90</Text>
		</View>
	)
}
