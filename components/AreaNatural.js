import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { GetCategoryNaturalArea } from "../api/servicios";

const AreaNatural = () => {

    const [AreaNatural, setNaturalArea] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const NaturalArea = await GetNaturalArea();
            setNaturalArea(NaturalArea);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Areas Naturales  de Colombia son:</Text>
            {NaturalArea.map(NaturalArea => (
                <Text key={NaturalArea.id} style={styles.text}>{NaturalArea.name}</Text>
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
  

export default AreaNatural;