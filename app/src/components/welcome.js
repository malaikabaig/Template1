import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import man from '../man.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Welcome() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  console.log('check', isHovered);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for medium and up
        my: 15,
        alignItems: 'center',
        justifyContent: 'center',
        mx: { xs: 2, md: 55 }, // Adjust horizontal margins for different screen sizes
      }}
    >
      <Box>
        <img src={man} alt="man" width={550} height={659} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mx: { xs: 0, md: 5 }, // Adjust margin for different screen sizes
          lineHeight: 2,
          mt: { xs: 5, md: 10 }, // Adjust top margin for different screen sizes
          textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
        }}
      >
        <Box
          component="span"
          sx={{
            fontFamily: 'Abril Fatface',
            fontSize: 35,
            fontWeight: 'bold',
          }}
        >
          Welcome To Our Website
        </Box>
        <Typography
          variant=""
          fontSize={18}
          fontFamily={'Mukta Mahee arial sans-serif'}
          color="#6c757d"
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
          <Box sx={{ mt: 2 }}>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </Box>
        </Typography>
        <Box>
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              fontSize: 20,
              mt: 5,
              width: 280,
              color: 'teal',
              mx: 'auto', // Center button on small screens
              backgroundColor: isHovered ? 'white' : 'white',
            }}
            variant="text"
            startIcon={
              <Box
                sx={{
                  border: 2,
                  borderColor: isHovered ? 'black' : '#e6e6e6',
                  borderRadius: '100%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <PlayArrowIcon
                  sx={{
                    fontSize: 'large',
                  }}
                />
              </Box>
            }
          >
            Watch The Video
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
