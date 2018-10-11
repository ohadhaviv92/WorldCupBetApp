import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import groupIcon from '../images/group1.jpg';
import GetImageScorer from './GetImageScorer';
import GetImageTeams from './GetImageTeams';
export default class UserView extends React.Component {
    constructor(props) {
        super(props);

        this.state={
           
        }


    }

   

    render() {

        
        return (

            <View style={{
                display: "flex",
                flexDirection: "row",
               alignContent:'stretch'
                
            }}>
                      <TouchableOpacity  onPress={()=>{
                                this.props.navigation.navigate('BetOfFriends', {
                                    groupID:this.props.group.groupID,
                                    
                                });
                }}>
                 <FontAwesome name="info-circle" size={32} color="#4286f4"/>
             </TouchableOpacity>
             
               
           
             <Image style={{ width: 25, height: 25,flex:1 }} source={GetImageTeams(this.props.group.teamName)}/> 
             <Image style={{ width: 25, height: 25 ,flex:1 }} source={GetImageScorer(this.props.group.playerName)}/> 
             
             <Text style={{fontSize:20 ,flex:1}}>{"נק-"+this.props.group.totalScore} </Text>
             
             <Text style={{fontSize:10,flex:1}}>{this.props.group.firstName} </Text>
    
             <Image style={{ width: 40, height: 40,flex:1}} source={{uri:this.props.group.picture}}/> 
             
             <Text style={{fontSize:20 ,flex:1 ,color:'red'}} >{this.props.num} </Text>

                 </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row'
        

    },
});