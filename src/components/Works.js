import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography
} from "@mui/material";

const Works = () => {
  return (
    <Container maxWidth='md' align='center'>
      <Typography variant='h4'>
        Sample Works
      </Typography>
      <Grid my={3} container spacing={2} sx={{alignItems: 'stretch'}}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              sx={{minHeight: 200}}
              image='https://i.imgur.com/73YDKHQ.png'
              title='pokedex thumbnail'
            />
            <CardContent>
              <Typography variant='h6' component='div'>
                Basic Pokedex
              </Typography>
              <Typography variant='subtitle2' color='text.secondary'>
                project working with fetching and parsing APIs
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href='https://michaelbulaongdev.github.io/project010-pokedex-project/'
                target='_blank'
                rel='noopener'
                size='small'
              >
                visit site
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              sx={{minHeight: 200}}
              image='https://i.imgur.com/qwxnw3a.png'
              title='simon game thumbnail'
            />
            <CardContent>
              <Typography variant='h6' component='div'>
                Simon Game
              </Typography>
              <Typography variant='subtitle2' color='text.secondary'>
                project about game logic, audio media, and event listeners
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href='https://michaelbulaongdev.github.io/Project003-simon-game/'
                target='_blank'
                rel='noopener'
                size='small'>visit site</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              sx={{minHeight: 200}}
              image='https://i.imgur.com/zm4SdZN.png'
              title='stats preview thumbnail'
            />
            <CardContent>
              <Typography variant='h6' component='div'>
                Stats Preview Card
              </Typography>
              <Typography variant='subtitle2' color='text.secondary'>
                project about CSS attributes and text/image manipulation
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href='https://michaelbulaongdev.github.io/FM005-stats-preview-card/'
                target='_blank'
                rel='noopener'
                size='small'>visit site</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Typography variant='body2'>
        For more samples, please visit my <Link color='primary.dark' target='_blank' href='https://github.com/michaelbulaongdev'>GitHub account page</Link>.
      </Typography>
    </Container>
  )
};

export default Works;