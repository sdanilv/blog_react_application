import React, { ChangeEvent, FC, useState } from "react";
import { PostType } from "../../redux/Post/PostReducer";
import { PostFunctionsType } from "./PostContainer";
import Comments from "./Comments/Comments";
import { postStyle } from "./PostStyle";
import Paper from "@material-ui/core/Paper";

import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import HomeIcon from "@material-ui/icons/Home";

import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";

type PostProps = PostType&PostFunctionsType
const Post: FC<PostProps> = ({ title, body, id, comments, addComment, editPost, deletePost }) => {
  const style = postStyle();
  const [editMode, setEditMode] = useState(false);
  const [post, setPost] = useState({ title, body });
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setPost({ ...post, [target.id]: target.value });
  const submitButtonHandler = () => {
    editPost(id, post.title, post.body);
    setEditMode(false);
  };
  const addCommentWithId = (comments: string) => addComment(id, comments);
  const deleteHandler = () => deletePost(id);
  const editHandler = () => setEditMode(!editMode);

  return (
    <div className={ style.root }>
      <h3 className={ style.title }>
        { editMode
          ? <TextField onChange={ onChangeHandler } value={ post.title } fullWidth
            autoFocus margin="dense" id="title" label="Title"
          /> : title }
        <span className={ style.buttons }>
          <Link to="/"> <DeleteIcon color="error" className={ style.button } onClick={ deleteHandler }/></Link>
          <EditIcon className={ style.button } onClick={ editHandler }/>
        </span>
      </h3>

      <Paper className={ style.body }>{ editMode ? <TextField
        onChange={ onChangeHandler } value={ post.body } id="body" fullWidth
        placeholder="Enter your post" multiline variant="outlined" rows={ 10 }
        rowsMax={ 50 }
      /> : body }
      </Paper>

      { editMode
        ? <Button onClick={ submitButtonHandler }
          variant="contained"
          color="primary"
          endIcon={ <SaveIcon/> }
        >
          Save
        </Button>
        : <Comments addComment={ addCommentWithId } comments={ comments }/> }
      <Link className={ style.fab } to="/">
        <Fab size="small" color="primary" aria-label="add" >
          <HomeIcon/>
        </Fab>
      </Link>
    </ div>
  );
};

export default Post;
