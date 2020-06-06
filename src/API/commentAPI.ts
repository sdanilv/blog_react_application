import { axiosInstance } from "./api";

type Comment = {postId:number, body:string};
export const commentAPI = {
  addComments: (comment: Comment) => axiosInstance.post<Comment&{id:number}>("comments", comment)
};
