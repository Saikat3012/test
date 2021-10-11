/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';

import Axios from 'axios';


export default class HomeScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            dataList: [],
            searchDataList: [],
            allPageFetched: false,
            pageNumber: 0,
            searchKeyword: "",
            isSearched: false,
            api: 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Yptb9ngnvn28GF5ZhWuigT2CbVaGGuIg9m4ARnSJ',
        };
    };

    fetchDetails = async () => {
        try {
            const data = await Axios.get(this.state.api);
            this.setState({ dataList: this.state.dataList.concat(data.data.near_earth_objects) })
            console.log(data.data.near_earth_objects)
        } catch (e) {
            console.log(e);
        }

        this.setState({ pageNumber: (this.state.pageNumber) + 1 });
    }
    componentDidMount() {
        this.fetchDetails()
    }
    handleSearch(random: any) {
        if (random) {
            var randomIndex = Math.floor((Math.random() * this.state.dataList.length));
            this.props.navigation.navigate("DetailScreen", this.state.dataList[randomIndex].id)
        } else {
            this.props.navigation.navigate("DetailScreen", this.state.searchKeyword)
        }
    }

    render() {
        const Item = ({ eachData }) => (
            <View style={styles.cardContainer}>
                <Text style={[styles.text, {
                    fontSize: 24,
                }]}>{eachData.name}</Text>
                <Text style={styles.text}>ID : {eachData.id}</Text>
                <Text style={styles.text}>{eachData.nasa_jpl_url}</Text>
                <Text style={styles.text}>{eachData.absolute_magnitude_h}</Text>
            </View>
        );
        const renderItem = ({ item }) => (
            <Item eachData={item} />
        );
        return (
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "100%",
                }}>
                    <View style={styles.searchBarContainer}>

                        <TextInput
                            testId="HomeScreenSearchBar"
                            value={this.state.searchKeyword}
                            placeholder={"Search"}
                            onChangeText={(text) => {
                                this.setState({ searchKeyword: text });
                            }}
                        />

                    </View>
                    <TouchableOpacity
                        testId="HomeScreenSearchButton"
                        style={[{
                            width: "20%",
                            borderRadius: 15,
                            padding: 2,
                            marginLeft: "2%",
                            backgroundColor: "#859",
                        }]}
                        onPress={() => { this.handleSearch(false) }}
                        disabled={this.state.searchKeyword.length == 0 || this.state.dataList.length == 0}>
                        <Text style={styles.text}>Search</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    disabled={this.state.dataList.length == 0}
                    onPress={() => { this.handleSearch(true) }}
                    style={[styles.button]}>
                    <Text style={styles.text}>Random asteroi</Text>
                </TouchableOpacity>
                <FlatList
                    testId="flatList"
                    data={this.state.dataList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
        paddingTop: 5,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    },
    searchBarContainer: {
        backgroundColor: '#89E089',
        width: "75%",
        alignSelf: 'center',
        borderRadius: 15,
        paddingHorizontal: 10,

    },
    cardContainer: {
        backgroundColor: '#5FECEC',
        marginVertical: 10,
        padding: 5,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    button: {
        width: "85%",
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 7,
        borderRadius: 15,
        backgroundColor: "#859",
        marginBottom:15
    }
})