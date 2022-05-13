import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

import logomenor from './componentes/logomenor.png';

import Agenda from './pages/Agenda/indexa';
import Artigos from './pages/Artigos/indexart';
import Terapia from './pages/Terapia On/indexto';

import BotaoMenu from './componentes/botaomenu';

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import BotaoMenuImg from './pages/botaomenu-img/indexbm';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return(
        <Tab.Navigator
            tabBarOptions = {{
                style:{
                    backgroundColor: 'green',
                    borderTopColor: 'black'
                },
                activeTintColor: 'pink',
                tabStyle:{
                    backgroundColor: 'white'
                } 
            }}
        >
            <Tab.Screen 
            name='MENU' 
            component={BotaoMenuImg}
            options={{
                tabBarLabel: '',
                tabBarIcon:() => (<Image source={require("./componentes/logomenor.png")} 
                style={{width:25, height:25}}/>)
            }}

            />

            <Tab.Screen 
            name='Agenda' 
            component={Agenda}
            options={{
                tabBarLabel: '',
                tabBarIcon:({color}) => (
                    <FontAwesome5 name="calendar-check" size={25} color={color}/>
                )
            }}
            />

            <Tab.Screen 
            name='Artigos' 
            component={Artigos}
            options={{
                tabBarLabel: '',
                tabBarIcon:({color}) => (
                    <MaterialIcons name="article" size={25} color={color}/>
                )
            }}
            />

            <Tab.Screen 
            name='Video Chamada' 
            component={Terapia}
            options={{
                tabBarLabel: '',
                tabBarIcon:({color}) => (
                    <MaterialIcons name="video-call" size={30} color={color}/>
                )
            }}
            />

        </Tab.Navigator>
    )
}
