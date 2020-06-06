import React, { FC, useState } from "react";
import { useFormik } from "formik";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExpandIcon from "@material-ui/icons/Launch";
import SendIcon from "@material-ui/icons/Send";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { addPostStyle } from "./AddPostStyle";

type AddPostProps = { addPost: (title: string, body: string) => void, setOpen: (flag: boolean) => void, open: boolean }
const AddPost: FC<AddPostProps> = ({ addPost, setOpen, open }) => {
  const classes = addPostStyle();
  const [expand, setExpand] = useState(false);
  const expandHandler = () => setExpand(!expand);
  const closeHandler = () => setOpen(false);

  const { resetForm, handleChange, values, submitForm } = useFormik({
    initialValues: { title: "", body: "" },
    onSubmit: values => {
      if (values.title.trim() && values.title.trim()) {
        addPost(values.title, values.body);
        resetForm();
        setOpen(false);
      }
    }
  });

  return (
    <Dialog fullWidth={ !expand } fullScreen={ expand } open={ open } onClose={ closeHandler }>
      <DialogTitle>Add post<PostAddIcon/>
        <ExpandIcon onClick={ expandHandler } className={ classes.expandIcon }/>
      </DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <TextField onChange={ handleChange } value={ values.title }
            autoFocus margin="dense" id="title" label="Title"/>
          <TextField
            onChange={ handleChange } value={ values.body } id="body"
            placeholder="Enter your post" multiline variant="outlined"
            rows={ 10 } rowsMax={ 50 }
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={ closeHandler } color="primary">
          Cancel
        </Button>
        <Button variant="contained" color="primary" endIcon={ <SendIcon/> }
          onClick={ submitForm }>
          Add post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPost;
