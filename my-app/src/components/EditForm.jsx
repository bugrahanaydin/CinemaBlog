import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Select, Input, MenuItem, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateMovie } from "../actions/movie";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
  buttons: {
    marginTop: theme.spacing(2),
  },
}));

const tags = ["Action", "Drama", "Sci-fiction", "Science"];

const postSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
});

const EditForm = ({ history, movie, closeEditMode }) => {
  const dispatch = useDispatch();

  const [file, setFile] = useState(movie?.image);
  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });

  const onSubmit = (data) => {
    const updatedMovie = {
      _id: movie._id,
      ...data,
      image: file,
    };
    dispatch(updateMovie(movie._id, updatedMovie));

    reset();
    setFile(null);
    closeEditMode();
  };

  const classes = useStyles();
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="title"
          label="Title"
          name="title"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputRef={register}
          error={errors.title ? true : false}
          fullWidth
          defaultValue={movie?.title}
        />
        <TextField
          id="subtitle"
          label="Sub Title"
          name="subtitle"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputRef={register}
          error={errors.subtitle ? true : false}
          fullWidth
          defaultValue={movie?.subtitle}
        />
        <Controller
          as={
            <Select input={<Input />} className={classes.textField}>
              {tags.map((tag, index) => (
                <MenuItem key={index} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          }
          name="tag"
          control={control}
          error={errors.tag ? true : false}
          defaultValue={movie?.tag}
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
          error={errors.content ? true : false}
          fullWidth
          defaultValue={movie?.content}
        />
        <FileBase64 multiple={false} onDone={({ base64 }) => setFile(base64)} />
        <div className={classes.buttons}>
          <Button color="primary" variant="outlined" onClick={closeEditMode}>
            Cancel
          </Button>{" "}
          <Button color="secondary" variant="outlined" type="submit" >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
