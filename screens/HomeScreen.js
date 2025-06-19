import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, Image, Dimensions, Button } from "react-native";

const { width, height } = Dimensions.get('window')

const products = [
    { id: '1', name: 'Product1', price: 100, image: 'https://picsum.photos/id/237/200/300' },
    { id: '2', name: 'Product2', price: 100, image: 'https://picsum.photos/id/237/200/300' },
    { id: '3', name: 'Product3', price: 100, image: 'https://picsum.photos/id/237/200/300' }
]

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image}></Image>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>Q. {item.price}</Text>

                        <Button
                        title="ViewDetails"
                        onPress={()=>navigation.navigate('ProductDetails', {product: item})}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10

    },
    itemContainer: {
        marginBottom: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 0.2
    },
    image: {
        width: width * 0.9,
        height: width * 0.9,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 0.2,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
        textAlign: "center"
    }
})

export default HomeScreen