import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import img1 from '../img_1.jpg';
import img2 from '../img_2.jpg';
import img3 from '../img_3.jpg';
export default function Blog() {
  const card1 = (
    <>
      <CardMedia sx={{ height: 234 }} image={img1} title="img1" />
      <CardContent sx={{ maxWidth: 330, my: 3 }}>
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
      <CardMedia sx={{ height: 234 }} image={img2} title="img2" />
      <CardContent sx={{ maxWidth: 330, my: 3 }}>
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
      <CardMedia sx={{ height: 234 }} image={img3} title="img3" />
      <CardContent sx={{ maxWidth: 330, my: 3 }}>
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
    <Box sx={{ backgroundColor: '#65c0ba !important' }}>
      <Box
        sx={{
          mx: 55,
          py: 15,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Box sx={{ mx: 25 }}>
          <Typography
            variant="h5"
            fontSize={80}
            fontWeight={'bold'}
            fontFamily={'Abril Fatface, serif, times'}
            color="white"
          >
            Recent Blog Post
          </Typography>
          <Typography
            variant="body1"
            // color="text.secondary"
            lineHeight={2}
            fontSize={17}
            color="white"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            // flexWrap: 'wrap',
            mt: 9,
            justifyContent: 'center',
          }}
        >
          <Card sx={{ mr: 3.5 }} variant="elevated">
            {card1}
          </Card>
          <Card sx={{ mr: 3.5 }} variant="elevated">
            {card2}
          </Card>
          <Card sx={{ mr: 3.5 }} variant="elevated">
            {card3}
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
