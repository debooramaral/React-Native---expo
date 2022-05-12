import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Agenda from './pages/Agenda/indexa';
import Artigos from './pages/Artigos/indexart';
import Terapia from './pages/Terapia On/indexto';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Agenda' component={Agenda}/>

            <Tab.Screen name='Artigos' component={Artigos}/>

            <Tab.Screen name='Terapia' component={Terapia}/>
            
        </Tab.Navigator>
    )
}