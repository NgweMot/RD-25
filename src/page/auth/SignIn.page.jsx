import React, { useEffect } from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "../../components/ui/card";
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import {Label} from "../../components/ui/label";
import {Form, Formik, ErrorMessage} from "formik";
import * as yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import {Loader2} from "lucide-react";
import {useSignInMutation} from "../../store/service/endpoint/auth.endpoint";
import AuthGuard from "../../components/ui/guard/Auth.guard";
const SignInPage = () => {
    const [fun, data] = useSignInMutation();
    const nav = useNavigate();
    console.log(data);
    const initialValue = {
        email: "",
        password: "",
    };
    const validationSchema = yup.object({
        email: yup.string().required("Email is required").email("Invalid Email Format"),
        password: yup.string().required("Password is required").min(8, "Password should be 8 letters"),
    });
    const handleSubmit = async (value, action) => {
        // console.log(value);
        await fun(value);

        nav("/home");
    };
    useEffect(() => {
        if (data?.data?.success) {
            nav("/home");
        }
    }, [data]);
    return (
        <AuthGuard check={data?.data?.success} token={data?.data?.token}>
            <div className="w-3/5 h-screen mx-auto flex justify-center items-center">
                <Card className="basis-2/4 p-3">
                    <CardHeader className="flex flex-row justify-between mb-5">
                        <CardTitle>Sign In</CardTitle>
                        <CardDescription className=" text-blue-500">
                            <Link to="/sign_up"> You don't have an account</Link>
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
                            {({handleBlur, handleChange, values, isSubmitting}) => (
                                <>
                                    <Form className="flex flex-col gap-4">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.email}
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                        <ErrorMessage className="text-red-500" component={"p"} name="email" />
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.password}
                                            type="password"
                                            name="password"
                                            id="password"
                                        />
                                        <ErrorMessage className="text-red-500" component={"p"} name="password" />

                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full bg-blue-500 mt-5"
                                        >
                                            Sign In {isSubmitting && <Loader2 className="ms-2 h-4 w-4 animate-spin" />}
                                        </Button>
                                    </Form>
                                </>
                            )}
                        </Formik>
                    </CardContent>
                </Card>
            </div>
        </AuthGuard>
    );
};

export default SignInPage;
