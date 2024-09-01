import { styled } from "@mui/system";
import App from "./App";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
 
// export const Bar =  styled(AppBar)(() => ({
//     // appBar: {
//         borderRadius: 15,
//         margin: '30px 0',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//       // },
//       // heading: {
//       //   color: 'rgba(0,183,255, 1)',
//       // },
//       // image: {
//       //   marginLeft: '15px',
//       // },
// }))
export const Styles = {
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}
// export const styledPaper = styled(App,{})({
//     appBar: {
//                 borderRadius: 15,
//                 margin: '30px 0',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               },
//               heading: {
//                 color: 'rgba(0,183,255, 1)',
//               },
//               image: {
//                 marginLeft: '15px',
//               },
// })