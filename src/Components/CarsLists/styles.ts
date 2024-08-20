import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F3F2F2',
		flexDirection: 'row',
		height: 150,
		justifyContent: 'space-between',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 5,
		marginVertical: 20
	},
	icon: {
		width: 120,
		height: 120,
		marginTop: -20,
		zIndex: 999,
	},
	contentRight: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		marginLeft: 10

	},
	title:{
		fontWeight: 'bold',
		fontSize: 18,
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
