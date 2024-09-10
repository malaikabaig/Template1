import { Box, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export default function Experience() {
  const goodfood = (
    <>
      <CardContent sx={{ textAlign: 'center', maxWidth: 330 }}>
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
        >
          Good Foods
          <Typography variant="body1" color="text.secondary" lineHeight={2}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
        </Typography>
      </CardContent>
    </>
  );

  const travel = (
    <>
      <CardContent sx={{ textAlign: 'center', maxWidth: 330 }}>
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
        >
          Travel Anywhere
          <Typography variant="body1" color="text.secondary" lineHeight={2}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
        </Typography>
      </CardContent>
    </>
  );

  const Airplane = (
    <>
      <CardContent sx={{ textAlign: 'center', maxWidth: 330 }}>
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
        >
          Airplane
          <Typography variant="body1" color="text.secondary" lineHeight={2}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
        </Typography>
      </CardContent>
    </>
  );
  return (
    <>
      <Box sx={{ mx: 55 }}>
        <Box>
          Experience Once In Your Life Time
          <Typography>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Card variant="outlined">{goodfood}</Card>
          <Card variant="outlined">{travel}</Card>
          <Card variant="outlined">{travel}</Card>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}
