import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import ListOfGames from './ListOfGames';
import SpeicelBet from './SpeicelBet';
import GetImageScorer from './GetImageScorer';
import GetImageTeams from './GetImageTeams';

let data;
let data2;
let data4;
let urlAPI = "http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetGamesAndResultForUser2";
export default class FirstPage extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            data2: null,
            list: null,
            bet: null,
        }

    }


    componentWillReceiveProps() {



        console.log("homepage props");

        this.setState({ bet: null });
        AsyncStorage.getItem("user").then((value) => {
            data4 = JSON.parse(value);


            fetch("http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetSpeicelBetForUser", {
                method: 'POST',
                body: JSON.stringify({
                    userID: parseInt(data4.userID)
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then((data) => data.json())
                .then((data) => {
                    data2 = JSON.parse(data.d);
                    this.setState({ bet: data2 });

                });






        }).done();

    }

    componentDidMount() {

        console.log("homepage mount");

        AsyncStorage.getItem("user").then((value) => {
            data4 = JSON.parse(value);


            fetch("http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetSpeicelBetForUser", {
                method: 'POST',
                body: JSON.stringify({
                    userID: parseInt(data4.userID)
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then((data) => data.json())
                .then((data) => {
                    data2 = JSON.parse(data.d);
                    this.setState({ bet: data2, list: 2 });

                });








        }).done();









    }







    render() {

        if (this.state.bet != null) {
            return (
                <ScrollView >



                 

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: 'center',
                        alignContent: 'space-between',
                        backgroundColor: "#c8f280",
                        
                    }} key={1}>


                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('BestScorer');

                        }}>
                           <View style={{flex:1}}>
                        
                            <Image source={GetImageScorer(this.state.bet.playerPicture)} style={{ width: 60, height: 60 }} />\
                            <Text style={{color:'white'}}> מלך השערים </Text>
                            </View>
                            </TouchableOpacity>
                            
                        
                        


                        
                        <View style={{flex:1 ,alignItems:'center'}}>

                       <Image source={{uri:data4.picture}} style={{ width: 60, height: 60 ,borderRadius:12}} />
                       <Text style={{color:'white'}}>{data4.firstName} </Text>
                       </View>
                    
                   
                                            <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('BestTeam');
                        }}>
                             <View style={{flex:1 ,alignItems:'flex-end'}}>
                            <Image source={GetImageTeams(this.state.bet.picture)} style={{ width: 60, height: 60 }} />
                            <Text style={{color:'white'}}>הנבחרת הזוכה</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        
                    <ListOfGames list={this.state.list} />
                </ScrollView>
            );
        }
        else {
            return (
                <ScrollView >
                    <Text ></Text>

                </ScrollView>
            )
        }
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0ebf4',
        alignItems: 'center',

    },
});

