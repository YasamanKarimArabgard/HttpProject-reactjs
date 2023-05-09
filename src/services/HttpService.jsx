import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.response.use((response) => {
   // console.log(response);
   return response;
}, (error) => {
   // console.log(error);
   return Promise.reject();
})

axios.interceptors.request.use((request) => {
   // console.log(request);
   return request;
}, (error) => {
   // console.log(error);
   return Promise.reject();
})

const http = {
   get: axios.get,
   post: axios.post,
   delete: axios.delete
}

export default http;