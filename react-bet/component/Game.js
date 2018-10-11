import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image ,TouchableOpacity ,KeyboardAvoidingView,AsyncStorage } from 'react-native';

import GetImage from './GetImage';




export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            homeTeamScore: null,
            awayTeamScore: null,
            homeScore:this.props.game[0].betScore,
            awayScore:this.props.game[1].betScore,
            msg:"בחר תוצאה ולחץ המשחק לאישור"
        }
    }


    render() {

 
        var icon = GetImage(this.props.game[0].picture);
        var icon2 = GetImage(this.props.game[1].picture);
      
        var bet1 = this.props.game[0].betScore.toString();
       



        if (this.props.game[2] == true) {


            if (this.state.homeScore == -1) {

                return (
                    
                    <View style={styles.container}>
                       
                        <Text style={{ color: 'white', height: 30, width: '100%', backgroundColor: '#4286f4'}}>{(this.props.game[0].dateOfGame.slice(0, 5))} {"               "} שלב הבתים | כיוון-1 בול-3</Text>
                        <TouchableOpacity onPress={() => {
                            if (this.state.homeTeamScore!=null&&this.state.awayTeamScore!=null)
                            {
                              
                                AsyncStorage.getItem("user").then((value) => {
                                    data = JSON.parse(value);

                                fetch('http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/UpdateUserBet', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                    userID: data.userID,
                                    gameID:this.props.game[0].gameID,
                                    homeTeamID: this.props.game[0].teamID,
                                    awayTeamID: this.props.game[1].teamID,
                                    homeTeamBet:this.state.homeTeamScore,
                                    awayTeamBet:this.state.awayTeamScore
                                      
                                    }),
                                    headers: {
                                      "Content-type": "application/json; charset=UTF-8"
                                    }
                                  })
                                    .then((data) => data.json())
                                    .then((data) => {
                                     
                                     alert("ההימור התקבל");
                                     this.setState({homeScore:this.state.homeTeamScore , awayScore:this.state.awayTeamScore })
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
                                <Image source={icon} style={{ width: 40, height: 40 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text >{this.props.game[0].teamName} </Text>
                            </View>
                            <View style={{ flex: 1 }}>
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
                                <Text>{this.props.game[0].timeOfGame.slice(0, 5)} </Text>
                                <Text style={{color:"red"}}>{"טרם"}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={(awayTeamScore) => this.setState({ awayTeamScore })}
                                    value={this.state.awayTeamScore}
                                    keyboardType={'number-pad'}
                                    returnKeyType="done"
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{this.props.game[1].teamName}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems:'flex-end' }}>
                                <Image source={icon2} style={{ width: 40, height: 40, display: "flex", alignItems: 'flex-end' }} />
                            </View>
                           
                        </View>
                         </TouchableOpacity>
                    </View>
                  


                );

            }
            else {



                return (
                
                    <View style={styles.container}>
                        <Text style={{ color: 'white', height: 30, width: '100%', backgroundColor: '#4286f4' }}>{(this.props.game[0].dateOfGame.slice(0, 5))} {"               "}שלב הבתים | כיוון-1 בול-3</Text>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignContent: 'space-between'
                        }}>

                            <View style={{ flex: 1 }}>
                                <Image source={icon} style={{ width: 40, height: 40 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text >{this.props.game[0].teamName} </Text>
                            </View>
                            <View style={{ flex: 1  }}>


                            <Text style={{color:'red'}}> {this.state.homeScore}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{" VS "}</Text>
                                <Text>{this.props.game[0].timeOfGame.slice(0, 5)} </Text>
                                <Text style={{color:"red"}}>{"טרם"}</Text>
                            </View>
                            <View style={{ flex: 1  }}>


                            <Text style={{color:'red'}}> {this.state.awayScore}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{this.props.game[1].teamName}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems:'flex-end' }}>
                                <Image source={icon2} style={{ width: 40, height: 40, display: "flex", alignItems: 'flex-end' }} />
                            </View>
                        </View>
                    </View>
                   


                );
            }
        }
        else {
            if (this.state.homeScore == -1) {
                return (


                    <View style={styles.container}>
                                            <TouchableOpacity    onPress={() => {
                            if (this.state.homeTeamScore!=null&&this.state.awayTeamScore!=null)
                            {
  
                                AsyncStorage.getItem("user").then((value) => {
                                    data = JSON.parse(value);
                                fetch('http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/UpdateUserBet', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                    userID: data.userID,
                                    gameID:this.props.game[0].gameID,
                                    homeTeamID: this.props.game[0].teamID,
                                    awayTeamID: this.props.game[1].teamID,
                                    homeTeamBet:this.state.homeTeamScore,
                                    awayTeamBet:this.state.awayTeamScore
                                      
                                    }),
                                    headers: {
                                      "Content-type": "application/json; charset=UTF-8"
                                    }
                                  })
                                    .then((data) => data.json())
                                    .then((data) => {
                                     console.log(data);
                                     this.setState({homeScore:this.state.homeTeamScore , awayScore:this.state.awayTeamScore })
                                     alert("ההימור התקבל")
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
                                <Image source={icon} style={{ width: 40, height: 40 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text >{this.props.game[0].teamName} </Text>
                            </View>
                            
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={(homeTeamScore) => this.setState({ homeTeamScore })}
                                    value={this.state.homeTeamScore}
                                    keyboardType={'number-pad'}
                                    returnKeyType="done"
                                />
                            </View>
                            <View>
                                <Text>{" VS "}</Text>
                                <Text>{this.props.game[0].timeOfGame.slice(0, 5)} </Text>
                                <Text style={{color:"red"}}>{"טרם"}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                                    onChangeText={(awayTeamScore) => this.setState({ awayTeamScore })}
                                    value={this.state.awayTeamScore}
                                    keyboardType={'number-pad'}
                                    returnKeyType="done"

                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{this.props.game[1].teamName}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems:'flex-end' }}>
                                <Image source={icon2} style={{ width: 40, height: 40 }} />
                            </View>
                        </View>
                        </TouchableOpacity>
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
                        <View style={{ flex: 1 }}>
                            <Image source={icon} style={{ width: 40, height: 40 }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text >{this.props.game[0].teamName} </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        <Text style={{color:'red'}}> {this.state.homeScore}</Text>
                        </View>
                        <View>
                            <Text>{" VS "}</Text>
                            <Text>{this.props.game[0].timeOfGame.slice(0, 5)} </Text>
                            <Text style={{color:"red"}}>{"טרם"}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        <Text style={{color:'red'}}> {this.state.awayScore}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>{this.props.game[1].teamName}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems:'flex-end'}}>
                            <Image source={icon2} style={{ width: 40, height: 40 }} />
                        </View>
                    </View>
                </View>
              



);
            }
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0ebf4',
        alignContent: 'space-between'

    },
});