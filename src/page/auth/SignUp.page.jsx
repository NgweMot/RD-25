import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSignUpMutation } from "../../store/service/endpoint/auth.endpoint";
const SignUpPage = () => {
  const [fun, data] = useSignUpMutation();
  console.log(data);
  const initialValue = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name should be at least 2 letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be 8 letters"),
    password_confirmation: yup
      .string()
      .required("Enter above password")
      .min(8, "Password should be 8 letters")
      .oneOf([yup.ref("password"), null], "Password must be same"),
  });
  const handleSubmit = async (value) => {
    // console.log(value);
    await fun(value);
  };
  return (
    <div className="w-3/5 h-screen mx-auto flex justify-center items-center">
      <Card className="basis-2/4 p-3">
        <CardHeader className="flex flex-row justify-between mb-5">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className=" text-blue-500">
            <Link to="/">Already have an account.</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ handleBlur, handleChange, values, isSubmitting }) => (
              <>
                <Form className="flex flex-col gap-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    type="text"
                    name="name"
                    id="name"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    component={"p"}
                    name="name"
                  />
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                    name="email"
                    id="email"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    component={"p"}
                    name="email"
                  />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    name="password"
                    id="password"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    component={"p"}
                    name="password"
                  />
                  <Label htmlFor="password_confirmation">
                    Password Confirmation
                  </Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password_confirmation}
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    component={"p"}
                    name="password_confirmation"
                  />

                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-blue-500 mt-5"
                  >
                    Sign Up{" "}
                    {isSubmitting && (
                      <Loader2 className="ms-2 h-4 w-4 animate-spin" />
                    )}
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
