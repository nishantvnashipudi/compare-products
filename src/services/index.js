
const axios = require('axios');

// Generic get service function using axios
export const getService = url => axios.get(url);

// Generic post service function using axios
export const postService =  (url, payload) =>  axios.post(url,payload);