
import { Mail, Notifications } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div") (({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box) (({theme}) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] : {
    display: "flex"
  }
}));

const UserBox = styled(Box) (({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] : {
    display: "none"
  }
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
       <StyledToolbar>
         <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>JKO.DEV</Typography>
         <HomeIcon sx={{display:{xs:"block", sm:"none"}}}/>
         <Search><InputBase placeholder='Search...'/></Search>
         <Icons>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
              <Avatar alt="" src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc=https://https://media.istockphoto.https://www.istockphoto.com/photo/portrait-of-young-man-ready-for-job-business-concept-gm1476170969-505444546?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile-picture&utm_medium=affiliate&utm_source=unshttps://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=plash&utm_term=profile+picture%3A%3A%3A/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=1https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=70667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concephttps://media.istockphoto.com/id/1476171646/photo/young-woman-ready-for-job-business-concept.webp?b=1&s=17https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=0667a&w=0&k=20&c=oegktY4Hijr4wOelujTp81I0BJPjD6Q-lb5BpwOj0kA=t.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=" />
          </Icons>
          <UserBox>
              <Avatar alt="" src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc=https://https://media.istockphoto.https://www.istockphoto.com/photo/portrait-of-young-man-ready-for-job-business-concept-gm1476170969-505444546?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile-picture&utm_medium=affiliate&utm_source=unshttps://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=plash&utm_term=profile+picture%3A%3A%3A/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=1https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=70667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concephttps://media.istockphoto.com/id/1476171646/photo/young-woman-ready-for-job-business-concept.webp?b=1&s=17https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=0667a&w=0&k=20&c=oegktY4Hijr4wOelujTp81I0BJPjD6Q-lb5BpwOj0kA=t.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=" />
              <Typography variant='span'>John Oropeza</Typography>
          </UserBox>
       </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
