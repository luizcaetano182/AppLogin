import React, {useState, useEffect} from "react";
import {View, 
        KeyboardAvoidingView, 
        TextInput, 
        TouchableOpacity, 
        Text, 
        StyleSheet, 
        Animated,
        Keyboard,
       } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import api from '../../api';
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


Entypo.loadFont();

export default function App() {
	const navigation = useNavigation();
	const toastError= msg => Toast.show(msg,{
		duration: Toast.durations.LONG,
		position: Toast.positions.BOTTOM,
		shadow: true,
		animation: true,
		hideOnPress: true,
		delay: 0,
		backgroundColor:"red",
		onShow: () => {
			// calls on toast\`s appear animation start
		},
		onShown: () => {
			// calls on toast\`s appear animation end.
		},
		onHide: () => {
			// calls on toast\`s hide animation start.
		},
		onHidden: () => {
			// calls on toast\`s hide animation end.
		}
	});

	const toastSucess= msg => Toast.show(msg,{
		duration: Toast.durations.LONG,
		position: Toast.positions.BOTTOM,
		shadow: true,
		animation: true,
		hideOnPress: true,
		delay: 0,
		backgroundColor:"green",
		onShow: () => {
			// calls on toast\`s appear animation start
		},
		onShown: () => {
			// calls on toast\`s appear animation end.
		},
		onHide: () => {
			// calls on toast\`s hide animation start.
		},
		onHidden: () => {
			// calls on toast\`s hide animation end.
		}
	});

	const [CNPJ, setCNPJ]= useState('');
	const [usuarioField,setUsuarioField]  = useState('');
	const [senhaField, setSenhaField] = useState('');


	const buscaEmpresasPorLogin = async (usuario,senha) =>{
		let lista = await api.buscaEmpresasPorLogin(usuario,senha);
		return lista;
	}

	const configuraConexaoCliente = async (hostname,username,password) =>{
		await api.configuraConexaoCliente(hostname,username,password);
	}

	const buscaLogin = async (login,senha) =>{
		let lista = await api.buscaLogin(login,senha);
		return lista;
	}

	const logar = async () =>{
		if(usuarioField == ''){
			toastError('Digite o Usuário');
		}
		else
		if(senhaField == ''){
			toastError('Digite a Senha');
		}
		else{
			let empresa = await buscaEmpresasPorLogin(usuarioField,senhaField);
			console.log('empresa',empresa);
			if(empresa.data == null){
				
				toastError('Usuário ou senha incorretos');
			}
			else
			{
				await configuraConexaoCliente(empresa.data.ip_servidor,empresa.data.usuario_serv,empresa.data.senha_serv);
				toastSucess('Logando com o usuário');	
				AsyncStorage.clear;	
				AsyncStorage.setItem('login', usuarioField);
				AsyncStorage.setItem('senha', senhaField);
				navigation.navigate('Home');
			}
		}
	}

   const [offset]  = useState(new Animated.ValueXY({x: 0, y:95}));
   const [opacity] = useState(new Animated.Value(0));
   const [logo]    = useState(new Animated.ValueXY({x: 130, y:140}));

   useEffect(()=> {
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', KeyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', KeyboardDidHiede);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();

   }, []);

   function KeyboardDidShow(){
     Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
        useNativeDriver: false,
      })
     ]).start();
   }

   function KeyboardDidHiede(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 140,
        duration: 100,
        useNativeDriver: false,
      })
     ]).start();    
   }


  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
         <Animated.Image
         style={{
          width: logo.x,
          height: logo.y,
          useNativeDriver: false,
         }}
         source={require('../../imagens/logoSatom.png')}
         />
      </View>

      <Animated.View 
        style={[
          styles.container,
          {
            opacity: opacity, 
            transform: [
              { translateY: offset.y}
            ],
            useNativeDriver: false,
          }
        ]}
        >
       

        <View style={styles.input2}>
        <TextInput style={styles.input}
         placeholder="Usuàrio"
		 onChangeText={usuarioField=>setUsuarioField(usuarioField)} 
        /> 
        </View>

        <View style={styles.input2}>
          <TextInput style={styles.input}
          placeholder="Senha"
          onChangeText={senhaField=>setSenhaField(senhaField)} 
          secureTextEntry={true}
          />  
          <Entypo name="eye" size={30} color='#000' style={styles.icone}/>
        </View>     

        <TouchableOpacity style={styles.btnSubmit}
			onPress ={() => logar()}
		>
          <Text style={styles.SubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.RegisterText}>Conectando sua Empresa</Text>
        </TouchableOpacity>        

      </Animated.View>
    </KeyboardAvoidingView>

  )
}


const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#000',

  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    felx:1,
    alignItems: 'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom: 0,
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom:15,
    color: '#222',
    fontSize:17,
    borderRadius:7,
    padding:10,
  },
  btnSubmit:{
     backgroundColor: '#35AAFF',
     width: '90%',
     height: 45,
     alignItems: 'center',
     justifyContent: 'center', 
     borderRadius: 7,
  },
  SubmitText:{
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister:{
    marginTop : 10,
  },
  RegisterText:{
    color: '#FFF',
    marginTop: 10,
  },
  input2:{
    width: '100%',
    height: 80,
  } ,
  inputSenha:{
    backgroundColor: '#FFF',
    width: '90%',
    marginLeft:15 ,
    color: '#222',
    fontSize:17,
    borderRadius:7,
    padding:10,
  },   
  icone:{
    position:'absolute',
    right:40,
    top:10
    
  }

})