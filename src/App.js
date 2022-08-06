import React from "react";
import {
  Typography,
  AppBar,
  Card,
  Button,
  CardContent,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon className={classes.icon} />
          <Typography variant="h6">Photo album</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.container}>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
              sem lacinia quam venenatis vestibulum. Sed posuere consectetur est
              at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondry
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((e, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      createStyles is perhaps the most interesting of the four
                      topics in this post because it is a fix to make TypeScript
                      play nicely with MUI.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
              Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary"> 
          anymore, deprecated in v5. If you don't want to have both Emotion & JSS in your bundle, please refer to the
          </Typography>
      </footer>
    </>
  );
};

export default App;
