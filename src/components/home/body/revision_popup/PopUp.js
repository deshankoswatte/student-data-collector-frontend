import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function onClickProcess(studentId, fullName, age, address) {
  // axios
  //   .put("http://localhost:9090/student/updateStudent/", {
  //     student: {
  //       id: parseInt(studentId),
  //       fullName: fullName,
  //       age: parseInt(age),
  //       address: address
  //     }
  //   })
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
}

export default function PopUp() {
  const [open, setOpen] = React.useState(false);
  const [studentId, setStudentId] = React.useState();
  const [fullName, setFullName] = React.useState();
  const [age, setAge] = React.useState();
  const [address, setAddress] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit a Student</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
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
            autoFocus
            margin="dense"
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
            autoFocus
            margin="dense"
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
            autoFocus
            margin="dense"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            // onClick={() => {
            //   onClickProcess(studentId, fullName, age, address);
            // }}
            // color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
