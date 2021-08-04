import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'baseurl',
});

export default instance;
