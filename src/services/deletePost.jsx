import http from "./HttpService";

export function deletePost(postId) {
    return http.delete(`/posts/${postId}`);
}
