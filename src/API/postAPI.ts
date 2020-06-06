import { axiosInstance } from "./api";
import { PostType, PostId } from "../redux/Post/PostReducer";

type APIPost = { title: string, body: string }

export const postAPI = {
  getAllPosts: () => axiosInstance.get<Array<PostType>>("posts"),
  getPostWithComments: (id: PostId) => axiosInstance.get<PostType>(`posts/${id}?_embed=comments`),
  addPost: (post: APIPost) => axiosInstance.post<PostType>("posts", post),
  editPost: (id:PostId, post:APIPost) => axiosInstance.put<PostType>(`posts/${id}`, post),
  deletePost: (id:PostId) => axiosInstance.delete(`posts/${id}`)
};
