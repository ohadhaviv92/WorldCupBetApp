


import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, AsyncStorage } from 'react-native';



import Game2 from './Game2';

let listGames3 = [];

export default class ListOfGames2 extends React.Component {
  constructor(props) {
    super(props);

     

  }




  render() {

  
   


    if(this.props.list!=null)
    {
      listGames3 = [];
      let  listGames2=[];
      let flag=false;
      let date=0;
       for (let i = 0; i < (this.props.list).length; i++) {
   
         if(this.props.list[i].dateOfGame!=date)
         {
            flag=true;
            date=this.props.list[i].dateOfGame;
         }
         listGames2=[this.props.list[i],this.props.list[i+1],flag];
         flag=false;
         
         
         listGames3.push(
           <Game2 game={listGames2} key={Math.random()} /> 
          
         )
         i++;
       }
    }
   

    return (
      <View >
        {listGames3}
     
      </View>
    );
  }
}



















 