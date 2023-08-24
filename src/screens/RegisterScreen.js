import React,{useEffect,useState} from "react";
import {Text,View,StyleSheet, KeyboardAvoidingView, TextInput} from "react-native";
 const RegisterScreen = () =>{
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,seEmail] = useState("");

    return(
       <View style={styles.continer}>
        <KeyboardAvoidingView>
        {/* <View style={{flex:1}}> */}
        <View Style={{ marginTop: 10,
              justifyContent: "center",
              alignContent:"center",
              alignItems: "center" }}>
                    <Text style={{ color: "#4A55A2", fontSize: 20,textAlign:"center", fontWeight: "600",marginVertica:100}}>Register</Text>
                    <Text style={{ color: "#4a55a2", fontSize: 17, textAlign:"center",marginTop: 15 }}>Register to Your Account</Text>
        </View>
        
        <View style={{marginTop:100,alignContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:16,color:'gray',fontWeight:"600"}}>Name</Text>
            <TextInput 
            value={name}
            onChangeText={(txt)=>setName(name)}
            placeholder="Enter your name"
            placeholderTextColor={"gray"}
            style={{width:300,color:"black",borderBottomColor:"",borderBottomWidth:1,marginVertical:10, fontSize: name ? 18 : 18}}/>

            <Text style={{fontSize:16,color:'gray',fontWeight:"600"}}>Email</Text>
            <TextInput 
            value={email}
            onChangeText={(txt)=>setEmail(email)}
            placeholder="Enter your email"
            placeholderTextColor={"gray"}
            style={{width:300,color:"black",borderBottomColor:"",borderBottomWidth:1,marginVertical:10, fontSize: email ? 18 : 18}}/>
        
            <Text style={{marginTop:10,color:"gray",fontWeight:"600",fontSize:16}}>Password</Text>
            <TextInput 
            value={password}
            onChangeText={(pass)=>setPassword(pass)}
            placeholder="Enter your password"
            placeholderTextColor={"gray"}
            secureTextEntry={true}
            style={{fontSize:18,marginHorizontal:10,width:300,borderBottomColor:"gray",color:"black",borderBottomWidth:1}}/>

            <Text style={{marginTop:10,color:"gray",fontWeight:"600",fontSize:16}}>Image</Text>
        </View>
        </KeyboardAvoidingView>
       </View>
    );
 }

export default RegisterScreen;
const styles = StyleSheet.create({
    continer:{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
       
    }
})
//default export RegisterScreen;
