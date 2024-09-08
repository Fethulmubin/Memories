import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Styles } from "./styles";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

  //my styled components
  const StyledPaper = styled(Paper)(() => Styles.paper);
  const StyledButton = styled(Button)(() => Styles.buttonSubmit);
  const StyledTextField = styled(TextField)(() => Styles.textField);

function Form({currentId, setCurrentId}) {
  const post = useSelector((state)=> currentId? state.posts.find((p)=> p._id === currentId ):null)
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
   useEffect(()=>{
    if(post) setPostData(post)
   },[post])

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId, postData));
    }
    else{
    dispatch(createPost(postData));
    // clear();
    }
  };
  const clear = () => {
    setPostData({ creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",})
  };

  return (
    <>
      <StyledPaper>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className={Styles.form}
        >
          <Typography variant="h6">Creating a memory</Typography>
          <StyledTextField
            name="creator"
            label = "Creator eg : abebe"
            variant="outlined"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />

          <StyledTextField
            name="title"
            label = "Title eg: visit Ethiopia"
            variant="outlined"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />

          <StyledTextField
            name="message"
            label = "Message"
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

          <StyledTextField
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
