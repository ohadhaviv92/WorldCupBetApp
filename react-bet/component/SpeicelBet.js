import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import BestScorer from './BestScorer';
import GetImageScorer from './GetImageScorer';
import GetImageTeams from './GetImageTeams';
let list2 = [];
export default class SpeicelBet extends React.Component {
    constructor(props) {
        super(props);

  this.state={
      data5:null
  }

    }



    componentDidMount() {
        list2=[];
        if (this.props.bet != null) {

            list2.push(
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    alignContent: 'space-between'
                }} key={1}>
                    <Text> מלך השערים </Text>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('BestScorer');

                    }}>
                        <Image source={GetImageScorer(this.props.bet.playerPicture)} style={{ width: 60, height: 60 }} />
                    </TouchableOpacity>
                    <Text>הנבחרת הזוכה</Text>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('BestTeam');
                    }}>
                        <Image source={GetImageTeams(this.props.bet.picture)} style={{ width: 60, height: 60 }} />
                    </TouchableOpacity>

                </View>
            );
            this.setState({data5:list2});

        }
    }


    render() {

        return (
<View > {this.state.data5}</View>
)  
    }
}