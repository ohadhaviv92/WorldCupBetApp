import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, Image, ScrollView ,ImageBackground} from 'react-native';
import icon from '../images/cup1.png';
import bg from '../images/BG2.jpg';
import {FontAwesome } from '@expo/vector-icons';
let data2;
let urlAPI = "http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/Project.asmx/Login";

let userInfo=null;
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      pass: "",
      msg: "ברוך הבא,הכנס שם משתמש וסיסמה",

      userID: null,
      pic: null,
      name: null,
      face:2
    }
  }

  logIn =(e)=>{
    
    console.log(e);
    
    let uName;
    let uPass;
    if(e==1)
    {
     uName=this.state.userName;
     uPass=this.state.pass;
    }
    else
    {
     uName =userInfo.id;
     uPass="123";
    }
 
   if (this.state.userName != "" && this.state.pass != "" || e==2) {
     
     fetch(urlAPI, {
       method: 'POST',
       body: JSON.stringify({
         userName: uName,
         pass: uPass
       }),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
     })
       .then((data) => data.json())
       .then((data) => {
         data2 = JSON.parse(data.d);
 
 
         if (data2 != null) {
 
           if (data2.userName == "admin") {
             this.props.navigation.navigate('UpdateResultOfGame');
           }
           else {
             AsyncStorage.setItem("user", JSON.stringify(data2))
             AsyncStorage.setItem("userID", data2.userName)
 
 
             this.props.navigation.navigate('Root');
           }
         }
 
         else {
           this.setState({ msg: "שם המשתמש והסיסמה אינם נכונים" })
         }
       });
   }
   else {
     this.setState({ msg: "אין להשאיר שדות ריקים" })
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
       this.render();
      
      
      
      
      
      
    }
   
    
  }



  _renderUserInfo = () => {
    this.props.navigation.navigate('Root');
  }

  _renderUserInfo

  render() {

 if(userInfo!=null)
 {
  userInfo=null;
  this._renderUserInfo();
 
 }
    return (

      <KeyboardAvoidingView style={styles.container} behavior="position"  >

        <View  >
        
          <Image source={icon} style={{ width: 60, height: 80 ,alignContent:'center'}} />
          <Text style={{ fontSize: 35 ,color:'red' }}>World
          <Text style={{ fontSize: 35 ,color:'white' }}>Cup</Text>
          <Text style={{ fontSize: 35 ,color:'blue' }}>Bet</Text>
          </Text>
        </View>
        <TextInput
          style={{ width: 250, height: 40, borderColor: '#f0ebf4', borderWidth: 2}}
          onChangeText={(userName) => this.setState({ userName })}
          value={this.state.userName}
          placeholder="         user name        "
        />
        <View  >
          <Text>    </Text>
        </View>
        <TextInput
          style={{ width: 250, height: 40, borderColor: '#f0ebf4', borderWidth: 2}}
          onChangeText={(pass) => this.setState({ pass })}
          value={this.state.pass}
          placeholder="            password      "

        />
        <Button onPress={() => {

          this.logIn(1);
         


        }

        }
          title="התחבר"
          color="red"
          value="SAS"
        />



     <TouchableOpacity style={{  position:'relative' ,left:'30%' }} onPress={()=>{
       
       this.logInFB();
       if(userInfo!=null)
       this.logIn(2);

     }}
       >
     <FontAwesome name="facebook" size={45} color="#4286f4"/>
                                </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Register');
        }}>
          <Text style={{ color: "#f0ebf4" , position:'relative' ,left:'35%' }} > לא נרשמת?</Text>
            

        </TouchableOpacity>
        <Text >
          {this.state.msg}</Text>



      </KeyboardAvoidingView>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#a1c3d1",
    alignContent: 'space-between'



  },

  background:{
    flexGrow: 1,
    alignSelf: 'stretch',
    width:null,
    height:null
  }
});
