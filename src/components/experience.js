import { Box, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';

export default function Experience() {
  const goodfood = (
    <>
      <CardContent
        sx={{ textAlign: 'center', maxWidth: 330, backgroundColor: '#fafafa' }}
      >
        <img
          width={74}
          src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg"
          alt="img"
        />
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
          sx={{ mt: 3 }}
        >
          Good Foods
          <Typography variant="body1" color="#6c757d" lineHeight={2}>
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
        <img
          width={74}
          src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg"
          alt="img"
        />
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
          sx={{ mt: 3 }}
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
        <img
          width={74}
          src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg"
          alt="img"
        />
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
          sx={{ mt: 3 }}
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
        <img
          width={74}
          src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/004-beach.svg"
          alt="img"
        />
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
          sx={{ mt: 3 }}
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
        <img
          width={74}
          src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/005-mountains.svg"
          alt="img"
        />
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
          sx={{ mt: 3 }}
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
        <img
          width={74}
          src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/006-hot-air-balloon.svg"
          alt="img"
        />
        <Typography
          variant="h5"
          fontSize={30}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
          sx={{ mt: 3 }}
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
