import React, { useEffect, useState} from "react" 
import { View, Text, StyleSheet} from "react-native"
import { GetColombiaInfo } from "../api/servicios"
import { Icon } from "react-native-elements"

const MainScreen =({ navigation}) =>{
    const [colombiaInfo, setColombiaInfo] = useState ({})

useEffect (() => {
    async function fetchData (){
        const colombiaData = await GetColombiaInfo()
            setColombiaInfo(colombiaData)
    }
    fetchData ();
navigation.setOptions  ({
    headerRight: () => {
        return (
            <Icon name='rowing' onPress={() => navigation.navigate('')}/>
       )
    }
})

})

return (
    <view style={styles.container}>
        <Text styles={styles.title}>Información sobre:  {colombiaInfo.name} </Text>
        <Text styles={styles.text}>Regiones:  {colombiaInfo.description} </Text>
        <Text styles={styles.text}>Descripcion:   {colombiaInfo.description} </Text>
        <Text styles={styles.text}>Capital:  {colombiaInfo.stateCapital} </Text>
        <Text styles={styles.text}>Superficie:  {colombiaInfo.surface} </Text>
        <Text styles={styles.text}>POblación:  {colombiaInfo.population} </Text>



    </view>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    text: {
      fontSize: 16,
      marginVertical: 5,
    },
  });

export default MainScreen;