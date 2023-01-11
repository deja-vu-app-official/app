import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
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

class Highlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightDataName:[],
            highlightDataBanner:[],
        };
    }

    componentDidMount(){
        let HighlightRequest = "https://deja-vu-api.herokuapp.com/api/highlights?populate=*"
        fetch(HighlightRequest,{
            method: 'get',
            headers: new Headers({
            'Authorization': `Bearer ${API_TOKEN}`, 
            }),  
        }).then((response) => response.json()).then((responseData)  => {
            let response = responseData.data[0].attributes
            let highlightId = null
            let highlightType = null
            if(response.track.data){
                highlightId = response.track.data.id
                highlightType = 'tracks'
            }else if(response.universe.data){
                highlightId = response.universe.data.id
                highlightType = 'universes'
            }else{
                highlightId = response.place.data.id
                highlightType = 'places'
            }
            fetch(`https://deja-vu-api.herokuapp.com/api/${highlightType}/${highlightId}?populate=*`,{
                method: 'get',
                headers: new Headers({
                    'Authorization': `Bearer ${API_TOKEN}`, 
                }), 
            }).then((response) => response.json()).then((responseData) => {
                let highlight = responseData.data.attributes
                this.setState({
                    highlightDataName: highlight.name,
                    highlightDataBanner: highlight.banner.data.attributes
                });
            }).catch(error=>console.log(error)) //to catch the errors if any
        }).catch(error=>console.log(error)) //to catch the errors if any
    }
    render() {
        return(
            <View style={styles.highlightBanner}>
                <Text style={styles.highlightText}>{this.state.highlightDataName}</Text>
                <Image style={styles.highlightImage} source={{uri: this.state.highlightDataBanner.url, height: 500}}/>
            </View>
        );
    }
};

export default Highlight;