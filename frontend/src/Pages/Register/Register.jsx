import React from "react";
import AuthenticationLayout from "../../Ui-Components/AuthenticationLayout";
import { useFormik } from "formik";
import { emailSignup } from "../../validator/user";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Auth/action";
import { useNavigate } from "react-router-dom";

const initalState = {
  naem: "",
  phone: "",
  email: "",
  address: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const storeContext = useSelector((store) => store.AuthReducer);
  const navigate = useNavigate();
  console.log(storeContext);
  const handleSubmit = (values) => {
    dispatch(register(values));
    if (storeContext.isAuth) navigate("/");
  };
  const formik = useFormik({
    initialValues: initalState,
    validationSchema: emailSignup,
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <AuthenticationLayout />
      <main className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <form onSubmit={formik.handleSubmit} className="mt-8 mb-24">
          {storeContext.isError && storeContext.isError ? (
            <span className="text-red-600 pl-2 text-sm font-extrabold">
              {storeContext.errorMessage}
            </span>
          ) : null}
          <div className="space-y-5 font-baijam font-bold">
            <div>
              <label
                htmlFor=""
                className="text-base word-spacing-2 text-gray-900"
              >
                {" "}
                Name{" "}
              </label>
              <div className="mt-2 ">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="name"
                  placeholder="Enter your name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.name && formik.touched.name && (
                  <span className="text-red-600 pl-2 text-sm">
                    {formik.errors.name}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-base word-spacing-2 text-gray-900"
              >
                {" "}
                Phone Number{" "}
              </label>
              <div className="mt-2 ">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="phone"
                  placeholder="Enter your phone no."
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.phone && formik.touched.phone && (
                  <span className="text-red-600 pl-2 text-sm">
                    {formik.errors.phone}
                  </span>
                )}
              </div>
            </div>
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base word-spacing-2 text-gray-900"
                >
                  {" "}
                  Address{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="address"
                  placeholder="Enter your address"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.address && formik.touched.address && (
                  <span className="text-red-600 pl-2 text-sm">
                    {formik.errors.address}
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
                {storeContext.isLoading ? "Processing.." : "Register"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
