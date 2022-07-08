import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({ loged, error, fetching, onLogin }) => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <>
      {!loged && (
        <Formik
          initialValues={initialCredentials}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            onLogin(values.email, values.password);
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@mail.com"
              />
              {errors.email && touched.email && (
                <ErrorMessage name="email" component="div" />
              )}
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="password"
              />
              {errors.password && touched.password && (
                <ErrorMessage name="password" component="div" />
              )}
              <button type="submit">Login</button>
              {fetching && <p>Loading...</p>}
              {error && <p>Usuario o contraseña incorrecto {error.status}</p>}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

Login.propTypes = {
  fetching: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  loged: PropTypes.bool.isRequired,
};

export default Login;
