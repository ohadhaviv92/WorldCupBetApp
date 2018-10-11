import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import GetImage from './GetImage';






export default class Game3 extends React.Component {
    constructor(props) {
        super(props);
         
        this.state={
            homeTeamScore:null,
            awayTeamScore:null
        }

    }


    render() {

        let homeTeamScore = parseInt(this.props.game[0].finalScore);
        let awayTeamScore = parseInt(this.props.game[1].finalScore);
        let homeTeamScoreBet = parseInt(this.props.game[0].betScore);
        let awayTeamScoreBet = parseInt(this.props.game[1].betScore);



        var icon = GetImage(this.props.game[0].picture);
        var icon2 = GetImage(this.props.game[1].picture);


       
            return (
                <View style={styles.container}>
               <TouchableOpacity onPress={() => {
                            if (this.state.homeTeamScore!=null&&this.state.awayTeamScore!=null)
                            {
                              
                                AsyncStorage.getItem("user").then((value) => {
                                    data = JSON.parse(value);

                                fetch('http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/UpdateScoreOfGame', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                    gameID:this.props.game[0].gameID,
                                    homeTeamID: this.props.game[0].teamID,
                                    awayTeamID: this.props.game[1].teamID,
                                    homeTeamScore:this.state.homeTeamScore,
                                    awayTeamScore:this.state.awayTeamScore
                                      
                                    }),
                                    headers: {
                                      "Content-type": "application/json; charset=UTF-8"
                                    }
                                  })
                                    .then((data) => data.json())
                                    .then((data)=> { data2=JSON.parse(data.d)  ;
                                     if(data2==true)
                                     alert("התוצאה נשלחה");
                                     else
                                     alert("התוצאה נכשלה");
                                    })
                                })

                            }

                         }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: 'space-between'
                }}>
  <View style={{ flex: 1 }}>
   <Text>{this.props.game[0].timeOfGame.slice(0, 5)}</Text>
   </View>
                    <View style={{ flex: 1 }}>
                        <Image source={icon} style={{ width: 30, height: 30 }} />
                        <Text >{this.props.game[0].teamName} </Text>
                    </View>
 
                    <View style={{ flex: 1  }}>
                    <TextInput
                                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={(homeTeamScore) => this.setState({ homeTeamScore })}
                                    value={this.state.homeTeamScore}
                                    keyboardType={'number-pad'}
                                    returnKeyType="done"
                                />


                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>{" VS "}</Text>
                    </View>
                    <View style={{ flex: 1  }}>
                    <TextInput
                                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={(awayTeamScore) => this.setState({ awayTeamScore })}
                                    value={this.state.awayTeamScore}
                                    keyboardType={'number-pad'}
                                    returnKeyType="done"
                                />
                    </View>
                    <View style={{ flex: 1, alignItems:'flex-end' }}>
                        <Image source={icon2} style={{ width: 30, height: 30, display: "flex", alignItems: 'flex-end' }} />
                        <Text>{this.props.game[1].teamName}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'flex-end' }}>
                      <Text>{this.props.game[0].dateOfGame.slice(0, 5)}</Text>
                     
                    </View>


                </View>
                </TouchableOpacity>
            </View>
            );
        
       



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