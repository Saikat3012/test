/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    ScrollView
} from 'react-native';
import {
    Card,
    Text,
    Title
}from 'react-native-paper'

import Axios from 'axios';




export default class DetailScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            dataList: [],
            searchDataList: null,
            allPageFetched: false,
            pageNumber: 0,
            searchKeyword: "",
            isSearched: false,
            apiKey: 'Yptb9ngnvn28GF5ZhWuigT2CbVaGGuIg9m4ARnSJ',
        };
    }
    fetchDetails = async () => {
        
        try {
            const api = 'https://api.nasa.gov/neo/rest/v1/neo/'+this.props.route.params+'?api_key='+this.state.apiKey
            const data = await Axios.get(api);
            this.setState({ dataList: data.data})
        } catch (e) {
            console.log(e);
        }
    }
    componentDidMount() {
        this.fetchDetails(this.props.route.params)
    }
    render() {
        return (
            <ScrollView style={{
                paddingHorizontal:20
            }}>
                <Card style={{padding:10}}>
                    <Title style={{alignSelf:"center",fontSize:28}}>{this.state.dataList.name }</Title>
                    {this.state.dataList.id && <Title>ID : {this.state.dataList.id }</Title>}
                    {this.state.dataList.nasa_jpl_url && <Title>URL : {this.state.dataList.nasa_jpl_url }</Title>}
                    {this.state.dataList.is_potentially_hazardous_asteroid != undefined && <Title>potentially_hazardous : {this.state.dataList.is_potentially_hazardous_asteroid? "True" : "False" }</Title>}

                </Card>
            </ScrollView>
        )
    }
}