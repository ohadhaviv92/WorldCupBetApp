import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import  UserView from './UserView'; 
import {Ionicons } from '@expo/vector-icons';
let list;
let data2;
export default class ListOfUser extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            listUsers:null
        }


    }

   componentWillReceiveProps()
   {
       
       
    fetch('http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetAllUsersInSpecGroup', {
        method: 'POST',
        body: JSON.stringify({
            groupID:  this.props.navigation.getParam('groupID'),

        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((data) => data.json())
        .then((data) => {
            data2 = JSON.parse(data.d);
            list = [];
            for (let i = 0; i < data2.length; i++) {
                
                


                list.push(
                    <UserView group={data2[i]} navigation={this.props.navigation} key={i} num={i+1}/>
                )

            }

            this.setState({ listUsers: list })

        })

   }

   componentDidMount()
   {
       this.componentWillReceiveProps();
   }

    render() {

        
        return (
            <View >
                <View style={{backgroundColor:'#4286f4' ,width:'100%',height:15}}> </View>
                <View style={{backgroundColor:'#4286f4' ,width:'100%',height:40}}> 
                
                <TouchableOpacity  onPress={()=>{
                                this.props.navigation.navigate('AddUsers', {
                                    groupID:this.props.navigation.getParam('groupID'),
                                    
                                });
                }}>
                 <Ionicons name="ios-person-add" size={40} color="black"/>
             </TouchableOpacity>
             
                </View>
              {this.state.listUsers}

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