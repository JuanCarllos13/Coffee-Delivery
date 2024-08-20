import Castanha from '@assets/castanha.png'
import Card from '@components/Card'
import CardLists from '@components/CarsLists'
import Input from '@components/Input'
import { ShoppingCart, MapPin } from 'phosphor-react-native'
import React, { useState } from 'react'
import {
	Text,
	View,
	StatusBar,
	TouchableWithoutFeedback,
	Keyboard,
	Image,
	FlatList,
	TouchableOpacity,
	SectionList,
} from 'react-native'

import { COFFEES } from '../../dadaBase/coffees'
import styles from './styles'

export default function Home() {
	const [focusInput, setFocusInput] = useState(false)

	const data = ['1', '2', '3', '4']

	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor="transparent"
				barStyle="light-content"
				translucent
			/>
			<TouchableWithoutFeedback
				onPress={() => {
					setFocusInput(false)
					Keyboard.dismiss()
				}}
			>
				<View style={styles.header}>
					<View style={styles.headerContent}>
						<View style={styles.headerCity}>
							<MapPin color="#8047F8" weight="fill" size={30} />
							<Text style={styles.textCity}>Manaus, AM</Text>
						</View>

						<ShoppingCart color="#C47F17" weight="fill" size={30} />
					</View>

					<Text style={styles.title}>
						Encontre o café perfeito para qualquer hora do dia
					</Text>

					<Input
						placeholder="Pesquisar"
						placeholderTextColor="#8D8686"
						iconName="search"
						onFocus={() => setFocusInput(true)}
						onBlur={() => setFocusInput(false)}
						focusInput={focusInput}
					/>

					<View style={styles.brunetteIcon}>
						<Image source={Castanha} />
					</View>
				</View>
			</TouchableWithoutFeedback>

			<View>
				<FlatList
					data={data}
					style={styles.listCard}
					horizontal
					keyExtractor={(item, index) => index.toString()}
					renderItem={() => <Card />}
					contentContainerStyle={styles.contentFlatList}
					showsHorizontalScrollIndicator={false}
				/>
			</View>

			<View>
				<SectionList
					sections={COFFEES}
					keyExtractor={(item, index) => index.toString()}
					ListHeaderComponent={() => {
						return (
							<View style={styles.headerFlatList}>
								<Text style={styles.headerOurCafesText}>Nossos cafés</Text>

								<View style={styles.headerOurCafes}>

									<TouchableOpacity style={styles.buttonCoffeeType}>
										<Text style={styles.buttonCoffeeTypeText}>TRADICIONAIS</Text>
									</TouchableOpacity>

									<TouchableOpacity style={styles.buttonCoffeeType}>
										<Text style={styles.buttonCoffeeTypeText}>DOCES</Text>
									</TouchableOpacity>

									<TouchableOpacity style={styles.buttonCoffeeType}>
										<Text style={styles.buttonCoffeeTypeText}>ESPECIAIS</Text>
									</TouchableOpacity>
								</View>
							</View>
						)
					}}
					renderSectionHeader={({ section: { title } }) => (
						<Text style={styles.sectionsListTitle}>{title}</Text>
					)}
					renderItem={({ item }) => (
						<CardLists/>
					)}
				/>
			</View>
		</View>
	)
}
