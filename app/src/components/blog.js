// import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import img1 from '../img_1.jpg';
// import img2 from '../img_2.jpg';
// import img3 from '../img_3.jpg';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Img1 from '../slider-1.jpg';
// import Img2 from '../slider-2.jpg';
// import Img3 from '../slider-3.jpg';
// import Img4 from '../slider-4.jpg';
// import Img5 from '../slider-5.jpg';
// import Img6 from '../slider-6.jpg';
// export default function Blog() {
//   const card1 = (
//     <>
//       <CardMedia sx={{ height: 234 }} image={img1} title="img1" />
//       <CardContent sx={{ maxWidth: 330, my: 3 }}>
//         <Box sx={{ textAlign: 'left', px: 4 }}>
//           <Typography sx={{ color: '#ced4da' }}>FEBURARY 26,2018</Typography>
//           <Typography
//             variant="h5"
//             fontSize={30}
//             fontWeight={'bold'}
//             fontFamily={'Abril Fatface, serif, times'}
//           >
//             45 Best Places to Unwind
//             <Typography variant="body1" color="#6c757d" lineHeight={2}>
//               Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts.
//             </Typography>
//           </Typography>
//         </Box>
//       </CardContent>
//     </>
//   );

//   const card2 = (
//     <>
//       <CardMedia sx={{ height: 234 }} image={img2} title="img2" />
//       <CardContent sx={{ maxWidth: 330, my: 3 }}>
//         <Box sx={{ textAlign: 'left', px: 4 }}>
//           <Typography sx={{ color: '#ced4da' }}>FEBURARY 26,2018</Typography>
//           <Typography
//             variant="h5"
//             fontSize={30}
//             fontWeight={'bold'}
//             fontFamily={'Abril Fatface, serif, times'}
//           >
//             45 Best Places to Unwind
//             <Typography variant="body1" color="#6c757d" lineHeight={2}>
//               Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts.
//             </Typography>
//           </Typography>
//         </Box>
//       </CardContent>
//     </>
//   );

//   const card3 = (
//     <>
//       <CardMedia sx={{ height: 234 }} image={img3} title="img3" />
//       <CardContent sx={{ maxWidth: 330, my: 3 }}>
//         <Box sx={{ textAlign: 'left', px: 4 }}>
//           <Typography sx={{ color: '#ced4da' }}>FEBURARY 26,2018</Typography>
//           <Typography
//             variant="h5"
//             fontSize={30}
//             fontWeight={'bold'}
//             fontFamily={'Abril Fatface, serif, times'}
//           >
//             45 Best Places to Unwind
//             <Typography variant="body1" color="#6c757d" lineHeight={2}>
//               Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts.
//             </Typography>
//           </Typography>
//         </Box>
//       </CardContent>
//     </>
//   );

//   return (
//     <>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           marginBottom: '-150px',
//           zIndex: 2,
//           position: 'relative',
//         }}
//       >
//         <div style={{ width: '55%' }}>
//           <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
//             <div>
//               <img
//                 src={Img1}
//                 alt="img"
//                 style={{ width: '100%', height: 600 }}
//               />
//             </div>
//             <div>
//               <img
//                 src={Img2}
//                 alt="Image2"
//                 style={{ width: '100%', height: 600 }}
//               />
//             </div>
//             <div>
//               <img
//                 src={Img3}
//                 alt="Image3"
//                 style={{ width: '100%', height: 600 }}
//               />
//             </div>
//             <div>
//               <img
//                 src={Img4}
//                 alt="Image4"
//                 style={{ width: '100%', height: 600 }}
//               />
//             </div>
//             <div>
//               <img
//                 src={Img5}
//                 alt="Image5"
//                 style={{ width: '100%', height: 600 }}
//               />
//             </div>
//             <div>
//               <img
//                 src={Img6}
//                 alt="Image6"
//                 style={{ width: '100%', height: 600 }}
//               />
//             </div>
//           </Carousel>
//         </div>
//       </div>
//       <Box
//         sx={{
//           backgroundColor: '#65c0ba !important',
//           clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)',
//           zIndex: 1,
//           position: 'relative',
//         }}
//       >
//         <Box
//           sx={{
//             mx: 55,
//             py: 15,
//             textAlign: 'center',
//           }}
//         >
//           <Box sx={{ mx: 25, pt: 30 }}>
//             <Typography
//               variant="h5"
//               fontSize={80}
//               fontWeight={'bold'}
//               fontFamily={'Abril Fatface, serif, times'}
//             >
//               Recent Blog Post
//             </Typography>
//             <Typography
//               variant="body1"
//               // color="text.secondary"
//               lineHeight={2}
//               fontSize={17}
//               color="white"
//             >
//               Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts. Separated
//               they live in Bookmarksgrove right at the coast of the Semantics, a
//               large language ocean.
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'row',
//               // flexWrap: 'wrap',
//               mt: 9,
//               justifyContent: 'center',
//             }}
//           >
//             <Card sx={{ mr: 3.5 }} variant="elevated">
//               {card1}
//             </Card>
//             <Card sx={{ mr: 3.5 }} variant="elevated">
//               {card2}
//             </Card>
//             <Card sx={{ mr: 3.5 }} variant="elevated">
//               {card3}
//             </Card>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import img1 from '../img_1.jpg';
import img2 from '../img_2.jpg';
import img3 from '../img_3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../slider-1.jpg';
import Img2 from '../slider-2.jpg';
import Img3 from '../slider-3.jpg';
import Img4 from '../slider-4.jpg';
import Img5 from '../slider-5.jpg';
import Img6 from '../slider-6.jpg';

export default function Blog() {
  const card1 = (
    <>
      <CardMedia sx={{ height: 234, width: 349 }} image={img1} title="img1" />
      <CardContent sx={{ maxWidth: 280, my: 3 }}>
        <Box sx={{ textAlign: 'left', px: 4 }}>
          <Typography sx={{ color: '#ced4da' }}>FEBURARY 26,2018</Typography>
          <Typography
            variant="h5"
            fontSize={30}
            fontWeight={'bold'}
            fontFamily={'Abril Fatface, serif, times'}
          >
            45 Best Places to Unwind
            <Typography variant="body1" color="#6c757d" lineHeight={2}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </>
  );

  const card2 = (
    <>
      <CardMedia sx={{ height: 234, width: 349 }} image={img2} title="img2" />
      <CardContent sx={{ maxWidth: 280, my: 3 }}>
        <Box sx={{ textAlign: 'left', px: 4 }}>
          <Typography sx={{ color: '#ced4da' }}>FEBURARY 26,2018</Typography>
          <Typography
            variant="h5"
            fontSize={30}
            fontWeight={'bold'}
            fontFamily={'Abril Fatface, serif, times'}
          >
            45 Best Places to Unwind
            <Typography variant="body1" color="#6c757d" lineHeight={2}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </>
  );

  const card3 = (
    <>
      <CardMedia sx={{ height: 234, width: 349 }} image={img3} title="img3" />
      <CardContent sx={{ maxWidth: 280, my: 3 }}>
        <Box sx={{ textAlign: 'left', px: 4 }}>
          <Typography sx={{ color: '#ced4da' }}>FEBURARY 26,2018</Typography>
          <Typography
            variant="h5"
            fontSize={30}
            fontWeight={'bold'}
            fontFamily={'Abril Fatface, serif, times'}
          >
            45 Best Places to Unwind
            <Typography variant="body1" color="#6c757d" lineHeight={2}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </>
  );

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '-150px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <div style={{ width: '55%' }}>
          <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
            <div>
              <img
                src={Img1}
                alt="img"
                style={{ width: '100%', height: 600 }}
              />
            </div>
            <div>
              <img
                src={Img2}
                alt="Image2"
                style={{ width: '100%', height: 600 }}
              />
            </div>
            <div>
              <img
                src={Img3}
                alt="Image3"
                style={{ width: '100%', height: 600 }}
              />
            </div>
            <div>
              <img
                src={Img4}
                alt="Image4"
                style={{ width: '100%', height: 600 }}
              />
            </div>
            <div>
              <img
                src={Img5}
                alt="Image5"
                style={{ width: '100%', height: 600 }}
              />
            </div>
            <div>
              <img
                src={Img6}
                alt="Image6"
                style={{ width: '100%', height: 600 }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <Box
        sx={{
          backgroundColor: '#65c0ba !important',
          clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            mx: 4, // Added margin for the left and right spaces
            py: 15,
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              mx: 0,
              pt: 30,
              justifyContent: 'center',
              textAlign: 'center',
              mb: 5,
              px: { xs: 2, sm: 8, md: 15, lg: 55 },
            }}
          >
            <Typography
              variant="h5"
              fontSize={80}
              fontWeight={'bold'}
              fontFamily={'Abril Fatface, serif, times'}
            >
              Recent Blog Post
            </Typography>
            <Typography
              variant="body1"
              lineHeight={2}
              fontSize={17}
              color="white"
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Typography>
          </Box>
          <Box sx={{ px: { xs: 10, sm: 4, md: 6, lg: 50 } }}>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              direction={'row'}
            >
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ width: 349, height: 559 }} variant="elevated">
                  {card1}
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ width: 349, height: 559 }} variant="elevated">
                  {card2}
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ width: 349, height: 559 }} variant="elevated">
                  {card3}
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
