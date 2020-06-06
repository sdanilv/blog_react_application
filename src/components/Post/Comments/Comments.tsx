import React, { FC } from "react";
import { useFormik } from "formik";
import { CommentType } from "../../../redux/Post/PostReducer";
import { Button, Paper, TextField, FormControl } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { commentStyle } from "./CommentsStyle";

type CommentsProps = { comments: Array<CommentType>|undefined, addComment: (comment: string) => void }
const Comments: FC<CommentsProps> = ({ comments, addComment }) => {
  const style = commentStyle();
  const formik = useFormik({
    initialValues: { comment: "" },
    onSubmit: values => {
      if (values.comment.trim()) { addComment(values.comment); }
      formik.resetForm();
    }
  });

  return (
    <>
      <div>
        { `${comments?.length} comment${comments?.length !== 1 && "s"}` }
      </div>
      <FormControl fullWidth className={ style.form }>
        <TextField
          onChange={ formik.handleChange } value={ formik.values.comment } id="comment"
          fullWidth rowsMax={ 10 }
          placeholder="Enter your comment" multiline variant="outlined" rows={ 3 }
        />
        <Button variant="contained"
          endIcon={ <SendIcon/> } onClick={formik.submitForm}
          className={ style.button }>Send</Button>
      </FormControl>

      { comments?.map(comment =>
        <Paper key={ comment.id } className={ style.comment }>{ comment.body }</Paper>) }
    </>);
};

export default Comments;
