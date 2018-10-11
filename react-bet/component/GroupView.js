import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage } from 'react-native';

import groupIcon from '../images/group1.jpg';

export default class GroupView extends React.Component {
    constructor(props) {
        super(props);



    }

    render() {

        
        return (
            
            <View style={{backgroundColor:'white'}}>
             <View style={{width:'100%',height:5,backgroundColor:'#4286f4'}}> </View>
                <TouchableOpacity style={{
                            display: "flex",
                            flexDirection: "row",
                            alignContent: 'space-between',
                            
                        }} onPress={()=>{
               
               this.props.navigation.navigate('ListOfUser', {
                groupID:this.props.group.groupID,
                
            });
                }}>
             
             
             <Text style={{fontSize:15,flex:1}}>{this.props.group.startDate.slice(0,10)} </Text>
             <Text style={{fontSize:20,flex:1,alignItems:'center'}}>{this.props.group.groupName} </Text>
             <Image style={{width:60,height:60,borderRadius:20,flex:1,alignItems: 'flex-end'}}  source={{uri:this.props.group.picture}}/> 
             </TouchableOpacity>
            
                 </View>
        )
    }
}


