import axios from 'axios';
import {API_TOKEN, API_URL, APP_ENV} from '@env';

const AuthStr = 'Bearer '.concat(API_TOKEN); 

const getHighlight = () => {  
  axios.get(`${API_URL}/highlights?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {

    let response = response.data[0]
    let highlight = []
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
    axios.get(`${API_URL}/${highlightType}/${highlightId}?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
      highlight = [
        'type' = highlightType,
        'data' = response.data[0]
      ]
    });
    
    if(APP_ENV === 'DEV'){
      console.log(highlight);
    }
    return highlight
  });
};

const getNews = () => {
  let news = []
  let monthBack = 0;

  while (news.length < 5) {
    news = news.concat(retrievePlacesAndTracks(monthBack))
    news = news.length > 10 ? news.slice(0, 9) : news;
    monthBack++
  }
  
  return news
};

const retrievePlacesAndTracks = (monthBack) => { 
  let news = []
  axios.get(`${API_URL}/tracks?populate=*&filters[createdAt][$gte]=${firstDayInGivenMonth(monthBack - 1)}&filters[createdAt][$lt]=${firstDayInGivenMonth(monthBack)}`, { headers: { Authorization: AuthStr } }).then((response) => {
    news.push(pushInNews(response), 'Circuit')  
  });

  axios.get(`${API_URL}/places?populate=*&filters[createdAt][$gte]=${firstDayInGivenMonth(monthBack - 1)}&filters[createdAt][$lt]=${firstDayInGivenMonth(monthBack)}`, { headers: { Authorization: AuthStr } }).then((response) => {
    news.push(pushInNews(response), 'Lieu') 
  });
  news.sort((a,b) =>  new Date(b.createdAt) - new Date(a.createdAt));
  return news
};

const firstDayInGivenMonth = (month) => {
  var d = new Date();
  d.setDate(1);
  d.setMonth(d.getMonth() - month);
  console.log(d);
};

const pushInNews = (response, type) => { 
  let data = response.data[0];
  let attributes = data.attributes
  let newItem = [
    'type' = type,
    'price' = attributes.price,
    'rating' = attributes.rating,
    'title' = attributes.name,
    'description' = attributes.description,
    'image' = attributes.image.formats.large.url,
    'createdAt' = attributes.createdAt,
    'id' = data.id
  ]
  return newItem
}; 

export {
  getHighlight,
  getNews
}