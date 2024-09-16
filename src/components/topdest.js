import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import img1 from '../img_1.jpg';
import img2 from '../img_2.jpg';
import img3 from '../img_3.jpg';
import img4 from '../img_4.jpg';

export default function Blog() {
  const card1 = (
    <>
      <CardMedia sx={{ height: 171, width: 255 }} image={img1} title="img1" />
      <CardContent sx={{ maxWidth: 280, my: 3 }}>
        <Box sx={{ textAlign: 'left', mt: -4, ml: -2 }}>
          <Typography
            variant="h5"
            fontSize={21}
            fontWeight={'bold'}
            fontFamily={'Abril Fatface, serif, times'}
          >
            Food & Wines
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              size="small"
              sx={{ color: '#64C0BA' }}
            />
            <Typography color="#CCC" sx={{ fontStyle: 'italic' }}>
              3,239 reviews
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </>
  );

  const card2 = (
    <>
      <CardMedia sx={{ height: 171, width: 255 }} image={img2} title="img1" />
      <CardContent sx={{ maxWidth: 280, my: 3 }}>
        <Box sx={{ textAlign: 'left', mt: -4, ml: -2 }}>
          <Typography
            variant="h5"
            fontSize={21}
            fontWeight={'bold'}
            fontFamily={'Abril Fatface, serif, times'}
          >
            Resort & Spa
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              size="small"
              sx={{ color: '#64C0BA' }}
            />
            <Typography color="#CCC" sx={{ fontStyle: 'italic' }}>
              4,921 reviews
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </>
  );

  const card3 = (
    <>
      <CardMedia sx={{ height: 171, width: 255 }} image={img3} title="img1" />
      <CardContent sx={{ maxWidth: 280, my: 3 }}>
        <Box sx={{ textAlign: 'left', mt: -4, ml: -2 }}>
          <Typography
            variant="h5"
            fontSize={21}
            fontWeight={'bold'}
            fontFamily={'Abril Fatface, serif, times'}
          >
            Hotel Rooms
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              size="small"
              sx={{ color: '#64C0BA' }}
            />
            <Typography color="#CCC" sx={{ fontStyle: 'italic' }}>
              2,112 reviews
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </>
  );

  const card4 = (
    <>
      <CardMedia sx={{ height: 171, width: 255 }} image={img4} title="img1" />
      <CardContent sx={{ maxWidth: 280, my: 3 }}>
        <Box sx={{ textAlign: 'left', mt: -4, ml: -2 }}>
          <Typography
            variant="h5"
            fontSize={21}
            fontWeight={'bold'}
            fontFamily={'Abril Fatface, serif, times'}
          >
            Mountain Climbing
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              size="small"
              sx={{ color: '#64C0BA' }}
            />
            <Typography color="#CCC" sx={{ fontStyle: 'italic' }}>
              6,421 reviews
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </>
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white !important',
          mb: -5,
        }}
      >
        <Box
          sx={{
            mx: 55,
            py: 15,
            textAlign: 'center',
          }}
        >
          <Box sx={{ mx: 25 }}>
            <Typography
              variant="h5"
              fontSize={35}
              fontWeight={'bold'}
              fontFamily={'Abril Fatface, serif, times'}
            >
              Top Destination
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              lineHeight={2}
              fontSize={19}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim
              facilis laborum voluptate id porro, culpa maiores quis, blanditiis
              laboriosam alias. Sed.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              //   flexWrap: 'wrap',
              mt: 7,
              justifyContent: 'center',
            }}
          >
            <Card sx={{ mr: 3.8 }} variant="elevated">
              {card1}
            </Card>
            <Card sx={{ mr: 3.8 }} variant="elevated">
              {card2}
            </Card>
            <Card sx={{ mr: 3.8 }} variant="elevated">
              {card3}
            </Card>
            <Card sx={{ mr: 3.8 }} variant="elevated">
              {card4}
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
