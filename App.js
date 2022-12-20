import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {API_TOKEN} from '@env'
 
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
 
  componentDidMount(){
    fetch("https://deja-vu-api.herokuapp.com/api/places",{
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${API_TOKEN}`, 
      }),  
    })
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson.data
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
 
    render(){
     return(
      <View style={{padding:10}}>
      <FlatList
      padding ={30}
         data={this.state.dataSource}
         renderItem={({item}) => 
         <View style={{height: 50}}>
          <Text style={{height: 50}}>{item.attributes.city}, {item.attributes.address}</Text>
          <View style={{height: 1,backgroundColor:'gray'}}></View>
         </View>
        }
       />
      
     </View>
     )}
}