// import React from "react";
// import { Button, Checkbox, Form } from "semantic-ui-react";
// import axios from "axios";
// import { form } from "./Form.css";
// import FormHeader from "../../header/form-header/FormHeader";

// export default class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: "",
//       fullName: "",
//       age: "",
//       address: ""
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     console.log(this.state);
//     event.preventDefault();

//     axios
//       .post("http://localhost:9090/student/insertStudent", {
//         student: {
//           id: parseInt(this.state.id),
//           fullName: this.state.fullName,
//           age: parseInt(this.state.age),
//           address: this.state.address
//         }
//       })
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <FormHeader />
//         <div className={form}>
//           <h1>{this.props.heading}</h1>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Field>
//               <label>Student Id</label>
//               <input
//                 id="id"
//                 name="id"
//                 value={this.state.id}
//                 placeholder="Id of the Student"
//                 onChange={this.handleInputChange}
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>FullName</label>
//               <input
//                 id="fullName"
//                 name="fullName"
//                 value={this.state.fullName}
//                 placeholder="FullName of the Student"
//                 onChange={this.handleInputChange}
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>Age</label>
//               <input
//                 id="age"
//                 name="age"
//                 value={this.state.age}
//                 placeholder="Age of the Student"
//                 onChange={this.handleInputChange}
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>Address</label>
//               <input
//                 id="address"
//                 name="address"
//                 value={this.state.address}
//                 placeholder="Address of the Student"
//                 onChange={this.handleInputChange}
//               />
//             </Form.Field>
//             <Form.Field>
//               <Checkbox label="I agree to the Terms and Conditions" />
//             </Form.Field>
//             <Button type="submit" value="Add Student">
//               Submit
//             </Button>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }

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

function onClickProcess(studentId, fullName, age, address) {
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
    })
    .catch(error => {
      console.log(error);
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
                onClickProcess(studentId, fullName, age, address);
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
