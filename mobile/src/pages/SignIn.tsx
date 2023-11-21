import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../context/AuthContext';

export default function SignIn(){
  const {signIn, loadingAuth} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(){
    if(email === "" || password === ""){
      return;
    }

    await signIn({email, password})
  }

  return(
    <View style={styles.container}>
       <Image style={styles.title} source={require("../../assets/title.png")}/>

    <View style={styles.inputContainer}>
      <TextInput 
        placeholder="Digite seu email" 
        style={styles.input} 
        placeholderTextColor="#f0f0f0ac"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
        placeholder="Digite sua senha" 
        style={styles.input} 
        placeholderTextColor="#f0f0f0ac"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      {loadingAuth ? (
        <ActivityIndicator size={25} color="#FFF"/>
      ) : (
        <Text style={styles.buttonText}>Acessar</Text>
      )}
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1d2e"
  },
  title:{
    width: "85%",
    height: 200,
    marginTop: -70,
  },
  logo:{
    marginBottom: 10,
    width: "80%",
    height: 250,
    borderRadius: 50
  },
  inputContainer:{
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 14
  },
  input: {
    width: "95%",
    height: 40,
    backgroundColor: "#101026",
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: "#fff"
  },
  button:{
    width: "83%",
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#101026"
  },
  p:{
    color:"#fff"
  }
})