// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import About from './about';

function Home(props){
    return(
       <View style={styles.container}>
           <Text style={{fontSize:32}}>Home</Text>
           <Button title="Go to About" onPress={()=>props.navigation.navigate("About",{name:"syed usama ali"})}/>
         </View>

    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        flex:1,
    }
})

export default Home;