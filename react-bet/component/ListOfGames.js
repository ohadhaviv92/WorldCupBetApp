import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, AsyncStorage } from 'react-native';


import Game from './Game';
import Game3 from './Game3';
let data;
let data2;
let data4;
let listGames = [];
let urlAPI = "http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetGamesAndResultForUser2";
export default class ListOfGames extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data2: null,
      list: null,
      bet:null,
  }

  }



componentWillReceiveProps(){
  if(this.props.mode!=2)
  {
  this.setState({list:null});
  console.log("Props list of games");
  
  AsyncStorage.getItem("user").then((value) => {
    data4 = JSON.parse(value);

  fetch(urlAPI, {
    method: 'POST',
    body: JSON.stringify({
        userID:parseInt(data4.userID)
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then((data) => data.json())
    .then((data) => {
        data2 = JSON.parse(data.d);
       
        
        this.setState({ list: data2 });
       
    });

  }).done();
  }
}


componentDidMount()
{

  if(this.props.mode!=2)
  {
  console.log("mount list of games");
  AsyncStorage.getItem("user").then((value) => {
    data4 = JSON.parse(value);

  fetch(urlAPI, {
    method: 'POST',
    body: JSON.stringify({
        userID:parseInt(data4.userID)
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then((data) => data.json())
    .then((data) => {
        data2 = JSON.parse(data.d);
       
        
        this.setState({ list: data2 });
       
    });

  }).done();
}
else{
  this.setState({ list: this.props.list });
}
}


  render() {

  




    if (this.state.list != null) {
      listGames = [];
     let  listGames2=[];
     let flag=false;
     let date=0;
      for (let i = 0; i < (this.state.list).length; i++) {

        if(this.state.list[i].dateOfGame!=date)
        {
           flag=true;
           date=this.state.list[i].dateOfGame;
        }
        listGames2=[this.state.list[i],this.state.list[i+1],flag];
        flag=false;
        if(this.props.mode==2)
        {
          listGames.push(
            <Game3 game={listGames2} key={Math.random()} /> 
           
          )
        }
        else
        {
        listGames.push(
          <Game game={listGames2} key={Math.random()} /> 
         
        )
        }
        i++;
      }
     
    }
   

    return (
      <View style={{backgroundColor:'white'}}>
        {listGames}
     
      </View>
    );
  }
}