import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Tab } from "react-native-elements";
import MainScreen from "./MainScreen";
import Regiones from "./Regiones";
import Categorias from "./CategoryNaturalArea";
import AreaNatural from "./AreaNatural";

function BarraNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name ="Inicio"
            component={MainScreen}
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="home" type="font-awesome" color={color} size={size}/>
                )
            }}/>
<Tab.Screen
    name="Regiones"
    component={Regiones}
    options={{
        tabBarIcon:({color,size}) => (
            <Icon name="map" type="font-awesome" color={color} size={size}/>
        )
    }} />
      <Tab.Screen
            name = "Categorias"
            component={Categorias}
            options={{
                TabBarIcon:({color, size}) => (
                    <Icon name="heart" type="font-awesome" color={color} size={size}/>
                ),
            }}/>
            <Tab.Screen
            name = "AreaNatural"
            component={AreaNatural}
            options={{
                TabBarIcon:({color, size}) => (
                    <Icon name="tree" type="font-awesome" color={color} size={size}/>
                ),
            }}/>

</Tab.Navigator>
    
)
}

export default BarraNav
    
