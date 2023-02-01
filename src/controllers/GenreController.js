import axios from 'axios';
import {API_TOKEN, API_URL, APP_ENV} from '@env';

const AuthStr = 'Bearer '.concat(API_TOKEN); 

const getGenres = () => {  
  axios.get(`${API_URL}/genres?populate`, { headers: { Authorization: AuthStr } }).then((response) => {
    if(APP_ENV === 'DEV'){
      console.log(response.data);
    }
    return response.data
  });
};

export {
  getGenres
}