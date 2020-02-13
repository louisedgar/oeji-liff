import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SoalChoice from "./SoalChoice";
import "./SoalCard.css";
import LeftArrowSwap from "./LeftArrow";
import RightArrowSwap from "./RightArrow";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    borderRadius: "15px 15px 0 0",
    fontSize: "12px"
  }
});

function SoalCardTwo(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className="sub-title" gutterBottom>
          <span
            style={{
              fontWeight: "bolder",
              fontSize: "12px",
              letterSpacing: "2px"
            }}
          >
            SOAL
          </span>
        </Typography>
        <div className="question">
          <Typography variant="body2" component="p" className={classes.body}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            enim, aperiam hic id atque quasi? Temporibus, perspiciatis. Laborum
            ea cumque alias facere, suscipit temporibus iusto sed officiis
            quibusdam autem ipsum, accusamus aliquam a ex quisquam amet
            excepturi ut voluptatum consectetur cupiditate, minus quis iste non!
            Rem debitis voluptate nemo eius illo ad earum impedit. Molestias,
            odio. Enim autem, consequuntur ducimus, ratione odio dolore, minima
            illum amet odit assumenda non quam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptatum quaerat consequuntur quo
            consequatur nam hic quod minima numquam nisi. Doloribus esse
            expedita dolore, veniam possimus distinctio dolores architecto,
            voluptatem eius voluptates, provident ea eos suscipit quisquam
            excepturi porro. Libero eum consectetur recusandae quas? Laboriosam
            perspiciatis, dolor eos modi impedit ea provident quae fugit
            repellat id quasi natus, placeat laudantium voluptate explicabo!
            Deleniti consequuntur sint beatae commodi necessitatibus recusandae
            rem ratione.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio
            sunt corporis vitae quia sit ipsum hic temporibus nulla pariatur,
            doloremque modi qui delectus necessitatibus eligendi. Consectetur a
            incidunt atque nesciunt reprehenderit excepturi quas adipisci quae
            maxime dolores odio earum, numquam cupiditate nulla iusto aliquam,
            eaque placeat ad! Vitae delectus quae eum eius adipisci deserunt
            sequi ipsa totam aspernatur, excepturi cum ad, nesciunt ipsam
            reiciendis ducimus? Cumque ducimus nemo rem?
          </Typography>
        </div>
      </CardContent>
      <div className="choice">
        <span style={{ color: "#0074e1" }}>PILIH JAWABAN</span>
        <div className="choice-list">
          <SoalChoice handleChoice={props.handleChoice} />
        </div>
      </div>
      <div className="swap-arrow">
        <LeftArrowSwap />
        <RightArrowSwap />
      </div>
    </Card>
  );
}

export default SoalCardTwo;
