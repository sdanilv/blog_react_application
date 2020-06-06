import { ADD_COMMENT, EDIT_OPEN_POST, RETRIEVE_POST } from "../ActionsTypes";
import { postAPI } from "../../API/postAPI";
import { Action, GlobalState } from "../store";
import { ThunkAction } from "redux-thunk";
import { commentAPI } from "../../API/commentAPI";
import { PostType, PostId, CommentType } from "./OpenPostReducer";

export type OpenPostActions = Action<typeof RETRIEVE_POST, { post: PostType }>
  |Action<typeof ADD_COMMENT, { comment: CommentType }>
  |Action<typeof EDIT_OPEN_POST, { post: PostType }>

export type ThunkActionType<T = void> = ThunkAction<T, GlobalState, {}, OpenPostActions>;

const retrievePostAC = (post: PostType): OpenPostActions => ({ type: RETRIEVE_POST, post });
const addCommentAC = (comment: CommentType): OpenPostActions => ({ type: ADD_COMMENT, comment });
export const editOpenPostAC = (post: PostType): OpenPostActions => ({ type: EDIT_OPEN_POST, post });

export const retrievePost = (id: PostId): ThunkActionType => async dispatch => {
  const { data } = await postAPI.getPostWithComments(id);
  dispatch(retrievePostAC(data));
};
export const addComment = (postId: number, body: string): ThunkActionType => async dispatch => {
  const { data } = await commentAPI.addComments({ postId, body });
  dispatch(addCommentAC(data));
};
