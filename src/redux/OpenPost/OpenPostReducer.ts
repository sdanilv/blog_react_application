import { ADD_COMMENT, RETRIEVE_POST } from "../ActionsTypes";
import { OpenPostActions } from "./OpenPostActions";

export type PostId = number
export type CommentType = { id: number, postId: number, body: string }
export type PostType = { id: PostId, title: string, body: string, comments?: Array<CommentType|never> }
const initialState :{openPost: PostType} = { openPost: { title: "", body: "", id: -1, comments: [] } };
export type OpenPostState = typeof initialState;

const openPostReducer = (state = initialState, action: OpenPostActions) => {
  switch (action.type) {
    case RETRIEVE_POST:
      return {
        ...state,
        openPost: action.post
      };
    case ADD_COMMENT:
      return {
        ...state,
        openPost: {
          ...state.openPost,
          comments: state.openPost.comments
            ? [...state.openPost.comments, action.comment]
            : [action.comment]
        }
      };
    default:
      return state;
  }
};
export default openPostReducer;
