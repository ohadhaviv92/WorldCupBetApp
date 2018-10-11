import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import GetImage from './GetImage';






export default class Game2 extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {

        let homeTeamScore = parseInt(this.props.game[0].finalScore);
        let awayTeamScore = parseInt(this.props.game[1].finalScore);
        let homeTeamScoreBet = parseInt(this.props.game[0].betScore);
        let awayTeamScoreBet = parseInt(this.props.game[1].betScore);

        if(homeTeamScoreBet==-1)
        {
            homeTeamScoreBet="?";
            awayTeamScoreBet="?";
        }
        if(homeTeamScore==-1)
        {
            homeTeamScore="? -";
            awayTeamScore="? -";
        }

        var icon = GetImage(this.props.game[0].picture);
        var icon2 = GetImage(this.props.game[1].picture);

if(homeTeamScore=="? -"){
    return (
    <View style={styles.container}>
              
    <View style={{
        display: "flex",
        flexDirection: "row",
        alignContent: 'space-between'
    }}>

<View style={{ flex: 1 ,}}>
           
            <Text style={{fontSize:25, backgroundColor:'gray',borderWidth:'2px',borderRadius:100,borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center'}} > 0 </Text>
        </View>
        <View style={{ flex: 1 }}>
            <Image source={icon} style={{ width: 30, height: 30 }} />
            <Text >{this.props.game[0].teamName} </Text>
        </View>

        <View style={{ flex: 1  }}>
        <Text style={{backgroundColor:'gray',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center', zIndex:1}}> {homeTeamScoreBet}</Text>

        <Text style={{backgroundColor: '#fff',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:20,height:30,position:'absolute',top:1,left:30,textAlign:'center', zIndex:2}}> {homeTeamScore}</Text>
        </View>
        <View style={{ flex: 1 }}>
            <Text>{" VS "}</Text>
        </View>
        <View style={{ flex: 1  }}>


          <Text style={{backgroundColor:'gray',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center', zIndex:1}}> {awayTeamScoreBet}</Text>
          <Text style={{backgroundColor: '#fff',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:20,height:30,position:'absolute',top:1,left:30,textAlign:'center', zIndex:2}}> {awayTeamScore}</Text>
        </View>
        <View style={{ flex: 1, alignItems:'flex-end' }}>
            <Image source={icon2} style={{ width: 30, height: 30, display: "flex", alignItems: 'flex-end' }} />
            <Text>{this.props.game[1].teamName}</Text>
        </View>
        <View style={{ flex: 1, alignItems:'flex-end' }}>
          <Text>{this.props.game[0].dateOfGame.slice(0, 5)}</Text>
            <Text>{this.props.game[0].timeOfGame.slice(0, 5)}</Text>
        </View>


    </View>
</View>
);
}


        else if (homeTeamScore === homeTeamScoreBet && awayTeamScore === awayTeamScoreBet ) {
            return (
                <View style={styles.container}>
              
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: 'space-between'
                }}>

      <View style={{ flex: 1 ,}}>
                       
                        <Text style={{fontSize:25, backgroundColor:'#6cdb1c',borderWidth:'2px',borderRadius:100,borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center'}} > 3 </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={icon} style={{ width: 30, height: 30 }} />
                        <Text >{this.props.game[0].teamName} </Text>
                    </View>
 
                    <View style={{ flex: 1  }}>
                    <Text style={{backgroundColor:'#6cdb1c',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center', zIndex:1}}> {homeTeamScoreBet}</Text>

                    <Text style={{backgroundColor: '#fff',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:20,height:30,position:'absolute',top:1,left:30,textAlign:'center', zIndex:2}}> {homeTeamScore}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>{" VS "}</Text>
                    </View>
                    <View style={{ flex: 1  }}>


                      <Text style={{backgroundColor:'#6cdb1c',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center', zIndex:1}}> {awayTeamScoreBet}</Text>
                      <Text style={{backgroundColor: '#fff',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:20,height:30,position:'absolute',top:1,left:30,textAlign:'center', zIndex:2}}> {awayTeamScore}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'flex-end' }}>
                        <Image source={icon2} style={{ width: 30, height: 30, display: "flex", alignItems: 'flex-end' }} />
                        <Text>{this.props.game[1].teamName}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'flex-end' }}>
                      <Text>{this.props.game[0].dateOfGame.slice(0, 5)}</Text>
                        <Text>{this.props.game[0].timeOfGame.slice(0, 5)}</Text>
                    </View>


                </View>
            </View>
            );
        }
        else if (homeTeamScore > awayTeamScore && homeTeamScoreBet > awayTeamScoreBet && homeTeamScoreBet != "?" || awayTeamScore > homeTeamScore && awayTeamScoreBet > homeTeamScoreBet && homeTeamScoreBet != "?" || homeTeamScore === awayTeamScore && homeTeamScoreBet === awayTeamScoreBet && homeTeamScoreBet != "?"  ) {
            return (
                <View style={styles.container}>
              
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: 'space-between'
                }}>

      <View style={{ flex: 1 ,}}>
                       
                        <Text style={{fontSize:25, backgroundColor:'blue',borderWidth:'2px',borderRadius:100,borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center' }} > 1 </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={icon} style={{ width: 30, height: 30 }} />
                        <Text >{this.props.game[0].teamName} </Text>
                    </View>
 
                    <View style={{ flex: 1  }}>
                    <Text style={{backgroundColor:'blue',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center',zIndex:1}}> {homeTeamScoreBet}</Text>

                    <Text style={{ backgroundColor: '#fff', borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:20,height:30,position:'absolute',top:1,left:30,textAlign:'center', zIndex:2}}> {homeTeamScore}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>{" VS "}</Text>
                    </View>
                    <View style={{ flex: 1  }}>


                      <Text style={{backgroundColor:'blue',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center'}}> {awayTeamScoreBet}</Text>
                      <Text style={{backgroundColor: '#fff',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:20,height:30,position:'absolute',top:1,left:30,textAlign:'center'}}> {awayTeamScore}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'flex-end' }}>
                        <Image source={icon2} style={{ width: 30, height: 30, display: "flex", alignItems: 'flex-end' }} />
                        <Text>{this.props.game[1].teamName}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'flex-end' }}>
                      <Text>{this.props.game[0].dateOfGame.slice(0, 5)}</Text>
                        <Text>{this.props.game[0].timeOfGame.slice(0, 5)}</Text>
                    </View>

                </View>
            </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
              
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: 'space-between'
                }}>

      <View style={{ flex: 1 ,}}>
                       
                        <Text style={{fontSize:25, backgroundColor:'red',borderWidth:'2px',borderRadius:100,borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center'}} > 0 </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={icon} style={{ width: 30, height: 30 }} />
                        <Text >{this.props.game[0].teamName} </Text>
                    </View>
 
                    <View style={{ flex: 1  }}>
                    <Text style={{backgroundColor:'red',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center', zIndex:1}}> {homeTeamScoreBet}</Text>

                    <Text style={{backgroundColor: '#fff',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:20,height:30,position:'absolute',top:1,left:30,textAlign:'center', zIndex:2}}> {homeTeamScore}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>{" VS "}</Text>
                    </View>
                    <View style={{ flex: 1  }}>


                      <Text style={{backgroundColor:'red',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:40,height:50,position:'relative',top:6,textAlign:'center', zIndex:1}}> {awayTeamScoreBet}</Text>
                      <Text style={{backgroundColor: '#fff',borderWidth:'2px',borderStyle:'solid',borderWidth:2,borderBottomColor:'gray' ,width:20,height:30,position:'absolute',top:1,left:30,textAlign:'center', zIndex:2}}> {awayTeamScore}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'flex-end' }}>
                        <Image source={icon2} style={{ width: 30, height: 30, display: "flex", alignItems: 'flex-end' }} />
                        <Text>{this.props.game[1].teamName}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'flex-end' }}>
                      <Text>{this.props.game[0].dateOfGame.slice(0, 5)}</Text>
                        <Text>{this.props.game[0].timeOfGame.slice(0, 5)}</Text>
                    </View>

                </View>
            </View>
            );
        }



    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'space-between',
        width:'100%',
        height:70


    },
});