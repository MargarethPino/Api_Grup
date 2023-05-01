import { useEffect } from "react"
import { GetRegionesColombia } from "../api/servicios"
import { View, Text, StyleSheet } from "react-native";




const Regiones  = ()  => {
    const [RegionesColombia, setRegionesColombia] = useState ({})



    useEffect(() =>  {
        async function  fetchData(){
            const regionesColombia = await  GetRegionesColombia();
            setRegionesColombia(regionesColombia);
        }
        fetchData();
    },[]);


return (
    <View style={styles.container}>

        <Text style={styles.title}>Regiones de Colombia</Text>
        {regionesColombia.map(region => (
            <Text key={region.id} style={style.text}>{region.name}</Text>
        ))}
        </View>
    );
};

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

   export default Regiones 