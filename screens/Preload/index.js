import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
//import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../contexts/UserContext';


import {
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(()=>{
        
        //navigation.navigate('Login');

        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                
                if(token) {

                    await AsyncStorage.setItem('token', token);

                   

                    navigation.reset({
                        routes:[{name:'Home'}]
                    });

                } else {
                    navigation.navigate('Login');
                }
            } else {
                navigation.navigate('Login');
            }
        }
        
         logout = ()  => {
            AsyncStorage.setItem('token', '');
            AsyncStorage.setItem('id','');
			AsyncStorage.setItem('nome', '');
			AsyncStorage.setItem('role', '');
            navigation.navigate('Login');
        }
        dashboard = ()  => {
            
            navigation.navigate('DashBoard');
         }
        checkToken();
    }, []);



    return (
        <Container
            backgroundColor="white"
        >
    
            <LoadingIcon size="large" color="green" />
        </Container>
    );
}