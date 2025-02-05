import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = ()=> {
    return(
        <AuthLayout title="Login">
            <FormLogin></FormLogin>
            <p className="text-sm mt-5 text-center">Don't have an Account?{" "}
                <Link to="/register" className="font-bold text-blue-600 hover:text-blue-800">
                    Sign Up
                </Link>
            </p>
        </AuthLayout>
    );
};

export default LoginPage;