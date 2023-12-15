import * as Yup from "yup";

export const emailLogin = Yup.object({
  password: Yup.string().min(6).required("Please enter your password"),
  email: Yup.string().email().required("Please enter your email"),
});

export const emailSignup = Yup.object({
  name: Yup.string().min(3).max(50).required("Please enter your name"),
  phone: Yup.string()
    .typeError("That doesn't look like a phone number")
    .min(10)
    .max(14)
    .required("A phone number is required"),
  password: Yup.string().min(6).required("Please enter your password"),
  email: Yup.string().email().required("Please enter your email"),
  address: Yup.string().min(2).required("Please provide your address"),
});
