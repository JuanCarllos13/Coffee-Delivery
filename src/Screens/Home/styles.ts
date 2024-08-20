import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: '#272221',
		height: '50%',
		paddingTop: 60,
		paddingLeft: 32,
		paddingRight:32,
	},
	headerContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 100
	},
	headerCity: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
	},
	textCity: {
		color: '#FFFFFF',
		fontSize: 18,
		paddingLeft: 5
	},
	title: {
		color: '#FFFFFF',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20
	},
	brunetteIcon: {
		position: 'absolute',
		top: 283,
		right: 1,
	},
	listCard: {
		marginTop: -100,
	},
	contentFlatList: {
		gap: 12,
		paddingHorizontal: 32,
		paddingTop: 48,
	},
	headerFlatList: {
		padding: 32

	},
	headerOurCafes: {
		flexDirection: 'row'
	},
	headerOurCafesText: {
		color: '#574F4D',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20
	},
	buttonCoffeeType: {
		borderWidth: 1,
		borderColor: '#8047F8',
		padding: 10,
		marginRight: 10,
		borderRadius: 20
	},
	buttonCoffeeTypeText:{
		color: '#4B2995',
		fontWeight: 'bold',
		fontSize: 12
	},
	sectionsListTitle:{

	}
})

export default styles
