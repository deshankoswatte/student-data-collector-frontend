import React, { useState, Fragment } from "react";
import {
  CssBaseline,
  Avatar,
  Typography,
  Container,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  makeStyles
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FormHeader from "../../header/form-header/FormHeader";

const styles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "blue"
  },
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  checkbox: {
    color: "blue"
  },
  button: {
    fontSize: 13,
    backgroundColor: "blue",
    color: "white",
    "&:hover": {
      backgroundColor: "#000066"
    }
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Student Data Collector
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function onStudentRegistration(studentId, fullName, age, address, history) {
  axios
    .post("http://localhost:9090/student/insertStudent", {
      student: {
        id: parseInt(studentId),
        fullName: fullName,
        age: parseInt(age),
        address: address
      }
    })
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        alert("Student was inserted successfully!!!");
        history.push("/dashboard");
      } else {
        alert("Student was not inserted successfully!!!");
      }
    })
    .catch(error => {
      console.log(error);
      alert("Student was not inserted successfully!!!");
    });
}

function StudentForm() {
  const classes = styles();

  const [studentId, setStudentId] = useState();
  const [fullName, setFullName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const history = useHistory();
  return (
    <Fragment>
      <FormHeader />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.root}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Registration Form
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              id="studentId"
              name="studentId"
              label="Student ID"
              placeholder="Id of the Student"
              onChange={e => setStudentId(e.target.value || "")}
              value={studentId || ""}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="FullName of the Student"
              onChange={e => setFullName(e.target.value || "")}
              value={fullName || ""}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="age"
              name="age"
              label="Age"
              placeholder="Age of the Student"
              onChange={e => setAge(e.target.value || "")}
              value={age || ""}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="address"
              name="address"
              label="Address"
              placeholder="Address"
              onChange={e => setAddress(e.target.value || "")}
              value={address || ""}
              fullWidth
            />
            <FormControlLabel
              control={
                <Checkbox value="remember" className={classes.checkbox} />
              }
              label="I agree to the Terms and Conditions"
            />
            <br />
            <br />
            <Button
              className={classes.button}
              fullWidth
              onClick={() => {
                onStudentRegistration(
                  studentId,
                  fullName,
                  age,
                  address,
                  history
                );
              }}
            >
              Add Student
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Fragment>
  );
}

export default StudentForm;
