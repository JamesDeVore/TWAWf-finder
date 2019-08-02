import React from "react";
import SelectButtons from "./answerTypes/Select";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  answerButton: {
    textDecoration: "none",
    padding: 8,
    backgroundColor: "#552564",
    color: "white",
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  },
  image:{
    maxHeight:250,
    maxWidth:250
  },
  answers:{
    margin:16
  },
  root:{
    height:'75vh'
    }
}));

//given a question object, just render the question
export default function Question(props) {
  let {
    question: { text, answers, category, type, image, subtext },
    number
  } = props;
  const classes = useStyles();

  const allAnswers = () => {
    if (type === "select") {
      return <SelectButtons question={props.question} answer={props.answer} />;
    } else {
      return answers.map((answer,index) => (
        <Grid item xs={Math.floor(12/answers.length)}>
          <Button
            className={classes.answerButton}
            onClick={() => {
              props.answer(answer.value, category);
            }}
          >
            {answer.text}
          </Button>
        </Grid>
      ));
    }
  };
  return (
    <Grid className={classes.root} container direction="row" justify='space-around' alignItems="center">
      <Grid item xs={12}>
        <Typography gutterBottom variant="h2">
          Question #{number + 1}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography gutterBottom variant="h4">{text}</Typography>
        <Typography variant="subtitle1">{subtext}</Typography>
      </Grid>
      <Grid item xs={4}>
        <img src={image} className={classes.image} />
      </Grid>
      <Grid item className={classes.answers} wrap='no-wrap' container justify="flex-start" item xs={10}>
        {allAnswers()}
      </Grid>
    </Grid>
  );
}

/*=====================================================

    <div className="row justify-content-center questionBox questionBox-before">
      <div className="col-10 questionTitle">
        <h1>Question #{number + 1}</h1>
      </div>
      <div className="col-6 questionText">
        <h3 className="questionMainText">{text}</h3>
        <p className="questionSubtext">{subtext}</p>
      </div>
      <div className="col-4">
        <img className="questionImg" src={image} />
      </div>
      <div className="col-md-8 answersDiv">{allAnswers()}</div>
    </div>
  
=====================================================*/