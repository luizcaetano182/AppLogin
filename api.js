import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = 'http://201.20.189.70/';


export default {
    buscaEmpresasPorLogin : async (login,senha) =>{
        let formdata = new FormData();
        formdata.append("login", login)
        formdata.append("senha", senha)
        const req = await fetch(`${BASE_API}/buscaEmpresaPorLogin`, { 
        method: 'POST', 
        headers: {
           // Accept: 'application/json',
           // 'Content-Type': 'application/json',   
        },
        body:formdata
    });
    try{
        const json = await req.json();
       
    return json;

    }
    catch
    {
        return true; 
    }

    },


    configuraConexaoCliente : async (hostname,username,password) =>{
        let formdata = new FormData();

        formdata.append("hostname", hostname)
        formdata.append("username", username)
        formdata.append("password", password)
     
        const req = await fetch(`${BASE_API}/configuraConexaoCliente`, { 
    
        method: 'POST', 
        headers: {
           // Accept: 'application/json',
           // 'Content-Type': 'application/json',   
        },
        body:formdata
    });
    try{
        const json = await req.formData();
       
    return json;

    }
    catch
    {
        return true; 
    }
   
    

    },

    buscaLogin : async (login,senha) =>{
        const req = await fetch(`${BASE_API}/buscaUsuario?login=${login}&senha=${senha}`, { 
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',   
        },
    });
    const json = await req.json();    

    return json;    

    },




}
