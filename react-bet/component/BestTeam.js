import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image ,TouchableOpacity,ScrollView} from 'react-native';

import ListOfTeam from './ListOfTeam';



let list2;
export default class BestTeam extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            list:null
        }

    }

    componentWillMount(){

        fetch("http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/GetTeamList", {
            method: 'POST',
            body: JSON.stringify({
              mode:1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          
            .then((data) => data.json())
            .then((data) => {
              data2 = JSON.parse(data.d);
              
              
                this.setState({list:data2})

            });
    }

    render() {


        return (
<ScrollView >
            <ListOfTeam  list2={this.state.list} navigation={this.props.navigation}/>
            </ScrollView>
        )
    }
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'space-between',
        flexDirection:'row'

    },
});