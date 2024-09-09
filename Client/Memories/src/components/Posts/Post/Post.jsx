import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {styled} from '@mui/system'
import { Styles } from './styles'
import moment from 'moment'

function Post({post, setCurrentId}) {
  // const StyledBar =  styled(AppBar)(()=> (Styles.appBar))
  const StyledCard = styled(Card)(()=> Styles.card)
  const StyledTypography= styled(Typography)(()=> Styles.title)
  const StyledCardActions= styled(CardActions)(()=> Styles.cardActions)
  const StyledCardMedia = styled(CardMedia)(()=> Styles.media)
  // const styledButton = Styled(Button)(()=> Styles.media)
  return (
   <StyledCard>
      <StyledCardMedia image= {post.selectedFile}
      title={post.title}/>
        <div className={Styles.overlay}>
          <StyledTypography variant='h6'>
              {`Posted by ${post.creator}`}
          </StyledTypography>
          <StyledTypography variant='body2'>
              {post.title}
          </StyledTypography>
          <StyledTypography variant='body2'>
              {moment(post.createdAt).fromNow()}
          </StyledTypography>
        </div>
        {/* <div className={Styles.overlay2}>
          <Button style={{color : 'blue'}} size = 'small' onClick={()=> 
            {setCurrentId(post._id)}}>
              <EditIcon fontSize = 'default'/>
          </Button>
        </div> */}
        <div className={Styles.details}>
           <StyledTypography variant='body2' color='textSecondary'>
              {post.tags.map(tag=>`#${tag} `)}
          </StyledTypography>
        </div>
        <CardContent>
           <StyledTypography variant='h5' gutterBottom>
                  {post.message}
           </StyledTypography>
        </CardContent>
        <StyledCardActions>
            <Button size='small' style={{color : '#74a1e8'}} onClick={()=> {}}>
              <ThumbUpAltIcon style={{color : '#74a1e8'}} fontSize= 'small'/>
              Like
              {post.likeCount}
            </Button>
            <Button size='small' style={{color : '#e36c27'}} onClick={()=> {}}>
              <DeleteIcon style={{color : '#e36c27'}} fontSize= 'small'/>
              Delete
            </Button>
            <div className={Styles.overlay2}>
          <Button style={{color : 'blue'}} size = 'small' onClick={()=> 
            {setCurrentId(post._id)}}>
              <MoreHorizIcon style={{color : '#74a1e8'}} fontSize = 'default'/>
          </Button>
           </div>
        </StyledCardActions>
   </StyledCard>
  )
}

export default Post