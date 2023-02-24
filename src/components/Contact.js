import React from "react";
import {
  Box,
  Button,
  IconButton,
  Container,
  Link,
  Toolbar,
  Typography
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
  return (
    <Container id='Contact' maxWidth='xs' align='center'>
      <Typography variant='h4'>
        Contact Me
      </Typography>
      <Typography my={1} variant='subtitle1'>
        For inquiries, you can reach me through the following channels:
      </Typography>
      <Box mt={3} sx={{
        width: 200,
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <IconButton target='_blank' href='mailto:michaelbulaongdev@gmail.com' aria-label="mail" size='large'>
          <EmailIcon />
        </IconButton>
        <IconButton target='_blank' href='https://www.linkedin.com/in/michaelbulaong/' aria-label="linkedin" size='large'>
          <LinkedInIcon />
        </IconButton>
        <IconButton target='_blank' href='https://github.com/michaelbulaongdev' aria-label="github" size='large'>
          <GitHubIcon />
        </IconButton>
      </Box>
      <Button
        sx={{mt: '1rem'}}
        variant='outlined'
        size='small'
        target='_blank'
        href='https://drive.google.com/file/d/1zFDj8lKBFLbfv0EqyM1MpUS7fjSbkBOQ/view?usp=share_link'
      >download resume
      </Button>
      <Toolbar />
      <Link
        sx={{fontSize: '0.8rem'}}
        target='_blank'
        href='https://github.com/michaelbulaongdev/portfolio'
        underline='hover'>
        react + mui | gh-repo: michaelbulaongdev/portfolio
      </Link>
    </Container>
  )
};

export default Contact;