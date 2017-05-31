import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import green from "./../green.png";
import red from "./../red.png";
import orange from "./../orange.png";
import PropTypes from "prop-types";

function calculate(props) {
  const { bads, maybes } = props;
  if (bads !== 0 && bads < 2) {
    return "vous devriez contacter le 3977.";
  } else if (bads >= 2) {
    return "aucune hésitation, contactez le 3977.";
  } else if (bads === 0 && maybes !== 0) {
    return "vous avez des doutes ? Parlons-en ! Contactez le 3977.";
  } else if (bads === 0 && maybes === 0) {
    return "nous n'avons pas pu détecter de signaux d'alerte; néanmoins si vos doutes persistent, n'hésitez pas à contacter le 3977.";
  }
}

function Result(props) {
  const message = calculate(props);
  const redsigs = `${props.bads} signaux rouges`;
  const orangesigs = `${props.maybes} signaux oranges`;
  const greensigs = `${props.goods} signaux verts`;
  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <List style={{ textAlign: "left" }}>
        <Subheader>
          BILAN DE VOTRE TEST "{props.whatTest.toUpperCase()}" :
        </Subheader>
        <ListItem
          primaryText={redsigs}
          leftAvatar={
            <img
              src={red}
              style={{ marginTop: 4, width: 30, height: 30, borderRadius: 15 }}
              alt="Signal rouge"
            />
          }
        />
        <ListItem
          primaryText={orangesigs}
          leftAvatar={
            <img
              src={orange}
              style={{ marginTop: 4, width: 30, height: 30, borderRadius: 15 }}
              alt="Signal orange"
            />
          }
        />
        <ListItem
          primaryText={greensigs}
          leftAvatar={
            <img
              src={green}
              style={{ marginTop: 4, width: 30, height: 30, borderRadius: 15 }}
              alt="Signal vert"
            />
          }
        />
      </List>
      <div style={{ marginTop: 40 }} />
      <strong>Notre conseil : {message}</strong>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
