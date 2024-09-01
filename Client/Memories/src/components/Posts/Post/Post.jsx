import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import {Styled} from '@mui/material'
import { Styles } from './styles'
import moment from 'moment'

function Post({post}) {
  // const StyledBar =  styled(AppBar)(()=> (Styles.appBar))
  const StyledCard = Styled(Card)(()=> Styles.card)
  const StyledTypography= Styled(Typography)(()=> Styles.title)
  const StyledCardActions= Styled(CardActions)(()=> Styles.title)
  const StyledCardMedia = Styled(CardMedia)(()=> Styles.media)
  // const styledButton = Styled(Button)(()=> Styles.media)
  return (
   <StyledCard>
      <StyledCardMedia image= {Post.selectedFile}
      title={post.title}>
        <div className={Styles.overlay}>
          <Typography variant='h6'>
              {post.creator}
          </Typography>
          <Typography variant='body2'>
              {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={Styles.overlay2}>
          <Button style={{color : 'white'}} size = 'small' onClick={()=> {}} >
              <MoreHorizIcon fontSize = 'default'/>
          </Button>
        </div>
        <div className={Styles.details}>
           <Typography variant='body2' color='textSecondary'>
              {post.tags.maps(tag=>`#${tag} `)}
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
      </StyledCardMedia>
   </StyledCard>
  )
}

export default Post