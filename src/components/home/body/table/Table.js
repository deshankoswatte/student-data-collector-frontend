import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DefaultHeader from "../../header/deafult-header/DefaultHeader";
import PopUp from "../revision_popup/PopUp";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    width: "75%"
  },
  insertion_button: {
    float: "right",
    marginBottom: "1%"
  },
  table: {
    minWidth: 650
  },
  header: {
    fontSize: 18
  },
  row: {
    fontWeight: "bold",
    fontSize: 15
  }
}));

function onStudentExcise(studentId) {
  axios
    .delete("http://localhost:9090/student/deleteStudent/" + studentId)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

export default function AcccessibleTable() {
  const classes = useStyles();
  const history = useHistory();

  const [hasError, setErrors] = useState(false);
  const [students, setStudents] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleAlertOpen = () => {
    setAlertOpen(true);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  async function fetchData() {
    const response = await fetch(
      "http://localhost:9090/student/getAllStudents"
    );
    response
      .json()
      .then(response => setStudents(response))
      .catch(error => setErrors(error));
    console.log(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <DefaultHeader />
      <Grid container justify="center">
        <div className={classes.root}>
          <AddCircleOutlineIcon
            fontSize="large"
            className={classes.insertion_button}
            onClick={() => {
              history.push("/registration");
            }}
          />
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
              <caption>
                Displays all the student records persisted in the database.
              </caption>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.header} align="left">
                    Student ID
                  </TableCell>
                  <TableCell className={classes.header} align="left">
                    Full Name
                  </TableCell>
                  <TableCell className={classes.header} align="left">
                    Age
                  </TableCell>
                  <TableCell className={classes.header} align="left">
                    Address
                  </TableCell>
                  <TableCell className={classes.header} align="left">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map(row => (
                  <TableRow key={row.id}>
                    <TableCell className={classes.row} align="left">
                      {row.id}
                    </TableCell>
                    <TableCell className={classes.row} align="left">
                      {row.fullName}
                    </TableCell>
                    <TableCell className={classes.row} align="left">
                      {row.age}
                    </TableCell>
                    <TableCell className={classes.row} align="left">
                      {row.address}
                    </TableCell>
                    <TableCell className={classes.row} align="left">
                      <EditIcon />
                      <DeleteIcon
                        style={{ marginLeft: 20 }}
                        onClick={handleAlertOpen}
                      />
                      <Dialog
                        open={alertOpen}
                        onClose={handleAlertClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Delete the specified student?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete the student with the
                            student id: {row.id}?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleAlertClose} color="primary">
                            Cancel
                          </Button>
                          <Button
                            onClick={() => {
                              onStudentExcise(row.id);
                              handleAlertClose();
                            }}
                            color="primary"
                            autoFocus
                          >
                            Yes
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
    </Fragment>
  );
}
