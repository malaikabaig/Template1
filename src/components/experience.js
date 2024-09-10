import { Box, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export default function Experience() {
  const goodfood = (
    <>
      <CardContent
        sx={{ textAlign: 'center', maxWidth: 330, backgroundColor: '#fafafa' }}
      >
        <img src="" alt="img" />
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
      <CardContent
        sx={{ textAlign: 'center', maxWidth: 330, backgroundColor: '#fafafa' }}
      >
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

  const airplane = (
    <>
      <CardContent
        sx={{ textAlign: 'center', maxWidth: 330, backgroundColor: '#fafafa' }}
      >
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

  const beach = (
    <>
      <CardContent
        sx={{ textAlign: 'center', maxWidth: 330, backgroundColor: '#fafafa' }}
      >
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
        >
          Beach Resort
          <Typography variant="body1" color="text.secondary" lineHeight={2}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
        </Typography>
      </CardContent>
    </>
  );

  const mountain = (
    <>
      <CardContent
        sx={{ textAlign: 'center', maxWidth: 330, backgroundColor: '#fafafa' }}
      >
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
        >
          Mountain Climbing
          <Typography variant="body1" color="text.secondary" lineHeight={2}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
        </Typography>
      </CardContent>
    </>
  );

  const hotair = (
    <>
      <CardContent
        sx={{ textAlign: 'center', maxWidth: 330, backgroundColor: '#fafafa' }}
      >
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
        >
          Hot Air Balloon
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
      <Box backgroundColor={'#fafafa'} sx={{ py: 15 }}>
        <Box sx={{ mx: 55 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              mx: 25,
            }}
          >
            <Typography
              sx={{
                fontSize: 34,
                fontWeight: 'bold',
                fontFamily: 'Abril Fatface, serif, times',
              }}
            >
              Experience Once In Your Life Time
            </Typography>
            <Typography
              sx={{
                lineHeight: 2,
                fontSize: 17,
                mb: 5,
                color: 'text.secondary',
              }}
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <Card variant="elevated">{goodfood}</Card>
            <Card variant="elevated">{travel}</Card>
            <Card variant="elevated">{airplane}</Card>
            <Card variant="elevated">{beach}</Card>
            <Card variant="elevated">{mountain}</Card>
            <Card variant="elevated">{hotair}</Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
