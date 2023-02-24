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
import { listWorks } from "./lists";

const Works = () => {
  return (
    <Container maxWidth='md' align='center'>
      <Typography variant='h4'>
        Sample Works
      </Typography>
      <Grid
        my={3}
        container
        spacing={2}
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center'
        }}>
        {listWorks.map((item) => (
          <Grid key={item.link} item xs={8} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{minHeight: 200}}
                image={item.image}
                title={item.thumbnail}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  {item.title}
                </Typography>
                <Typography variant='subtitle2' color='text.secondary'>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={item.link}
                  target='_blank'
                  rel='noopener'
                  size='small'
                > visit site
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant='body2'>
        For more samples, please visit my <Link
          color='primary.dark'
          target='_blank'
          href='https://github.com/michaelbulaongdev'
        >GitHub account page
        </Link>.
      </Typography>
    </Container>
  )
};

export default Works;