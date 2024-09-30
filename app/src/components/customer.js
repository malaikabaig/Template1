// import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import ava1 from '../ava1.jpg';
// import ava2 from '../ava2.jpg';
// import ava3 from '../ava3.jpg';
// export default function Reviews() {
//   const card1 = (
//     <>
//       <Box sx={{ backgroundColor: '#fafafa' }}>
//         <CardMedia
//           sx={{
//             height: 75,
//             width: 75,
//             borderRadius: 100,

//             ml: 6,
//           }}
//           image={ava1}
//           title="img1"
//         />
//         <CardContent sx={{ maxWidth: 330, my: 3 }}>
//           <Box sx={{ textAlign: 'left', px: 1 }}>
//             <Typography variant="body1" lineHeight={2}>
//               “Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts. Separated
//               they live in Bookmarksgrove right at the coast of the Semantics, a
//               large language ocean.”
//             </Typography>
//             <Typography sx={{ fontSize: 16, mt: 3, color: 'text.secondary' }}>
//               — Clare Gupta
//             </Typography>
//           </Box>
//         </CardContent>
//       </Box>
//     </>
//   );

//   const card2 = (
//     <>
//       <Box sx={{ backgroundColor: '#fafafa' }}>
//         <CardMedia
//           sx={{
//             height: 75,
//             width: 75,
//             borderRadius: 100,
//             ml: 6,
//           }}
//           image={ava2}
//           title="img2"
//         />
//         <CardContent sx={{ maxWidth: 330, my: 3 }}>
//           <Box sx={{ textAlign: 'left', px: 1 }}>
//             <Typography variant="body1" lineHeight={2}>
//               “Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts. Separated
//               they live in Bookmarksgrove right at the coast of the Semantics, a
//               large language ocean.”
//             </Typography>
//             <Typography sx={{ fontSize: 16, mt: 3, color: 'text.secondary' }}>
//               — Rogie Slater
//             </Typography>
//           </Box>
//         </CardContent>
//       </Box>
//     </>
//   );

//   const card3 = (
//     <>
//       <Box sx={{ backgroundColor: '#fafafa' }}>
//         <CardMedia
//           sx={{
//             height: 75,
//             width: 75,
//             borderRadius: 100,
//             ml: 6,
//           }}
//           image={ava3}
//           title="img3"
//         />
//         <CardContent sx={{ maxWidth: 330, my: 3 }}>
//           <Box sx={{ textAlign: 'left', px: 1 }}>
//             <Typography variant="body1" lineHeight={2}>
//               “Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts. Separated
//               they live in Bookmarksgrove right at the coast of the Semantics, a
//               large language ocean.”
//             </Typography>
//             <Typography sx={{ fontSize: 16, mt: 3, color: 'text.secondary' }}>
//               — John Doe
//             </Typography>
//           </Box>
//         </CardContent>
//       </Box>
//     </>
//   );

//   return (
//     <Box sx={{ backgroundColor: '#fafafa !important' }}>
//       <Box
//         sx={{
//           mx: 45,
//           py: 15,
//           textAlign: 'center',
//           color: 'white',
//           flexDirection: 'column',
//           display: 'flex',
//         }}
//       >
//         <Typography
//           sx={{ color: 'black' }}
//           variant="h5"
//           fontSize={75}
//           fontWeight={'bold'}
//           fontFamily={'Abril Fatface, serif, times'}
//         >
//           Happy Customers
//         </Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'row',
//             // flexWrap: 'wrap',
//             mt: 9,
//             justifyContent: 'center',
//             alignItems: 'flex-start',
//           }}
//         >
//           {/* , backgroundColor: '#fafafa' */}
//           <Card sx={{ mr: 3.5, backgroundColor: '#fafafa' }} variant="elevated">
//             {card1}
//           </Card>
//           <Card sx={{ mr: 3.5, backgroundColor: '#fafafa' }} variant="elevated">
//             {card2}
//           </Card>
//           <Card sx={{ mr: 3.5, backgroundColor: '#fafafa' }} variant="elevated">
//             {card3}
//           </Card>
//         </Box>
//       </Box>
//     </Box>
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
import ava1 from '../ava1.jpg';
import ava2 from '../ava2.jpg';
import ava3 from '../ava3.jpg';

export default function Reviews() {
  const card1 = (
    <>
      <Box sx={{ backgroundColor: '#fafafa' }}>
        <CardMedia
          sx={{
            height: 75,
            width: 75,
            borderRadius: 100,
            ml: 6,
          }}
          image={ava1}
          title="img1"
        />
        <CardContent sx={{ maxWidth: 330, my: 3 }}>
          <Box sx={{ textAlign: 'left', px: 1 }}>
            <Typography variant="body1" lineHeight={2}>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </Typography>
            <Typography sx={{ fontSize: 16, mt: 3, color: 'text.secondary' }}>
              — Clare Gupta
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </>
  );

  const card2 = (
    <>
      <Box sx={{ backgroundColor: '#fafafa' }}>
        <CardMedia
          sx={{
            height: 75,
            width: 75,
            borderRadius: 100,
            ml: 6,
          }}
          image={ava2}
          title="img2"
        />
        <CardContent sx={{ maxWidth: 330, my: 3 }}>
          <Box sx={{ textAlign: 'left', px: 1 }}>
            <Typography variant="body1" lineHeight={2}>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </Typography>
            <Typography sx={{ fontSize: 16, mt: 3, color: 'text.secondary' }}>
              — Rogie Slater
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </>
  );

  const card3 = (
    <>
      <Box sx={{ backgroundColor: '#fafafa' }}>
        <CardMedia
          sx={{
            height: 75,
            width: 75,
            borderRadius: 100,
            ml: 6,
          }}
          image={ava3}
          title="img3"
        />
        <CardContent sx={{ maxWidth: 330, my: 3 }}>
          <Box sx={{ textAlign: 'left', px: 1 }}>
            <Typography variant="body1" lineHeight={2}>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </Typography>
            <Typography sx={{ fontSize: 16, mt: 3, color: 'text.secondary' }}>
              — John Doe
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </>
  );

  return (
    <Box sx={{ backgroundColor: '#fafafa !important' }}>
      <Box
        sx={{
          mx: 'auto',
          py: 15,
          textAlign: 'center',
          color: 'white',
          flexDirection: 'column',
          display: 'flex',
          maxWidth: 1200,
        }}
      >
        <Typography
          sx={{ color: 'black' }}
          variant="h5"
          fontSize={75}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
        >
          Happy Customers
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 9 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card sx={{ backgroundColor: '#fafafa' }} variant="elevated">
              {card1}
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card sx={{ backgroundColor: '#fafafa' }} variant="elevated">
              {card2}
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card sx={{ backgroundColor: '#fafafa' }} variant="elevated">
              {card3}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
