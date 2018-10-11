import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image,AsyncStorage,ScrollView } from 'react-native';
import ListOfGames2 from './ListOfGames2';



let data;
let data2;

export default class MyBet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bet: null
    }
  }




  componentWillMount() {


    AsyncStorage.getItem("user").then((value) => {
      data = JSON.parse(value);
      fetch("http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetBetsForUser", {
        method: 'POST',
        body: JSON.stringify({
          userID: parseInt(data.userID)
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((data) => data.json())
        .then((data) => {
          data2 = JSON.parse(data.d);
          this.setState({ bet:data2 });
          
        });
    }).done();
  }



  render() {


      
      return (

        <ScrollView>
        <View >

          <ListOfGames2 list={this.state.bet}/>
        </View>
</ScrollView>



      );
    



  }
  
}