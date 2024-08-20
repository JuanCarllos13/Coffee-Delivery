import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F3F2F2',
		alignItems: 'center',
		width: 258,
		height: 300,
		justifyContent: 'space-around',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 5,
	},
	icon: {
		width: 120,
		height: 120,
		marginTop: -50,
		zIndex: 999,
	},
	coffeeType: {
		backgroundColor: '#EBE5F9',
		color: '#4B2995',
		fontWeight: 'bold',

	},
	title:{
		fontWeight: 'bold',
		fontSize: 16,
		color: '#000',
	},
	description: {
		fontWeight: 'normal',
		fontSize: 12,
		color: '#8D8686',
		textAlign: 'center',

	},
	money: {
		fontWeight: 'bold',
		fontSize: 25,
		color: '#C47F17',
	}
})



export default styles
