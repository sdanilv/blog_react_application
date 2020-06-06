import React, { FC } from 'react';
import { useFormik } from 'formik';
import {
  Button, Paper, TextField, FormControl,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { CommentType } from '../../../redux/Post/PostReducer';
import { commentStyle } from './CommentsStyle';

type CommentsProps = { comments: Array<CommentType>|undefined, addComment: (comment: string) => void }
const Comments: FC<CommentsProps> = ({ comments, addComment }) => {
  const style = commentStyle();
  const {
    resetForm, handleChange, values, submitForm,
  } = useFormik({
    initialValues: { comment: '' },
    onSubmit: (values) => {
      if (values.comment.trim()) {
        addComment(values.comment);
      }
      resetForm();
    },
  });

  return (
    <>
      <div>
        { `${ comments?.length } comment${ comments?.length !== 1 && 's' }` }
      </div>
      <FormControl fullWidth className={ style.form }>
        <TextField
          onChange={ handleChange }  value={ values.comment } id="comment"
          fullWidth rowsMax={ 10 } placeholder="Enter your comment"
          multiline variant="outlined" rows={ 3 }
        />
        <Button
          variant="contained"
          endIcon={ <SendIcon/> }
          onClick={ submitForm }
          className={ style.button }
        >
          Send
        </Button>
      </FormControl>

      { comments?.map((comment) => <Paper key={ comment.id } className={ style.comment }>{ comment.body }</Paper>) }
    </>
  );
};

export default Comments;
