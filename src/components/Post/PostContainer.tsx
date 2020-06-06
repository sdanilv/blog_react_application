import React, { FC, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { PostType } from "../../redux/Post/PostReducer";
import { GlobalState } from "../../redux/store";
import { deletePost, editPost } from "../../redux/Post/PostActions";
import { compose } from "redux";
import Post from "./Post";
import { addComment, retrievePost } from "../../redux/OpenPost/OpenPostActions";

export type AddCommentType = { addComment: (postId: number, comment: string) => void }
export type PostFunctionsType = {
  deletePost: (postId: number) => void,
  editPost: (id: number, title: string, body: string) => void
}&AddCommentType

export type PostContainerProps =
  RouteComponentProps<{ postId?: string|undefined }>&PostFunctionsType&{ post: PostType }&{ retrievePost: (id: number) => void}

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
    return <>LOADING</>;
  };
const mapStateToProps = (state: GlobalState) => ({
  post: state.OpenPost.openPost
});
export default compose<typeof Post>(connect(mapStateToProps,
  { retrievePost, addComment, deletePost, editPost }), withRouter)(PostContainer);
