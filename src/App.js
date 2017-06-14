import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import QuizzPatient from "./quizz_patient";
import QuizzAidant from "./quizz_aidant";
import Paper from "material-ui/Paper";
import { Tabs, Tab } from "material-ui/Tabs";
import "./App.css";

injectTapEventPlugin();

const style = {
  height: 700,
  margin: 10
};

function App(props) {
  return (
    <div className="App">
      <Paper style={style} zDepth={2}>
        <div className="App-header">
          <h2>Evaluer les signaux d'alerte</h2>
        </div>
        <Tabs>
          <Tab label="Personne aidée">
            <QuizzPatient />
          </Tab>
          <Tab label="Aidant principal">
            <QuizzAidant />
          </Tab>
        </Tabs>
      </Paper>
    </div>
  );
}

export default App;
