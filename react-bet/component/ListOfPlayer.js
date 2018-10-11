import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage } from 'react-native';

import GetImageScorer from './GetImageScorer';

let list2;
export default class ListOfPlayer extends React.Component {
    constructor(props) {
        super(props);



    }



    render() {
        if (this.props.list != null) {
            list2 = [];
            
            for (let i = 0; i < (this.props.list).length; i++) {

                list2.push(
                    <View key={i} style={styles.container}
                     >
                    <View style={{flex:i}}> 
                        <TouchableOpacity onPress={() => {

                            AsyncStorage.getItem("user").then((value) => {
                                data = JSON.parse(value);

                                fetch("http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/UpdateScorerBetForUser", {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        userID: data.userID,
                                        playerID: this.props.list[i].playerID

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
                                                playerID: this.props.list[i].playerID,
                                            });

                                        }

                                    });
                            })

                        }}  >
                            <Image source={GetImageScorer(this.props.list[i].picture)} style={{ width: 100, height: 100 }} />

                       
                        </TouchableOpacity>
                        </View>
                    </View>
                );
            }

        }
        return (
            <View>
                {list2} </View>
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