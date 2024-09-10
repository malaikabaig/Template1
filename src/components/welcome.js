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
        flexDirection: 'row',
        my: 15,
        alignItems: 'center',
        justifyContent: 'center',
        mx: 55,
      }}
    >
      <Box>
        <img src={man} alt="man" width={550} height={659} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mx: 5,
          lineHeight: 2,
          mt: 10,
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
          language ocean.{' '}
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
              mx: -2,
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
