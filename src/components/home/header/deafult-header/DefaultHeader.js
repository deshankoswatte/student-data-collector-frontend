import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logo from "../../../../assets/images/logo-dash.png";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    background: "blue"
  },
  image: {
    width: 50,
    height: 50
  },
  title: {
    display: "none",
    fontWeight: "bold",
    marginLeft: 1 + "em",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

export default function DefaultHeader() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img className={classes.image} src={Logo} alt="WSO2" />
          <Typography className={classes.title} variant="h6" noWrap>
            Student Management System
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
