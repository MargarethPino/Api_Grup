import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { GetCategoryNaturalArea } from "../api/servicios";

const CategoryNaturalArea = () => {

    const [CategoryNaturalArea, setCategoryNaturalArea] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const CategoryNaturalArea = await GetCategoryNaturalArea();
            setCategoryNaturalArea(CategoryNaturalArea);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias Naturales de Colombia son:</Text>
            {CategoryNaturalArea.map(CategoryNaturalArea => (
                <Text key={CategoryNaturalArea.id} style={styles.text}>{CategoryNaturalArea.name}</Text>
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
  

export default CategoryNaturalArea;