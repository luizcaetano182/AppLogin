import React,{useState,useEffect} from 'react';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { View, Image,ActivityIndicator, TouchableOpacity ,Modal,ScrollView,SafeAreaView,Text,StyleSheet,Dimensions,WebView,Linking } from 'react-native';
import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function App({route}) {

	const [loading,setLoading] = React.useState(false);
	

	useEffect(()=>{
		
	
	},[]);
  

	return (

		
	<SafeAreaView style={styles.containerScroll}>
		<ScrollView style={styles.scrollView}>
			
			<View height="100%" width="100%" alignContent="center" alignItems='center' paddingBottom={40}>
				{loading &&
					<Modal
						alignItems="center" alignContent= "center"
						transparent={true}
					>
						<View style={[styles.containerLoading, styles.horizontalLoading]}>
							
					
							<ActivityIndicator color="#0000ff" size={80} />
						</View>
					</Modal>
				}	

			</View>
		
		</ScrollView>
	</SafeAreaView>
    ) 

      
}
const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: "center",
    justifyContent: "center",
    backgroundColor : "white"

	},

	containerLogo: {
		flex: 1,
		justifyContent: "center",
	},

	container: {
		paddingBottom:20,
		width: '90%',
    	height:50,
	
		alignItems :"center",
		marginTop:50
	},

	containerLoading: {
		flex: 1,
		justifyContent: "center"
	  },
	  horizontalLoading: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10
	  },

	containerSair: {
		paddingBottom:20,
		width: '90%',
    	height:70,
	
		alignItems :"center",
		marginTop:50
	},

	card: {
		
		width: '90%',
    	
		alignItems :"center",
		marginTop:40,
		borderRadius: 40 / 2,
		borderWidth:1,
		borderColor:"silver",
	
	
	},

	botaoCard:{
		
		width: '100%',
    	height:60,
		backgroundColor:"#005fac",
		alignItems :"center",
		borderBottomEndRadius: 40 / 2,
		borderBottomStartRadius: 40 / 2,
	
		
	},

	input: {
		backgroundColor :"white",
		borderColor: 'white',
		borderRadius: 10,
		borderWidth: 2,
		marginBottom: 15,
		paddingLeft: 10,
		fontSize : 12,
		textAlign : "center",
		color: "black",
		width: '100%',
	},

	botaoSimulacao: {
		//marginLeft: '20%',
		width: '100%',
		backgroundColor: '#005fac',
		borderRadius:10,
		alignItems: "center",
		alignContent :"center",
		justifyContent: "center",
		height: 70,
		marginTop: 10,
	    
		
	},


	botaoAcessar: {
		//marginLeft: '20%',
		width: '100%',
		backgroundColor: '#005fac',
		borderRadius:10,
		alignItems: "center",
		alignContent :"center",
		justifyContent: "center",
		height: 70,
		marginTop: 10,
	    
		
	},

	botaoSair: {
		//marginLeft: '20%',
		width: '100%',
		backgroundColor: 'silver',
		borderRadius:10,
		alignItems: "center",
		alignContent :"center",
		justifyContent: "center",
		height: 70,
		marginTop: 10,
	    
		
	},
	botaoAnalise: {
		//marginLeft: '20%',
		width: '100%',
		backgroundColor: '#5fa1ef',
		borderRadius:10,
		alignItems: "center",
		alignContent :"center",
		justifyContent: "center",
		height: 70,
		marginTop: 10,
	    
		
	},

	botaoCadastrar: {
		marginLeft: '20%',
		width: '60%',
		backgroundColor: '#FF6961',
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		height: 40,
		marginTop: 10
	},

	textoBotao: {
		color: '#fff',
		fontWeight: "bold",
		fontSize : 20
  },


  textoBotaoSimulador: {
	color: '#fff',

	fontSize : 20,
	marginStart:20
},

textoBotaoAnalise: {
	color: '#fff',
	fontWeight: "bold",
	fontSize : 16,
	marginStart:20,
	marginTop:5
},
  textoNome: {
	color: '#005fac',
	fontWeight: "bold",
	fontSize : 24,
	textAlign:"center",
	marginTop:20
},

textoNomeTitulo: {
	color: 'silver',

	fontSize : 24,
	
	marginTop:20,
	marginEnd:10
},
  tamanhoLogo : {
    width: 250,
    height: 68

  },

  titulos :{
	color : "white",
	fontSize :15,
	fontWeight : "bold",
	alignItems :"flex-end",
	textAlign : "left",
	alignContent : "flex-end"
  }
});


	