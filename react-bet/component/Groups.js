import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image,Modal, TouchableOpacity, AsyncStorage } from 'react-native';
import GroupView from './GroupView'
import ImagePickerFromGallery from './ImagePickerFromGallery';
import CameraPage from './CameraPage'; 

let list = [];
let data4;

export default class Groups extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listGroups: null,

        }


    }



    

componentWillReceiveProps(){

    this.componentWillMount();
}


    componentWillMount() {
        console.log("mount group");
        
        AsyncStorage.getItem("user").then((value) => {
            data4 = JSON.parse(value);
            fetch('http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/AllGroupsForUser', {
                method: 'POST',
                body: JSON.stringify({
                    userID: data4.userID,

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
                            <GroupView group={data2[i]} key={i} navigation={this.props.navigation} num={i+1}/>
                        )

                    }

                    this.setState({ listGroups: list })

                })
        })
    }

    render() {



      
            return (
                <View>
                     <View style={{height:20}} ></View>
                    <Button onPress={() => {

this.props.navigation.navigate('AddGroup', {
    userID: data4.userID,
});



                    }

                    }
                        title="הוסף קבוצה"
                        color="red"
                        value="SAS"
                    />


                    {this.state.listGroups!=null?this.state.listGroups:    <Text>אתה לא באף קבוצה</Text>}
                </View>
            )
        
        

            
        
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
});