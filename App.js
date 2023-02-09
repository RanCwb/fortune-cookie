import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert,} from 'react-native'

function app(){

  const[img, setImg] = useState(require('./src/biscoito.png'));
  const [textFrase, setTextFrase] = useState('');

  let frases = [
       'Siga os bons e aprenda com eles.',
       'O bom-senso vale mais do que muito conhecimento ',
       'O riso é a menor distância entre duas pessoas.',
       'Deixe de lado as preocupações e seja feliz.',
       'Realize o óbvio, pense no improvável e conquiste o impossível.',
       'Acredite em milagres, mas não dependa deles.',
       'A maior barreira para o sucesso é o medo do fracasso.',
       
  ];


  function brake(){
    
   let randomNum = Math.floor(Math.random() * frases.length)

  setTextFrase(' "' + frases[randomNum] + '"');
  setImg(require('./src/biscoitoAberto.png'))
    
  }

  function reset() {

     setImg(require('./src/biscoito.png'))
     setTextFrase('');

    
  }

  return(

     <View style={styles.container}>
     <Image
      source={img}
     style={styles.img}
     /> 

    <Text style={styles.fraseImg}>{textFrase}</Text>

    <TouchableOpacity style={styles.botao} onPress={brake}>
      <View style={styles.btnArea}>
        <Text style={styles.btnText}>Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.botao, {marginTop:15, borderColor:'black'}]} onPress={reset}>
      <View style={styles.btnArea}>
        <Text style={[styles.btnText,{color:'#121212'}]}> Reiniciar Biscoito</Text>
      </View>
    </TouchableOpacity>

     </View>



  );
  
}

const styles = StyleSheet.create({

container:{
backgroundColor: '#B0B6B2',
flex:1,
justifyContent:'center',
alignItems:'center',

},

img:{
 width:230,
 height:230,
},
fraseImg:{

fontSize:24,
color: 'blue',
fontStyle:"italic",
margin: 30,
textAlign:'center',

},
botao:{

  width:230,
  borderColor:'blue',
  height:50,
  borderWidth: 2,
  borderRadius: 25,
  
},
btnArea:{

flex:1,
justifyContent:'center',
alignItems:'center',

},
btnText:{

 fontSize: 18,
 fontWeight: 'bold',
 color: 'blue'


}


})



export default app;