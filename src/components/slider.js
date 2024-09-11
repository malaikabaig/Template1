import { Box, Slide, Typography } from '@mui/material';

export default function Slider() {
  return (
    <Box
      sx={{
        mx: 55,
        py: 15,
        textAlign: 'center',
        // display: 'flex',
        // flexDirection: 'column',
      }}
    >
      <Box sx={{ mx: 25 }}>
        <Typography
          variant="h5"
          fontSize={80}
          fontWeight={'bold'}
          fontFamily={'Abril Fatface, serif, times'}
        >
          International Tour Managment.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          lineHeight={2}
          fontSize={17}
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </Typography>
      </Box>
      {/* <Slide direction="right">hbjbjbjnb</Slide> */}
    </Box>
  );
}
