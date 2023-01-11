import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {API_TOKEN} from '@env';

const styles = StyleSheet.create({
    favoriteImage: {
      width: '100%',
    },
    favoriteBanner: {
      width: '100%',
      height: 500,
    },
    favoriteText: {
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

class FavTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritesData:[],
        };
    }

    componentDidMount(){
        let userId = 1;
        let UserRequest = `https://deja-vu-api.herokuapp.com/api/users?populate=*&filters[id][$eq]=${userId}`
        fetch(UserRequest,{
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${API_TOKEN}`, 
            }),  
        }).then((response) => response.json()).then((responseData) => {
            let favoriteList = [];
            for (const el of responseData[0].favorites) {
                let FavoritesRequest = `https://deja-vu-api.herokuapp.com/api/favorites?populate=*&filters[id][$eq]=${el.id}`
                fetch(FavoritesRequest,{
                    method: 'get',
                    headers: new Headers({
                        'Authorization': `Bearer ${API_TOKEN}`,
                    }),
                }).then((response) => response.json()).then((responseData)  => {
                    let response = responseData.data[0].attributes
                    let favoriteId = null
                    let favoriteType = null
                    if(response.track.data){
                        favoriteId = response.track.data.id
                        favoriteType = 'tracks'
                    }else if(response.universe.data){
                        favoriteId = response.universe.data.id
                        favoriteType = 'universes'
                    }else{
                        favoriteId = response.place.data.id
                        favoriteType = 'places'
                    }
                    fetch(`https://deja-vu-api.herokuapp.com/api/${favoriteType}/${favoriteId}?populate=*`,{
                        method: 'get',
                        headers: new Headers({
                            'Authorization': `Bearer ${API_TOKEN}`, 
                        }), 
                    }).then((response) => response.json()).then((responseData) => {
                        let image
                        if(favoriteType === 'places'){
                            image = responseData.data.attributes.images.data[0].attributes.url
                        }else{
                            image = responseData.data.attributes.image.data.attributes.url
                        }
                        let fav = {
                            name: responseData.data.attributes.name,
                            url: image,
                        }
                        favoriteList = this.state.favoritesData.concat([fav])
                        this.setState({
                            favoritesData: favoriteList
                        });
                    }).catch(error=>console.log(error)) //to catch the errors if any
                }).catch(error=>console.log(error)) //to catch the errors if any
            }
        }).catch(error=>console.log(error)) //to catch the errors if any
    }
    render() {
        return(
            <FlatList padding ={30}
                data={this.state.favoritesData}
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

export default FavTable;