import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Select,
  Input,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createMovie } from "../actions/movie";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const tags = ["Action", "Drama", "Sci-fiction", "Documentary"];

const postSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
  user_name: yup.string().required(),
});

const AddForm = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });
  const onSubmit = (data) => {
   /* const obj = {data};
const myJSON = JSON.stringify(obj);*/
    
    dispatch(createMovie({ ...data, image: file }));
    clearForm();
  };
  const clearForm = () => {
    reset();
    setFile(null);
    handleClose();
  };
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle> Create new post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Help us to create best cinema blog.
        </DialogContentText>
        <div className={classes.root}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
              className={classes.textField}
              size="small"
              inputRef={register}
              error={errors?.title ? true : false}
              fullWidth
            />
            <TextField
              id="subtitle"
              label="Subtitle"
              name="subtitle"
              variant="outlined"
              className={classes.textField}
              size="small"
              inputRef={register}
              error={errors?.subtitle ? true : false}
              fullWidth
            />
            <Controller
              as={
                <Select
                  input={<Input />}
                  className={classes.textField}
                  fullWidth
                >
                  {tags.map((tag, index) => (
                    <MenuItem key={index} value={tag}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              }
              name="tag"
              control={control}
              error={errors?.tag ? true : false}
              defaultValue={tags[0]}
            />

            <TextField
              id="content"
              label="Content"
              name="content"
              multiline
              size="small"
              inputRef={register}
              rows={4}
              className={classes.textField}
              variant="outlined"
              error={errors?.content ? true : false}
              fullWidth
            />
            <Input id={"user_name"}
              style={{display:"none"}}
              label="user"
              name="user_name"
              multiline
              size="small"
              inputRef={register}
              value={!user ? null : user.username}
              rows={1}
              className={classes.textField}
              variant="outlined"
              error={errors?.content ? true : false}
              fullWidth></Input>

            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setFile(base64)}
            />
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={clearForm} color="inherit">
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={() => handleSubmit(onSubmit)()}
          color="primary"
          variant="outlined"
        >
          Publish
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddForm;
