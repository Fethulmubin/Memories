import React, { useState } from "react";
import { styled } from "@mui/system";
import { Styles } from "./styles";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

  //my styled components
  const StyledPaper = styled(Paper)(() => Styles.paper);
  const StyledButton = styled(Button)(() => Styles.buttonSubmit);

function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <>
      <StyledPaper>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className={Styles.form}
        >
          <Typography variant="h6">Creating a memory</Typography>
          <TextField
            name="creator"
            variant="outlined"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />

          <TextField
            name="title"
            variant="outlined"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />

          <TextField
            name="message"
            variant="outlined"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />

          {/* <TextField
            name = "tags"
            variant = "outlined"
            fullWidth
            value = {postData.tags}
            onChange = {(e) => setPostData({ ...postData, tags: e.target.value })}
          /> */}

<TextField
            label="tags"
            variant="outlined"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
          
          <div className = {Styles.fileInput}>
            <FileBase
              type = "file"
              multiple = {false}
              onDone = {({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          
          <StyledButton
            variant = "container"
            color = "blue"
            size = "large"
            type = "submit"
            fullWidth
          >
            Post
          </StyledButton>
          <Button
            variant = "container"
            color = "red"
            size = "small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </StyledPaper>
    </>
  );
}

export default Form;
