import React, { FC, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { GlobalState } from "../../redux/store";
import { deletePost, editPost } from "../../redux/Post/PostActions";
import { addComment, clearOpenPost, retrievePost } from "../../redux/OpenPost/OpenPostActions";
import Post from "./Post";
import CircularProgress from "@material-ui/core/CircularProgress";

export type AddCommentType = { addComment: (postId: number, comment: string) => void }
type DeletePost = { deletePost: (postId: number) => void }
type EditPost = { editPost: (id: number, title: string, body: string) => void }
type RetrievePost = { retrievePost: (id: number) => void }
export type PostFunctionsType = DeletePost&EditPost&AddCommentType

export type PostContainerProps =
  RouteComponentProps<{ postId?: string|undefined }>
  &MapStateToPropsType&PostFunctionsType&RetrievePost

const PostContainer: FC<PostContainerProps> =
  ({ post, match, retrievePost, addComment, deletePost, editPost }) => {
    const paramsUserId = match.params.postId;

    useEffect(() => {
      paramsUserId && retrievePost(+paramsUserId);
    }, [paramsUserId, retrievePost]);

    if (post.title) {
      return (
        <Post { ...post } addComment={ addComment }
          deletePost={ deletePost } editPost={ editPost }/>
      );
    }
    return <CircularProgress/>;
  };
const mapStateToProps = (state: GlobalState) => ({
  post: state.OpenPost.openPost
});
type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
export default compose<typeof Post>(connect(mapStateToProps,
  { retrievePost, addComment, deletePost, editPost, clearOpenPost }), withRouter)(PostContainer);
