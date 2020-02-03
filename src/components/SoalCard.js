import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "70vh",
    borderRadius: "25px 25px 0 0"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 10
  },

  pos: {
    marginBottom: 12
  }
});

function SoalCard() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            SOAL
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            totam repellat quisquam voluptate eveniet accusamus, saepe neque
            enim velit, consequatur harum tenetur ipsa perferendis ipsum vel
            architecto corporis eos earum odio cumque quia, nisi ut sint quasi.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Learn More</Button>
        </CardActions>
        <CardActions>
          <Button size="medium">Learn More</Button>
        </CardActions>
        <CardActions>
          <Button size="medium">Learn More</Button>
        </CardActions>
        <CardActions>
          <Button size="medium">Learn More</Button>
        </CardActions>
        <CardActions>
          <Button size="medium">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SoalCard;
