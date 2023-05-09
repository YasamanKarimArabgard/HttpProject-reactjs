import http from "./HttpService";

export function getAllPosts(){
    return http.get('/posts');
}
