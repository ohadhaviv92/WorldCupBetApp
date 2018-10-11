import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView ,Alert,Modal,TouchableOpacity,Image } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import ImagePickerFromGallery from './ImagePickerFromGallery';
import CameraPage from './CameraPage'; 

let urlAPI = "http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/Register";
let userInfo;
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userName:"",
        pass:"",
        firstName:"",
        lastName:"",
        email:"",
        picture:"" ,
        msg:""   ,
        pic:"",
        tookPic:false,
        modalVisible:false,
        
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





  async  logInFB() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('206669196660826', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);



       userInfo=await response.json();
      
       
      
     
      
       
      



      
      fetch(urlAPI, {
  method: 'POST',
  body: JSON.stringify({
    userName:userInfo.id,  
    pass:"123", 
     firstName:userInfo.name, 
      lastName:"1",
        email:"facebook",
          base64:  "",
        imgName: userInfo.picture.data.url,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((data) => data.json())
  .then((data)=> { data2=JSON.parse(data.d)  ;
     if(data2===true)
     {
      
      alert("ההרשמה הצליחה")
      
     }
     else{
      alert("ההרשמה נכשלה")
 
     }
    
     
    
    })
    }
    
  }


    render() {
      return (
        <ScrollView  >
        <View style={styles.container}>
        <Text ></Text>
        <Text style={{fontSize:20}}>הרשמה לאתר</Text>
        <Text ></Text>
        <Text > שם משתמש</Text>
           <TextInput
             style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}
             onChangeText={(userName) => this.setState({ userName })}
             value={this.state.userName}
           />
                <Text >סיסמה</Text>
           <TextInput
             style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}
             onChangeText={(pass) => this.setState({ pass })}
             value={this.state.pass}
           />
                 <Text >שם פרטי</Text>
           <TextInput
             style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}
             onChangeText={(firstName) => this.setState({ firstName })}
             value={this.state.firstName}
           />
                         <Text >שם משפחה</Text>
           <TextInput
             style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}
             onChangeText={(lastName) => this.setState({ lastName })}
             value={this.state.lastName}
           />
                        <Text >אימייל</Text>
           <TextInput
             style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}
             onChangeText={(email) => this.setState({ email })}
             value={this.state.email}
           />
                       
                       <Text >תמונה</Text>
     <TouchableOpacity onPress={() => { this.setState({ modalVisible: true }) }}>
     <FontAwesome name="camera" size={32} color="black"/>
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




                   <Button onPress={()=> {  




this.setState({ isDisabled: true });






  fetch("http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/Register", {
    method: 'POST',
    body: JSON.stringify({
      userName:this.state.userName,  
      pass:this.state.pass, 
       firstName:this.state.firstName, 
        lastName:this.state.lastName,
          email:this.state.email,
        base64: this.state.tookPic ? this.state.pic.base64 : "",
        imgName: `${this.state.userName}${new Date().valueOf()}.jpg`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((data) => data.json())
    .then((data)=> { data2=JSON.parse(data.d)  ;
       if(data2===true)
       {
        this.props.navigation.navigate('Login');
        
       }
       else{
    this.setState({msg:"ההרשמה נכשלה"})
       }
      
       
      
      })
    





    
    

}

        }
  title="אשר הרשמה"
  color="#841584"
  value="SAS"
/>



     <TouchableOpacity onPress={this.logInFB}>
     <FontAwesome name="facebook" size={32} color="#4286f4"/>
                                </TouchableOpacity>



   <Text>{this.state.msg} </Text>
   { this.renderPic()}
   </View>
         </ScrollView>
      );
    }

  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
});