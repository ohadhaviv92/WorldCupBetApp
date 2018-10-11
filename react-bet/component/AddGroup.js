import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity, AsyncStorage,Modal } from 'react-native';

import ImagePickerFromGallery from './ImagePickerFromGallery';
import CameraPage from './CameraPage'; 
let list = [];
export default class AddGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groupName: null,
            pic:"",
            tookPic:false,
            modalVisible:false
        }


    }

    TakePicture = (pic) => {
        this.setState({ modalVisible: false, pic, tookPic: true })
    }
    
    
    renderPic = () => {
        if (this.state.tookPic) {
            return <Image
                style={{ width: '100%', paddingTop: '100%', borderRadius: 10 }}
                source={{ uri: this.state.pic.uri }} />
        }
    }
    componentWillMount() {

    }

    render() {



      
            return (
                <View style={styles.container}>
 <View style={{height:40}} ></View>

                     <TextInput
          style={{ width: 250, height: 40, borderColor: '#f0ebf4', borderWidth: 2}}
          onChangeText={(groupName) => this.setState({ groupName })}
          value={this.state.groupName}
          placeholder="         Group Name        "
        />


            
            <Text>{this.state.msg} </Text>
   { this.renderPic()}
       
   
     <TouchableOpacity onPress={() => { this.setState({ modalVisible: true }) }}>
                                    <Text style={{ fontSize: 25 }}>צלם תמונה</Text>
                                </TouchableOpacity>
                                <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.modalVisible}
                                onRequestClose={() => null}
                            >
                                <Button
                                    title='Close'
                                    onPress={() => {
                                        this.setState({ modalVisible: false });
                                    }} />
                                <CameraPage Snap={this.TakePicture} />

                            </Modal>
                            <Button onPress={() => {

if(this.state.groupName!=null||this.state.tookPic!=true)
{

    console.log(this.state.pic);
    
AsyncStorage.getItem("user").then((value) => {
    data = JSON.parse(value);
    fetch('http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/AddGroup', {
        method: 'POST',
        body: JSON.stringify({
            groupName:this.state.groupName,
            userID: data.userID,
            base64: this.state.tookPic ? this.state.pic.base64 : "",
            imgName: `${this.state.userName}${new Date().valueOf()}.jpg`,

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
                this.props.navigation.navigate('Groups', {
                    playerID: 1,
                    base64: this.state.tookPic ? this.state.pic.base64 : "",
                    imgName: `${this.state.userName}${new Date().valueOf()}.jpg`,
                });
            }


          

        })
})




}
else{
    Alert.alert(" הכנס שם ותמונה לקבוצה");
}



                    }

                    }
                        title="הוסף"
                        color="red"
                        value="SAS"
                    />
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