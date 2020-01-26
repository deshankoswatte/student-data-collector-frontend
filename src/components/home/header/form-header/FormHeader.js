import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    background: "blue"
  }
}));

export default function FormHeader() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <ArrowBackIcon
            fontSize="large"
            onClick={() => history.push("/dashboard")}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
