import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { GlobalState } from "../../redux/store";
import { addPost, fetchPosts } from "../../redux/Post/PostActions";
import { PostType } from "../../redux/Post/PostReducer";
import Posts from "./Posts/Posts";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddPost from "./Posts/AddPost/AddPost";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative"
    },
    fab: {
      marginLeft: "auto",
      position: "absolute",
      down: 0,
      right: 50
    }
  })
);

export type HomeProps = { posts: Array<PostType>, fetchPosts: () => void, addPost: (title: string, body: string) => void }
const Home: FC<HomeProps> = ({ posts, fetchPosts, addPost }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const fabClickHandler = () => setOpen(true);
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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

export default connect(mapStateToProps, { fetchPosts, addPost })(Home);
