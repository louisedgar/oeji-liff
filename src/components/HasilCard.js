import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: "50vh",
    textAlign: "center"
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 100
  }
});

export default function HasilCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <Typography variant="h5" component="h1">
          Ujian Selesai
        </Typography>
        <Typography variant="body2" component="p">
          40 daari 50 soal berhasil kamu jawab dengan benar. Terus tingkatkan!
        </Typography>
      </CardContent>
      <div className="">
        <CardActions>
          <Button size="large" variant="outlined">
            Dashboard
          </Button>
        </CardActions>
        <CardActions>
          <Button size="large" variant="outlined">
            Keluar
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
