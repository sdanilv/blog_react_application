import React, { ChangeEvent, FC, useState } from "react";

import PostAddIcon from "@material-ui/icons/PostAdd";
import ExpandIcon from "@material-ui/icons/Launch";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

import { addPostStyle } from "./AddPostStyle";
import SendIcon from "@material-ui/core/SvgIcon/SvgIcon";

type AddPostProps = { addPost: (title: string, body: string) => void, setOpen: (flag: boolean) => void, open: boolean }
const AddPost: FC<AddPostProps> = ({ addPost, setOpen, open }) => {
  const initState = { title: "", body: "" };
  const [formData, setFormData] = useState(initState);
  const [expand, setExpand] = useState(false);
  const classes = addPostStyle();

  const closeHandler = () => setOpen(false);
  const expandHandler = () => setExpand(!expand);
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setFormData({ ...formData, [target.id]: target.value });
  const submitButtonHandler = () => {
    addPost(formData.title, formData.body);
    setFormData(initState);
    setOpen(false);
  };

  return (
    <Dialog fullWidth={ !expand } fullScreen={ expand } open={ open } onClose={ closeHandler }>
      <DialogTitle>Add post<PostAddIcon/>
        <ExpandIcon onClick={ expandHandler } className={ classes.expandIcon }/>
      </DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <TextField onChange={ onChangeHandler } value={ formData.title }
            autoFocus margin="dense" id="title" label="Title"/>
          <TextField
            onChange={ onChangeHandler } value={ formData.body } id="body"
            placeholder="Enter your post" multiline variant="outlined" rows={ 10 }
            rowsMax={ 50 }
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={ closeHandler } color="primary">
          Cancel
        </Button>
        <Button variant="contained"
          color="primary"
          endIcon={ <SendIcon/> }
          onClick={ submitButtonHandler }>
          Add post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPost;
