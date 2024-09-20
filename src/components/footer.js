// import { Box, Divider, IconButton, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import SendIcon from '@mui/icons-material/Send';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';

// export default function Footer() {
//   return (
//     <>
//       <Box sx={{ backgroundColor: 'black', textAlign: 'center' }}>
//         <Box
//           sx={{
//             mx: 55,
//             py: 15,
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'center',
//           }}
//         >
//           <Box sx={{ mr: 23 }}>
//             <Typography fontSize={18} fontWeight={'bold'} color="white">
//               Quick Link
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               About Us
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               Terms & Conditions
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               Privacy Policy
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               Help
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               Rooms
//             </Typography>
//           </Box>
//           <Box sx={{ mr: 23 }}>
//             <Typography fontSize={18} fontWeight={'bold'} color="white">
//               Support
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               Our Location
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               The Hosts
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               About
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               Contact
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="#ccc">
//               Restaurant
//             </Typography>
//           </Box>
//           <Box sx={{ mr: 23 }}>
//             <Typography fontSize={18} fontWeight={'bold'} color="white">
//               Contact Info
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="white">
//               Address:
//             </Typography>
//             <Typography sx={{ mt: 1 }} lineHeight={2} color="#727272">
//               98 West 21th Street, Suite 721 New York NY 10016
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="white">
//               Phone:
//             </Typography>
//             <Typography sx={{ mt: 1 }} color="#727272">
//               (+1) 435 3533
//             </Typography>
//             <Typography sx={{ mt: 3 }} color="white">
//               Email:
//             </Typography>
//             <Typography sx={{ mt: 1 }} color="#727272">
//               info@yourdomain.com
//             </Typography>
//           </Box>
//           <Box sx={{ mr: 23 }}>
//             <Typography fontSize={18} fontWeight={'bold'} color="white">
//               Subscribe
//             </Typography>
//             <Typography sx={{ mt: 1 }} lineHeight={2} color="#727272">
//               Sign up for our newsletter
//             </Typography>
//             {/* <Box
//               component="form"
//               sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//               noValidate
//               autoComplete="off"
//             >
//               <TextField label="Your Email" variant="standard" />
//             </Box> */}

//             <Box
//               component="form"
//               sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//               }}
//               noValidate
//               autoComplete="off"
//             >
//               <TextField
//                 id="outlined-multiline-flexible"
//                 variant="standard"
//                 maxRows={4}
//                 placeholder="your email..."
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <SendIcon sx={{ color: 'white' }} />{' '}
//                     </InputAdornment>
//                   ),
//                   sx: {
//                     padding: '5px 0', // Adjust padding as needed
//                     '& .MuiInputBase-input': {
//                       padding: '12px 14px', // Adjust padding inside the input field
//                     },
//                     '& .MuiInputAdornment-root': {
//                       marginRight: '8px', // Adjust spacing between the icon and the text
//                     },
//                   },
//                 }}
//                 sx={{
//                   borderBottom: '1px solid #727272',
//                   // Default border color
//                   '& .MuiInputBase-root': {
//                     borderBottom: '1px solid #727272', // Ensure consistent border color when not focused
//                   },
//                   '& .MuiInputBase-root:before': {
//                     borderBottom: '1px solid #727272', // Default border color
//                   },
//                   '& .MuiInputBase-root:after': {
//                     borderBottom: '2px solid white', // Border color when focused
//                   },
//                   '& .MuiInputLabel-root': {
//                     color: '#727272', // Label color
//                   },
//                   '& .MuiInputLabel-root.Mui-focused': {
//                     color: 'white', // Label color when focused
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'white', // Text color inside the input
//                   },
//                 }}
//               />

//               {/* <input
//                 type="email"
//                 placeholder="your eamil"
//                 style={{ backgroundColor: 'transparent',  }}
//               /> */}
//             </Box>
//           </Box>
//         </Box>

//         {/* Divider */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//           <Divider width="60%" color="#8D8D8D" />
//         </Box>
//         <Typography color="#8D8D8D" fontSize={27} sx={{ mt: 6, mb: 2 }}>
//           Copyright © 2024 All rights reserved | This template is made with by{' '}
//           <FavoriteIcon /> Colorlib
//         </Typography>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <FacebookIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <TwitterIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <InstagramIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <LinkedInIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <YouTubeIcon />
//         </IconButton>
//       </Box>
//     </>
//   );
// }

// import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import SendIcon from '@mui/icons-material/Send';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';

// export default function Footer() {
//   return (
//     <Box sx={{ backgroundColor: 'black', textAlign: 'center', py: 6 }}>
//       <Stack
//         direction={{ xs: 'column', md: 'row' }}
//         spacing={4}
//         sx={{ px: 2, justifyContent: 'space-around' }}
//       >
//         <Box>
//           <Typography fontSize={18} fontWeight={'bold'} color="white">
//             Quick Link
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             About Us
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             Terms & Conditions
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             Privacy Policy
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             Help
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             Rooms
//           </Typography>
//         </Box>

//         <Box>
//           <Typography fontSize={18} fontWeight={'bold'} color="white">
//             Support
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             Our Location
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             The Hosts
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             About
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             Contact
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="#ccc">
//             Restaurant
//           </Typography>
//         </Box>

//         <Box>
//           <Typography fontSize={18} fontWeight={'bold'} color="white">
//             Contact Info
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="white">
//             Address:
//           </Typography>
//           <Typography sx={{ mt: 1 }} lineHeight={2} color="#727272">
//             98 West 21th Street, Suite 721 New York NY 10016
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="white">
//             Phone:
//           </Typography>
//           <Typography sx={{ mt: 1 }} color="#727272">
//             (+1) 435 3533
//           </Typography>
//           <Typography sx={{ mt: 3 }} color="white">
//             Email:
//           </Typography>
//           <Typography sx={{ mt: 1 }} color="#727272">
//             info@yourdomain.com
//           </Typography>
//         </Box>

//         <Box>
//           <Typography fontSize={18} fontWeight={'bold'} color="white">
//             Subscribe
//           </Typography>
//           <Typography sx={{ mt: 1 }} lineHeight={2} color="#727272">
//             Sign up for our newsletter
//           </Typography>
//           <Box
//             component="form"
//             sx={{
//               '& > :not(style)': { m: 1, width: '100%' },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               id="outlined-multiline-flexible"
//               variant="standard"
//               maxRows={4}
//               placeholder="your email..."
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <SendIcon sx={{ color: 'white' }} />
//                   </InputAdornment>
//                 ),
//                 sx: {
//                   padding: '5px 0',
//                   '& .MuiInputBase-input': {
//                     padding: '12px 14px',
//                   },
//                   '& .MuiInputAdornment-root': {
//                     marginRight: '8px',
//                   },
//                 },
//               }}
//               sx={{
//                 borderBottom: '1px solid #727272',
//                 '& .MuiInputBase-root': {
//                   borderBottom: '1px solid #727272',
//                 },
//                 '& .MuiInputBase-root:before': {
//                   borderBottom: '1px solid #727272',
//                 },
//                 '& .MuiInputBase-root:after': {
//                   borderBottom: '2px solid white',
//                 },
//                 '& .MuiInputLabel-root': {
//                   color: '#727272',
//                 },
//                 '& .MuiInputLabel-root.Mui-focused': {
//                   color: 'white',
//                 },
//                 '& .MuiInputBase-input': {
//                   color: 'white',
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </Stack>

//       <Box
//         sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 4 }}
//       >
//         <Divider width="60%" color="#8D8D8D" />
//       </Box>
//       <Typography color="#8D8D8D" fontSize={27} sx={{ mb: 2 }}>
//         Copyright © 2024 All rights reserved | This template is made with by{' '}
//         <FavoriteIcon /> Colorlib
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <FacebookIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <TwitterIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <InstagramIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <LinkedInIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <YouTubeIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

// import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import SendIcon from '@mui/icons-material/Send';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';

// export default function Footer() {
//   return (
//     <Box sx={{ backgroundColor: 'black', textAlign: 'center', py: 6 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         {/* Container for centering the content */}
//         <Box sx={{ width: { xs: '100%', md: '50%' }, px: 2 }}>
//           <Stack
//             direction={{ xs: 'column', md: 'row' }}
//             spacing={4}
//             sx={{ justifyContent: 'space-between' }}
//           >
//             <Box>
//               <Typography fontSize={18} fontWeight={'bold'} color="white">
//                 Quick Link
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 About Us
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 Terms & Conditions
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 Privacy Policy
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 Help
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 Rooms
//               </Typography>
//             </Box>

//             <Box>
//               <Typography fontSize={18} fontWeight={'bold'} color="white">
//                 Support
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 Our Location
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 The Hosts
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 About
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 Contact
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="#ccc">
//                 Restaurant
//               </Typography>
//             </Box>

//             <Box>
//               <Typography fontSize={18} fontWeight={'bold'} color="white">
//                 Contact Info
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="white">
//                 Address:
//               </Typography>
//               <Typography sx={{ mt: 1 }} lineHeight={2} color="#727272">
//                 98 West 21th Street, Suite 721 New York NY 10016
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="white">
//                 Phone:
//               </Typography>
//               <Typography sx={{ mt: 1 }} color="#727272">
//                 (+1) 435 3533
//               </Typography>
//               <Typography sx={{ mt: 3 }} color="white">
//                 Email:
//               </Typography>
//               <Typography sx={{ mt: 1 }} color="#727272">
//                 info@yourdomain.com
//               </Typography>
//             </Box>

//             <Box>
//               <Typography fontSize={18} fontWeight={'bold'} color="white">
//                 Subscribe
//               </Typography>
//               <Typography sx={{ mt: 1 }} lineHeight={2} color="#727272">
//                 Sign up for our newsletter
//               </Typography>
//               <Box
//                 component="form"
//                 sx={{
//                   '& > :not(style)': { m: 1, width: '100%' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="outlined-multiline-flexible"
//                   variant="standard"
//                   maxRows={4}
//                   placeholder="your email..."
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <SendIcon sx={{ color: 'white' }} />
//                       </InputAdornment>
//                     ),
//                     sx: {
//                       padding: '5px 0',
//                       '& .MuiInputBase-input': {
//                         padding: '12px 14px',
//                       },
//                       '& .MuiInputAdornment-root': {
//                         marginRight: '8px',
//                       },
//                     },
//                   }}
//                   sx={{
//                     borderBottom: '1px solid #727272',
//                     '& .MuiInputBase-root': {
//                       borderBottom: '1px solid #727272',
//                     },
//                     '& .MuiInputBase-root:before': {
//                       borderBottom: '1px solid #727272',
//                     },
//                     '& .MuiInputBase-root:after': {
//                       borderBottom: '2px solid white',
//                     },
//                     '& .MuiInputLabel-root': {
//                       color: '#727272',
//                     },
//                     '& .MuiInputLabel-root.Mui-focused': {
//                       color: 'white',
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'white',
//                     },
//                   }}
//                 />
//               </Box>
//             </Box>
//           </Stack>
//         </Box>
//       </Box>

//       <Box
//         sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 4 }}
//       >
//         <Divider width="60%" color="#8D8D8D" />
//       </Box>
//       <Typography color="#8D8D8D" fontSize={27} sx={{ mb: 2 }}>
//         Copyright © 2024 All rights reserved | This template is made with by{' '}
//         <FavoriteIcon /> Colorlib
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <FacebookIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <TwitterIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <InstagramIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <LinkedInIcon />
//         </IconButton>
//         <IconButton sx={{ color: '#8D8D8D' }}>
//           <YouTubeIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'black', textAlign: 'center', py: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* Container for centering the content */}
        <Box sx={{ width: { xs: '100%', md: '50%' }, px: 2 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }} // Changes direction based on screen size
            spacing={4}
            sx={{ justifyContent: 'space-between' }}
          >
            <Box>
              <Typography fontSize={18} fontWeight={'bold'} color="white">
                Quick Link
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                About Us
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                Terms & Conditions
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                Privacy Policy
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                Help
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                Rooms
              </Typography>
            </Box>

            <Box>
              <Typography fontSize={18} fontWeight={'bold'} color="white">
                Support
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                Our Location
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                The Hosts
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                About
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                Contact
              </Typography>
              <Typography sx={{ mt: 3 }} color="#ccc">
                Restaurant
              </Typography>
            </Box>

            <Box>
              <Typography fontSize={18} fontWeight={'bold'} color="white">
                Contact Info
              </Typography>
              <Typography sx={{ mt: 3 }} color="white">
                Address:
              </Typography>
              <Typography sx={{ mt: 1 }} lineHeight={2} color="#727272">
                98 West 21th Street, Suite 721 New York NY 10016
              </Typography>
              <Typography sx={{ mt: 3 }} color="white">
                Phone:
              </Typography>
              <Typography sx={{ mt: 1 }} color="#727272">
                (+1) 435 3533
              </Typography>
              <Typography sx={{ mt: 3 }} color="white">
                Email:
              </Typography>
              <Typography sx={{ mt: 1 }} color="#727272">
                info@yourdomain.com
              </Typography>
            </Box>

            <Box>
              <Typography fontSize={18} fontWeight={'bold'} color="white">
                Subscribe
              </Typography>
              <Typography sx={{ mt: 1 }} lineHeight={2} color="#727272">
                Sign up for our newsletter
              </Typography>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-flexible"
                  variant="standard"
                  maxRows={4}
                  placeholder="your email..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SendIcon sx={{ color: 'white' }} />
                      </InputAdornment>
                    ),
                    sx: {
                      padding: '5px 0',
                      '& .MuiInputBase-input': {
                        padding: '12px 14px',
                      },
                      '& .MuiInputAdornment-root': {
                        marginRight: '8px',
                      },
                    },
                  }}
                  sx={{
                    borderBottom: '1px solid #727272',
                    '& .MuiInputBase-root': {
                      borderBottom: '1px solid #727272',
                    },
                    '& .MuiInputBase-root:before': {
                      borderBottom: '1px solid #727272',
                    },
                    '& .MuiInputBase-root:after': {
                      borderBottom: '2px solid white',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#727272',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 4 }}
      >
        <Divider width="60%" color="#8D8D8D" />
      </Box>
      <Typography color="#8D8D8D" fontSize={27} sx={{ mb: 2 }}>
        Copyright © 2024 All rights reserved | This template is made with by{' '}
        <FavoriteIcon /> Colorlib
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton sx={{ color: '#8D8D8D' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{ color: '#8D8D8D' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton sx={{ color: '#8D8D8D' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton sx={{ color: '#8D8D8D' }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton sx={{ color: '#8D8D8D' }}>
          <YouTubeIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
