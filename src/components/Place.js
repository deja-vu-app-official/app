import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {API_TOKEN} from '@env';

const styles = StyleSheet.create({
    cardImage: {
      width: '10%',
      height: 100
    }
});

class Place extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeData:[],
        };
        console.log(props)
        let PlacesRequest = `https://deja-vu-api.herokuapp.com/api/place/${JSON.stringify(props.placeId)}?populate=*`
        fetch(PlacesRequest,{
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${API_TOKEN}`, 
            }),  
            }).then((response) => response.json()).then((responseData) => {
            this.state.placeData = responseData.data[0].attributes
        }).catch(error=>console.log(error)) //to catch the errors if any
    }
    render() {
        console.log(this.state.placeData)
        return(
            <View style={{height: 300}}>
                <Text style={{height: 130}}>{this.state.placeData.name}</Text>
                <Image style={styles.cardImage} source={{uri: this.state.placeData.images.data[0].attributes.url, height: 200}}/>
                <View style={{height: 1,backgroundColor:'gray'}}></View>
            </View>
        );
    }
};

export default Place;