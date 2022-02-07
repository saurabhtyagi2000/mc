import React ,{ Component } from 'react';
import { StyleSheet, Text, View ,Image ,TextInput,TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import db from './localDb'
console.log(db.and)
export default class App extends Component {
  constructor(){
    super();
    this.state={
      text : '',
      chunk:[]
    }

  }
  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
     <Header backgroundColor={'grey'}
      centerComponent={{text : 'Monkey Chunky',style:{color: 'white', fontSize :20 } }}/>
    <Image source={{uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}
    style={styles.imageIcon}/>
   <TextInput onChangeText={(text1)=>{this.setState({text: text1 }) }} 
   value ={this.state.text}
   style={styles.inputBox}/>
   <TouchableOpacity style= {styles.goButton} onPress={()=>{
     this.setState({chunk: db[this.state.text].chunks})
     alert(this.state.chunk) }}> 
   <Text style={styles.buttonText}> Go </Text>
   </TouchableOpacity >
   
   {/* {this.state.chunks.map((item)=>{
     return <Text> {item}</Text>  
     })} */}
    </View>
    </SafeAreaProvider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  imageIcon:{
    height: 150,
    width:150,
    alignSelf:'center'
  },
inputBox:{
  borderWidth: 2,
  width:'80%',
  alignSelf:'center',
  marginTop:40,
  textAlign:'center',
},
goButton:{
width:'20%',
alignSelf:'center',
marginTop: 30,
},
buttonText:{
  textAlign:'center',
  fontWeight:'bold' ,
  fontSize:50,
}

});
