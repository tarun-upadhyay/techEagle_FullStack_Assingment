import React from "react";
import AuthenticationLayout from "../../Ui-Components/AuthenticationLayout";
import { useFormik } from "formik";
import { emailLogin } from "../../validator/user";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Auth/action";
import { Link } from "react-router-dom";
const initalState = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const storeContext = useSelector((store) => store.AuthReducer);

  console.log(storeContext);
  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  const formik = useFormik({
    initialValues: initalState,
    validationSchema: emailLogin,
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <AuthenticationLayout />
      <main className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <form onSubmit={formik.handleSubmit} className="mt-8 mb-24">
          {storeContext.isError && storeContext.isError ? (
            <span className="text-red-600 pl-2 text-sm font-extrabold">
              Please check Email and Password!!
            </span>
          ) : null}
          <div className="space-y-5 font-baijam font-bold">
            <div>
              <label
                htmlFor=""
                className="text-base word-spacing-2 text-gray-900"
              >
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2 ">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.email && formik.touched.email && (
                  <span className="text-red-600 pl-2 text-sm">
                    {formik.errors.email}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base word-spacing-2 text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
                <Link
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </Link>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.password && formik.touched.password && (
                  <span className="text-red-600 pl-2 text-sm">
                    {formik.errors.password}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={`inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80  ${
                  storeContext.isLoading
                    ? "bg-gray-600 cursor-not-allowed opacity-50"
                    : "bg-black"
                }`}
                disabled={storeContext.isLoading}
              >
                {storeContext.isLoading ? "Processing.." : "Login"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
