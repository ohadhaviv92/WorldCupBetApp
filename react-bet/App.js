import React from 'react';

import {createStackNavigator , createBottomTabNavigator ,createSwitchNavigator,createDrawerNavigator} from 'react-navigation';

import {FontAwesome } from '@expo/vector-icons';
import Login from './component/Login';
import HomePage from './component/HomePage';
import Register from './component/Register';
import MyBet from './component/MyBet';
import BestScorer from './component/BestScorer';
import BestTeam from './component/BestTeam';
import UpdateResultOfGame from './component/UpdateResultOfGame';
import Groups from './component/Groups';
import AddGroup from './component/AddGroup';
import ListOfUser from './component/ListOfUser';
import GroupView from './component/GroupView';
import UserView from './component/UserView';
import  BetOfFriends from './component/BetOfFriends';
import  AddUsers from './component/AddUsers';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
    <StackNavigator />
    );
    }
    }
    





    const  TabNavigator =createBottomTabNavigator({
    
      
      HomePage:{

        screen:HomePage,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <FontAwesome name="home" size={32} color="#4286f4"/>
          ),
          tabBarLabel:'דף הבית'
      })
     
      },
      MyBet:{screen:MyBet,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <FontAwesome name="check-square-o" size={32} color="#4286f4"/>
          ),
          tabBarLabel:'הניחושים שלי'
      })
      },

      

      Groups:{screen:Groups,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <FontAwesome name="group" size={30} color="#4286f4"/>
          ),
          tabBarLabel:'הקבוצות שלי'
      })
      },
      LogOut:{screen:Login,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <FontAwesome name="sign-out" size={32} color="#4286f4"/>
          ),
          tabBarLabel:'התנתק',
          tabBarVisible: false
      }),

      }
      
      },
      {
        tabBarOptions: {
          activeTintColor: '#4286f4',
          showIcon: true,
          
          style: {
            backgroundColor: 'white'
          },
          
          backBehavior: 'initialRoute',

          
         }} );


      const  drawerNavigator =createDrawerNavigator({
    
      
        HomePage:{screen:HomePage},
        MyBet:{screen:MyBet},
        BestScorer:{screen:BestScorer},
        
        BestTeam:{screen:BestTeam},
        LogOut:{screen:Login}
        
        },
        {
     backBehavior:'initialRoute',
        }
  
  
        );

      const StackNavigator= createStackNavigator (
        {
          Login:Login,
          Register:Register,
          Root:TabNavigator,
          BestScorer:BestScorer,
          UpdateResultOfGame:UpdateResultOfGame,
          ListOfUser:ListOfUser,
          AddGroup:AddGroup,
          GroupView:GroupView,
          UserView:UserView,
          BetOfFriends:BetOfFriends,
          BestTeam:BestTeam,
          AddUsers:AddUsers
          

        }
      ,{
        headerMode:'none'
   
        
      }
      )




      


