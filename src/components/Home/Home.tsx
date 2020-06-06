import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { GlobalState } from "../../redux/store";
import { addPost, fetchPosts } from "../../redux/Post/PostActions";
import { PostType } from "../../redux/Post/PostReducer";
import { clearOpenPost } from "../../redux/OpenPost/OpenPostActions";
import Posts from "./Posts/Posts";
import AddPost from "./Posts/AddPost/AddPost";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { homeStyle } from "./HomeStyle";

export type HomeProps = {
  posts: Array<PostType>, fetchPosts: () => void, addPost:
    (title: string, body: string) => void, clearOpenPost: () => void
}

const Home: FC<HomeProps> = ({ posts, fetchPosts, addPost, clearOpenPost }) => {
  const classes = homeStyle();
  const [open, setOpen] = useState(false);
  const fabClickHandler = () => setOpen(true);

  useEffect(() => {
    fetchPosts();
    clearOpenPost();
  }, [fetchPosts, clearOpenPost]);

  return (
    <div className={ classes.wrapper }>
      <Posts posts={ posts }/>
      <AddPost addPost={ addPost } setOpen={ setOpen } open={ open }/>
      <Fab onClick={ fabClickHandler } color="primary" aria-label="add" className={ classes.fab }>
        <AddIcon/>
      </Fab>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  posts: state.Post.posts
});

export default connect(mapStateToProps, { fetchPosts, addPost, clearOpenPost })(Home);
