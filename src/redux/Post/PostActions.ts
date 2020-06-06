import { ADD_COMMENT, ADD_POST, DELETE_POST, EDIT_POST, FETCH_POSTS } from "../ActionsTypes";
import { postAPI } from "../../API/postAPI";
import { Action, GlobalState } from "../store";
import { ThunkAction } from "redux-thunk";
import { PostType, PostId, CommentType } from "./PostReducer";
import { editOpenPostAC, OpenPostActions } from "../OpenPost/OpenPostActions";

export type PostActions = Action<typeof FETCH_POSTS, { posts: Array<PostType> }>
  |Action<typeof ADD_POST, { post: PostType }>
  |Action<typeof EDIT_POST, { post: PostType }>
  |Action<typeof DELETE_POST, { id: PostId }>
  |Action<typeof ADD_COMMENT, { comment: CommentType }>
export type ThunkActionType<T = void> = ThunkAction<T, GlobalState, {}, PostActions>;

const fetchPostsAC = (posts: Array<PostType>): PostActions => ({ type: FETCH_POSTS, posts });
const addPostAC = (post: PostType): PostActions => ({ type: ADD_POST, post });
const editPostAC = (post: PostType): PostActions => ({ type: EDIT_POST, post });
const deletePostAC = (id: PostId): PostActions => ({ type: DELETE_POST, id });

export const fetchPosts = (): ThunkActionType => async dispatch => {
  const { data } = await postAPI.getAllPosts();
  dispatch(fetchPostsAC(data));
};
export const addPost = (title: string, body: string): ThunkActionType => async dispatch => {
  const { data } = await postAPI.addPost({ title, body });
  dispatch(addPostAC(data));
};
export const editPost = (id: PostId, title: string, body: string):
  ThunkAction<void, GlobalState, {}, PostActions|OpenPostActions> => async dispatch => {
  const { data } = await postAPI.editPost(id, { title, body });
  dispatch(editPostAC(data));
  dispatch(editOpenPostAC(data));
};
export const deletePost = (id: PostId): ThunkActionType => async dispatch => {
  await postAPI.deletePost(id);
  dispatch(deletePostAC(id));
};
