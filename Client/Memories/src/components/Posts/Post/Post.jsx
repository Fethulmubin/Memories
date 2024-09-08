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
          <Typography variant='h6'>
              {post.creator}
          </Typography>
          <Typography variant='body2'>
              {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={Styles.overlay2}>
          <Button style={{color : 'blue'}} size = 'small' onClick={()=> 
            {setCurrentId(post._id)}}>
              <EditIcon fontSize = 'default'/>
          </Button>
        </div>
        <div className={Styles.details}>
           <Typography variant='body2' color='textSecondary'>
              {post.tags.map(tag=>`#${tag} `)}
          </Typography>
        </div>
        <CardContent>
           <StyledTypography variant='h5' gutterBottom>
                  {post.message}
           </StyledTypography>
        </CardContent>
        <StyledCardActions>
            <Button size='small' color='primary' onClick={()=> {}}>
              <ThumbUpAltIcon fontSize= 'small'/>
              Like
              {post.likeCount}
            </Button>
            <Button size='small' color='primary' onClick={()=> {}}>
              <DeleteIcon fontSize= 'small'/>
              Delete
            </Button>
        </StyledCardActions>
   </StyledCard>
  )
}

export default Post