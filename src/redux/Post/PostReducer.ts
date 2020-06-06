import { ADD_POST, DELETE_POST, EDIT_POST, FETCH_POSTS } from "../ActionsTypes";
import { PostActions } from "./PostActions";

export type PostId = number
export type CommentType = { id: number, postId: number, body: string }
export type PostType = { id: PostId, title: string, body: string, comments?: Array<CommentType> }
const initialState = { posts: [] as Array<PostType> };
export type PostState = typeof initialState;

const postReducer = (state = initialState, action: PostActions) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.posts };
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.post] };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (action.post.id === post.id) { return action.post; }
          return post;
        })
      };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(({ id }) => id !== action.id) };
    default:
      return state;
  }
};
export default postReducer;
