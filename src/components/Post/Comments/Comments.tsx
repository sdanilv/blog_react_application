import React, { ChangeEvent, FC, useState } from "react";
import { CommentType } from "../../../redux/Post/PostReducer";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField/TextField";
import { commentStyle } from "./CommentsStyle";
import Paper from "@material-ui/core/Paper/Paper";
import { Button } from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

type CommentsProps = { comments: Array<CommentType>|undefined, addComment: (comment: string) => void }
const Comments: FC<CommentsProps> = ({ comments, addComment }) => {
  const style = commentStyle();
  const [comment, setComment] = useState("");
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setComment(target.value);
  const submitButtonHandler = () => {
    addComment(comment);
    setComment("");
  };

  return (
    <>
      <div>
        { `${comments?.length} comment${comment.length !== 1 && "s"}` }
      </div>
      <FormControl fullWidth className={ style.form }>
        <TextField
          onChange={ onChangeHandler } value={ comment } id="body"
          fullWidth rowsMax={ 10 }
          placeholder="Enter your comment" multiline variant="outlined" rows={ 3 }
        />
        <Button variant="contained"
          endIcon={ <SendIcon/> } onClick={ submitButtonHandler }
          className={ style.button }>Send</Button>
      </FormControl>

      { comments?.map(comment =>
        <Paper key={ comment.id } className={ style.comment }>{ comment.body }</Paper>) }
    </>);
};

export default Comments;
