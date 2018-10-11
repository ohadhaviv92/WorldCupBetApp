import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import groupIcon from '../images/group1.jpg';
import GetImageScorer from './GetImageScorer';
import GetImageTeams from './GetImageTeams';
export default class AddUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            listGroups:null
        }


    }

   componentDidMount(){
    fetch('http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetAllUsers', {
        method: 'POST',
        body: JSON.stringify({
            mode: 1,

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
                    <TouchableOpacity key={i} onPress={()=>{
                        fetch('http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/AddUserToGroup', {
                            method: 'POST',
                            body: JSON.stringify({
                                groupID: this.props.navigation.getParam('groupID'),
                                userID:data2[i].userID
                    
                            }),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            }
                        })
                            .then((data) => data.json())
                            .then((data) => {
                                data2 = JSON.parse(data.d);
                                if(data2==true)
                                {
                                    alert("התווסף בהצלחה");
                                    this.props.navigation.navigate('ListOfUser', {
                                        playerID: 1,
                                    });
                                }
                            })
                    }}>
                    <View style={{backgroundColor:'black' ,width:'100%',height:5}}> </View>
                    < Text style={{fontSize:15}}>{data2[i].firstName}</ Text>
                   
                    
                    </TouchableOpacity >
                )

            }

            this.setState({ listGroups: list })

        })

   }

    render() {

        
        return (

            <View >
                <View style={{height:20}} ></View>
                <Text style={{color:'red',fontSize:20}}>לחץ והוסף משתמשים לקבוצה</Text>
{this.state.listGroups}
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