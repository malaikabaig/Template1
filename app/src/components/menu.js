import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Bg from '../bg.png';

export default function Menu() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          pt: 16,
          px: 20,
          justifyContent: 'space-between',
          color: 'white',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Abril Fatface, serif, times',
            fontSize: 40,
            fontWeight: 'bold',
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          Hepta
        </Typography>
        <MenuIcon fontSize="large" />
      </Box>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: 'Abril Fatface ',
          color: 'white',
          mt: 25,
          fontSize: 70,
          fontWeight: 'bold',
        }}
      >
        Travel & Tours
        <Typography variant="body1" sx={{ mt: 3, fontSize: 20 }}>
          A free template by <Link sx={{ color: '#666' }}>Colorlib.</Link>
          Download and Share !
        </Typography>
        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            borderWidth: 3,
            width: 190,
            height: 60,
            mt: 10,
            px: 4,
            py: 3,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#d0d3d4',
            },
          }}
          variant="outlined"
        >
          Visit Colorlib
        </Button>
        <Box
          sx={{
            fontSize: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pb: 5,
          }}
        >
          <ArrowDropDownIcon fontSize="large" sx={{ color: 'white', pt: 28 }} />
          ScrollDown
        </Box>
      </Box>
    </Box>
  );
}
