import http from "./HttpService";

export function postNewComments(data){
    return http.post('/comments', data);
}
