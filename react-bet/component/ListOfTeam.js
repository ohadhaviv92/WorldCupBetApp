import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage } from 'react-native';

import GetImageTeams from './GetImageTeams';

let list3;
export default class ListOfTeam extends React.Component {
    constructor(props) {
        super(props);



    }


    render() {
        if (this.props.list2 != null) {
            list3 = [];
           
            
            for (let i = 0; i < (this.props.list2).length; i++) {

                list3.push(
                    <View key={i} style={styles.container}
                     >
                    <View style={{flex:i}}> 
                        <TouchableOpacity onPress={() => {

                            AsyncStorage.getItem("user").then((value) => {
                                data = JSON.parse(value);

                                fetch("http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/UpdateTeamBetForUser", {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        userID: parseInt(data.userID),
                                        teamID: this.props.list2[i].teamID

                                    }),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                })
                                    .then((data) => data.json())
                                    .then((data) => {
                                        data2 = JSON.parse(data.d);
                                        if (data2 == true) {

                                            this.props.navigation.navigate('HomePage', {
                                                teamID: this.props.list2[i].teamID,
                                            });

                                        }

                                    });
                            })

                        }}  >
                            <Image source={GetImageTeams(this.props.list2[i].picture)} style={{ width: 100, height: 100 }} />

                       
                        </TouchableOpacity>
                        </View>
                    </View>
                );
            }

        }
        return (
            <View>
                {list3}
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