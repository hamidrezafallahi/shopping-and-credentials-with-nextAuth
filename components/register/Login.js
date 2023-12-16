import { useFormik } from "formik";
import { signIn} from "next-auth/react";

function Login() {
  // ===============Login form validation by useFormik======================
  const form = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (Result.error) {
          console.log(result.error);
        }
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        setSubmitting(false);
      }, 4000);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = " fill email";
      } else if (values.email.length < 4) {
        errors.email = "it must be at least 4 characters ";
      }
      if (!values.password) {
        errors.password = " fill password";
      } else if (values.password.length < 4) {
        errors.password = "password must be at least 4 chars.";
      }
      return errors;
    },
  });
  return (
    <>
      <div className="tab-content">
        <div
          className="tab-panel "
          id="pills-login"
          >
          <form onSubmit={form.handleSubmit}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi-facebook"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className=" bi-twitter"></i>
              </button>
              <button
                type="button"
                className="btn btn-link btn-floating  mx-1  "
              >
                <i className="bi-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>


            <div className="form-outline mb-2">
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                {form.errors.email && form.touched.email && (
                  <span className="text-danger h6">{form.errors.email}</span>
                )}
              </div>

              <input
                data-name="email"
                name="email"
                type="text"
                id="email"
                autoComplete="on"
                className="form-control"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>

            <div className="form-outline mb-2 ">
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                {form.errors.password && form.touched.password && (
                  <span className="text-danger h6">{form.errors.password}</span>
                )}
              </div>

              <input
                data-name="password"
                name="password"
                type="password"
                id="password"
                className="form-control"
                autoComplete="on"
                value={form.values.password}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>

            <div className="row mb-2">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-1 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-2">
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
