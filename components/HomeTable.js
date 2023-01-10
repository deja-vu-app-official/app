import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {API_TOKEN} from '@env';

const styles = StyleSheet.create({
    highlightImage: {
      width: '100%',
    },
    highlightBanner: {
      width: '100%',
      height: 500,
    },
    highlightText: {
      width: '100%',
      height: 500,
      position: 'absolute',
      zIndex: 2
    },
    cardImage: {
      width: '10%',
      height: 100
    }
});

class HomeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placesData:[],
        };
    }

    componentDidMount(){
        let PlacesRequest = "https://deja-vu-api.herokuapp.com/api/places?populate=*"
        fetch(PlacesRequest,{
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${API_TOKEN}`, 
            }),  
            }).then((response) => response.json()).then((responseData) => {
            let places = []
            for (const el of responseData.data) {
                let place = {
                name: el.attributes.name,
                url: el.attributes.images.data[0].attributes.url,
                }
                places.push(place);
            }
            this.setState({
                placesData: places
            })
        }).catch(error=>console.log(error)) //to catch the errors if any
    }
    render() {
        return(
            <FlatList padding ={30}
                data={this.state.placesData}
                renderItem={({item}) => 
                <View style={{height: 300}}>
                <Text style={{height: 130}}>{item.name}</Text>
                <Image style={styles.cardImage} source={{uri: item.url, height: 200}}/>
                <View style={{height: 1,backgroundColor:'gray'}}></View>
                </View>
            }/>
        );
    }
};

export default HomeTable;