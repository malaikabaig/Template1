import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ava1 from '../ava1.jpg';
import ava2 from '../ava2.jpg';
import ava3 from '../ava3.jpg';
export default function Reviews() {
  const card1 = (
    <>
      <CardMedia
        sx={{ height: 75, width: 75, borderRadius: 100, mt: 5 }}
        image={ava1}
        title="img1"
      />
      <CardContent sx={{ maxWidth: 330, my: 3 }}>
        <Box sx={{ textAlign: 'left', px: 4 }}>
          <Typography variant="body1" color="#6c757d" lineHeight={2}>
            “Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.”
          </Typography>
        </Box>
      </CardContent>
    </>
  );

  const card2 = (
    <>
      <CardMedia
        sx={{ height: 75, width: 75, borderRadius: 100, mt: 5 }}
        image={ava2}
        title="img2"
      />
      <CardContent sx={{ maxWidth: 330, my: 3 }}>
        <Box sx={{ textAlign: 'left', px: 4 }}>
          <Typography variant="body1" color="#6c757d" lineHeight={2}>
            “Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.”
          </Typography>
        </Box>
      </CardContent>
    </>
  );

  const card3 = (
    <>
      <CardMedia
        sx={{ height: 75, width: 75, borderRadius: 100, mt: 5 }}
        image={ava3}
        title="img3"
      />
      <CardContent sx={{ maxWidth: 330, my: 3 }}>
        <Box sx={{ textAlign: 'left', px: 4 }}>
          <Typography variant="body1" color="#6c757d" lineHeight={2}>
            “Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.”
          </Typography>
        </Box>
      </CardContent>
    </>
  );

  return (
    <Box sx={{ backgroundColor: '#fafafa !important' }}>
      <Box
        sx={{
          mx: 55,
          py: 15,
          textAlign: 'center',
          color: 'white',
        }}
      >
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
