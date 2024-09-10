import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import myImage from '../colorliblogo.png';
import MonitorIcon from '@mui/icons-material/Monitor';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Nav() {
  const navItems = [
    <MonitorIcon />,
    <TabletMacIcon />,
    <PhoneIphoneIcon />,
    <ShoppingCartIcon sx={{ backgroundColor: '' }} />,
    <CloseIcon />,
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            backgroundColor: '#212121',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <img src={myImage} alt="logo" style={{ width: 110, height: 80 }} />

            <Accordion sx={{ background: '#17202a' }}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ color: 'gray' }} variant="h6">
                  + Hepta
                </Typography>
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </Box>
          <Box
            sx={{ display: { xs: 'none', sm: 'flex', bgcolor: 'secondary' } }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#909497' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav></nav>
    </Box>
  );
}
