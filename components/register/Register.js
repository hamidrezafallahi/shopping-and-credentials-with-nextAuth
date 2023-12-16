import React from 'react'
import { useFormik } from "formik";
import bcrypt from 'bcryptjs'
export default function Register() {
  // form validation with useFormik    //
  const Registerform = useFormik({
    initialValues: {
      registerName: "",
      registerisAdmin: false,
      registerPassword: "",
      registerRepeatPassword: "",
      registerEmail: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      const submitValues = {
        name: values.registerName,
        email: values.registerEmail,
        password: values.registerPassword,
        isAdmin: values.registerisAdmin,
      };
      async function RegisterHandler() {
        await fetch('./api/users'
        , {
          method: 'POST',
          body: JSON.stringify({
              name:submitValues.name,
              email:submitValues.email,
              password:bcrypt.hashSync(`${submitValues.password}`),
              isAdmin:submitValues.isAdmin,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
        )
      }
      RegisterHandler()

      setTimeout(() => {
        setSubmitting(false);
      }, 4000);
    },
    validate: (values) => {
      const errors = {};
      if (!values.registerName) {
        errors.registerName = " fill registerName";
      } else if (values.registerName.length < 4) {
        errors.registerName = "it must be at least 4 characters ";
      }
      if (!values.registerPassword) {
        errors.registerPassword = " fill registerPassword";
      } else if (values.registerPassword.length < 4) {
        errors.registerPassword = "registerPassword must be at least 4 chars.";
      }

      if (!values.registerEmail) {
        errors.registerEmail = " fill registerEmail";
      } else if (values.registerEmail.length < 4) {
        errors.registerEmail = "registerEmail must be at least 4 chars.";
      }

      if (!values.registerRepeatPassword) {
        errors.registerRepeatPassword = " fill registerRepeatPassword";
      } else if (values.registerRepeatPassword.length < 4) {
        errors.registerRepeatPassword =
          "registerRepeatPassword must be at least 4 chars.";
      }
      return errors;
    },
  });
  return (
    <>
      <div
        className='tab-panel '
        id="pills-register"
        role="tabpanel"
        aria-labelledby="tab-register"
      >
        <form onSubmit={Registerform.handleSubmit}>
          {/* =======================THIRD PARTY AUTHANTICATIONS=========================== */}

          <div className="text-center mb-1">
            <p>Sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="bi-facebook"></i>
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="bi-google"></i>
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="bi-twitter"></i>
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1 ">
              <i className="bi-github"></i>
            </button>
          </div>
          <p className="text-center">or:</p>
          {/* =======================Register form=========================== */}

          <div className="form-outline mb-1">
            <div className="d-flex justify-content-between">
              <label className="form-label" htmlFor="registerName">
                Name
              </label>
              {Registerform.errors.registerName &&
                Registerform.touched.registerName && (
                  <span className=" text-danger h6 ">
                    {Registerform.errors.registerName}
                  </span>
                )}
            </div>
            <input
              data-name="registerName"
              name="registerName"
              type="text"
              id="registerName"
              className="form-control"
              value={Registerform.values.registerName}
              onChange={Registerform.handleChange}
              onBlur={Registerform.handleBlur}
            />
          </div>

          <div className="form-outline mb-1">
            <div className="d-flex justify-content-between">
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
              {Registerform.errors.registerEmail &&
                Registerform.touched.registerEmail && (
                  <span className="text-danger h6">
                    {Registerform.errors.registerEmail}
                  </span>
                )}
            </div>
            <input
              type="email"
              data-name="registerEmail"
              name="registerEmail"
              id="registerEmail"
              className="form-control"
              value={Registerform.values.registerEmail}
              onChange={Registerform.handleChange}
              onBlur={Registerform.handleBlur}
            />
          </div>
          <div className="form-outline mb-1">
            <div className="d-flex justify-content-between">
              <label className="form-label" htmlFor="registerPassword">
                Password
              </label>
              {Registerform.errors.registerPassword &&
                Registerform.touched.registerPassword && (
                  <span className="text-danger h6">
                    {Registerform.errors.registerPassword}
                  </span>
                )}
            </div>
            <input
              type="password"
              data-name="registerPassword"
              name="registerPassword"
              id="registerPassword"
              className="form-control"
              value={Registerform.values.registerPassword}
              onChange={Registerform.handleChange}
              onBlur={Registerform.handleBlur}
            />
          </div>
          <div className="form-outline mb-1">
            <div className="d-flex justify-content-between ">
              <label className="form-label" htmlFor="registerRepeatPassword">
                Repeat password
              </label>
              {Registerform.errors.registerRepeatPassword &&
                Registerform.touched.registerRepeatPassword && (
                  <span className="text-danger h6">
                    {Registerform.errors.registerRepeatPassword}
                  </span>
                )}
            </div>
            <input
              type="password"
              data-name="registerRepeatPassword"
              name="registerRepeatPassword"
              id="registerRepeatPassword"
              className="form-control"
              value={Registerform.values.registerRepeatPassword}
              onChange={Registerform.handleChange}
              onBlur={Registerform.handleBlur}
            />
          </div>
          <div className="form-outline mb-1">
            <input
              type="checkbox"
              data-name="registerisAdmin"
              name="registerisAdmin"
              id="registerisAdmin"
              className="form-check-input"
              value={Registerform.values.registerisAdmin}
              onChange={Registerform.handleChange}
            />
            <div className="d-inline justify-content-between px-2">
              <label className="form-label" htmlFor="registerUsername">
                register as teacher
              </label>
            </div>
          </div>
          <div className="form-check d-flex justify-content-center mb-1">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="registerCheck"
              aria-describedby="registerCheckHelpText"
            />
            <label className="form-check-label" htmlFor="registerCheck">
              I have read and agree to the terms
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-1">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

