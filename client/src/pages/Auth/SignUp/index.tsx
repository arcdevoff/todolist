import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import type { RegisterFormValues } from "@/@types/auth";
import { AuthService } from "@/api/services/auth.service";
import {
  setAccessToken,
  setUserDataRefresh,
} from "@/redux/reducers/user/slice";
import getApiMessage from "@/api/utils/getApiMessage";
import { useAppDispatch } from "@/redux/store";
import { setMessage } from "@/redux/reducers/ui/slice";
import { useAuth } from "@/hooks/useAuth";

const SignUpPage = () => {
  const { isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const initialValues: RegisterFormValues = {
    email: "",
    username: "",
    password: "",
  };

  const onSubmit = async (values: RegisterFormValues) => {
    AuthService.signup(values)
      .then((res) => {
        if (res.status === 201) {
          dispatch(setAccessToken(res.data.accessToken));
          dispatch(setUserDataRefresh(true));
          dispatch(setMessage({ text: "Successfully", status: true }));

          navigate("/");
        }
      })
      .catch((error) => {
        const msg = getApiMessage(error.response);

        if (msg) {
          dispatch(setMessage(msg));
        }
      });
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mt-10">
      <div className="mb-6 text-2xl font-bold text-center">Sign Up</div>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field
            required
            type="email"
            placeholder="Email"
            name="email"
            className="placeholder:text-lg text-lg bg-stone-900 focus:outline-2 focus:outline-none px-5 h-13 w-full rounded-2xl"
          />

          <Field
            required
            type="text"
            name="username"
            placeholder="Username"
            className="placeholder:text-lg text-lg mt-4 bg-stone-900 focus:outline-2 focus:outline-none px-5 h-13 w-full rounded-2xl"
          />

          <Field
            required
            name="password"
            type="password"
            placeholder="Password"
            className="placeholder:text-lg text-lg mt-4 bg-stone-900 focus:outline-2 focus:outline-none px-5 h-13 w-full rounded-2xl"
          />

          <button
            type="submit"
            className="text-lg cursor-pointer hover:bg-blue-400 transition-colors bg-blue-500 w-full h-12 rounded-2xl mt-7.5 font-bold"
          >
            Sign Up
          </button>
        </Form>
      </Formik>

      <div className="text-center mt-9 font-bold">
        Already a member? <Link to="/auth/login">Log in</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
