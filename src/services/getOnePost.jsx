import http from "./HttpService";

export function getOnePost(postId){
    return http.get(`/posts/${postId}`);
}
