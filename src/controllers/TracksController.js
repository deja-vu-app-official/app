import axios from 'axios';
import {API_TOKEN, API_URL, APP_ENV} from '@env';

const AuthStr = 'Bearer '.concat(API_TOKEN); 

const getTrack = (trackId) => {  
  axios.get(`${API_URL}/tracks/${trackId}?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
    return response.data
  });
};

const getTracks = () => {  
  axios.get(`${API_URL}/tracks?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
    return response.data
  });
};

const getTopTracks = () => {  
  axios.get(`${API_URL}/tracks?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
    return response.data
  });
};

export {
  getTrack,
  getTracks,
  getTopTracks
}