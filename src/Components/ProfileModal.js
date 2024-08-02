import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputFileUpload from "./UploadBtn";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClearIcon from "@mui/icons-material/Clear";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberPattern = /^\d{10}$/;
  const age = /^\d{3}$/;
  const profileSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "please enter atleast more than 3 character !")
      .max(50, "Maxium 50  character is allow only!")
      .required(" Name is required"),

    email: Yup.string()
      .matches(emailPattern, "Invalid email format") // Custom pattern validation
      .required("Email is required"),

    phone: Yup.string()
      .matches(phoneNumberPattern, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),

    age: Yup.string()
    .required("Age is required"),
  });

  const initialValues = {
    name: "",
    age: "",
    email: "",
    profileimg: "",
    phone: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    // enableReinitialize: true,
    validationSchema: profileSchema,
    onSubmit: (values) => {
      console.log("submit", values);
      props.handleClose();
    },
  });

  const clearimg = () => {
    setFieldValue("profileimg", "");
  };

  const { handleChange, errors, handleSubmit, touched, setFieldValue } = formik;

  console.log("values", formik.values);
  console.log("error", errors);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => props.handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Profile Section"}</DialogTitle>
        <DialogContent style={{ overflowX: "hidden" }}>
          <div className=" w-[500px]  h-[70vh] space-y-3  mx-2 ">
            <form onSubmit={handleSubmit}>
              <div className="mx-3 space-y-1">
                <label>Name</label>
                <input
                  className=" p-2 w-full  outline-slate-900  border block  border-slate-800 "
                  type="text"
                  onChange={handleChange}
                  name="name"
                  value={formik.values.name}
                />
                <div>
                  {errors.name && touched.name && (
                    <p className="text-xs text-red-500 mt-1 ">{errors.name}</p>
                  )}
                </div>
              </div>

              <div className="mx-3 space-y-1">
                <label>Email</label>
                <input
                  className=" p-2 w-full  outline-slate-900  border block  border-slate-800 "
                  type="text"
                  onChange={handleChange}
                  name="email"
                  value={formik.values.email}
                />
                <div>
                  {errors.email && touched.email && (
                    <p className="text-xs text-red-500 mt-1 ">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mx-3 space-y-1">
                <label>Contact Number</label>
                <input
                  className=" p-2 w-full  outline-slate-900  border block  border-slate-800 "
                  type="text"
                  onChange={(e) => {
                    e.target.value.length <= 10 &&
                      setFieldValue("phone", e.target.value);
                  }}
                  name="phone"
                  value={formik.values.phone}
                />
                <div>
                  {errors.phone && touched.phone && (
                    <p className="text-xs text-red-500 mt-1 ">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mx-3 space-y-1">
                <label>Age</label>
                <input
                  className=" p-2 w-full  outline-slate-900  border block  border-slate-800 "
                  type="text"
                  onChange={(e) => {
                    e.target.value.length <= 3 &&
                      setFieldValue("age", e.target.value);
                  }}
                  name="age"
                  value={formik.values.age}
                />
                <div>
                  {errors.age && touched.age && (
                    <p className="text-xs text-red-500 mt-1 ">{errors.age}</p>
                  )}
                </div>
              </div>

              <div className="mx-3 space-y-1  border p-1 ">
                <label>Upload profile </label>
                <div>
                  <InputFileUpload formik={formik} />

                  {formik.values.profileimg.length > 0 && (
                    <ClearIcon onClick={clearimg} />
                  )}
                </div>

                <div>
                  {errors.profileimg && touched.profileimg && (
                    <p className="text-xs text-red-500 mt-1 ">
                      {errors.profileimg}
                    </p>
                  )}
                </div>

                {formik.values.profileimg.length > 0 && (
                  <div>
                    <img
                      src={formik.values.profileimg}
                      className="w-[200px] h-[200px]"
                    />
                  </div>
                )}
              </div>

              <DialogActions>
                <Button
                  type="button"
                  style={{ color: "#0c2439" }}
                  onClick={props.handleClose}
                >
                  Cancel
                </Button>
                <Button type="submit" style={{ color: "#0c2439" }}>
                  Save
                </Button>
              </DialogActions>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
