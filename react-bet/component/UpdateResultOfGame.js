import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import ListOfGames from './ListOfGames';



class UpdateResultOfGame extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            data2: null,
            list: null,
            bet: null,
        }

    }

    componentDidMount() {

        fetch("http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetIncomingGames", {
            method: 'POST',
            body: JSON.stringify({
                mode: 2
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((data) => data.json())
            .then((data) => {
                data2 = JSON.parse(data.d);


                this.setState({ list: data2 });

            });

    }
    render() {

        if (this.state.list != null) {
            return (
                <ScrollView>

<View style={{height:20}} ></View>
                    <ListOfGames list={this.state.list} mode={2} />
                </ScrollView>
            );
        }
        else {
            return (
                <ScrollView>
                    <View style={{height:20}} ></View>
                    <Text> טוען... </Text>
                </ScrollView>
            );
        }
    }
}

export default UpdateResultOfGame;