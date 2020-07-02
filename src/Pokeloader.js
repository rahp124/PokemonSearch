import React from 'react';
import { StyleSheet, Text, View, Platform, Image, ImageBackground} from 'react-native';
import {Header, Item, Icon, Input, Button} from 'native-base';
class Pokeloader extends React.Component{
	render(){
		return(
			<View style = {{flex: 1}}>
				<Image
					source = {{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
					style = {styles.img}
				/>
			</View>
		)
	}
}
const styles = {
	img: {
		height: Platform.OS === "android" ? 530 :400,
		width: Platform.OS === "android" ? 400 : 400,
		justifyContent: 'center',
		alignItems: 'center',
	}
}
export default Pokeloader;