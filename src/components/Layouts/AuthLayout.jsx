import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const {children, title, type} = props;
    return(
        <div className='flex justify-center min-h-screen items-center'>
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">Welcome, please enter your detail</p>
          {children}
          <Navigation type={type} />
        </div>
        </div>
    );
};

const Navigation = ({type}) => {
    if (type === 'login'){
        return(
            <p className="text-sm mt-5 text-center">Don't have an Account?{" "}
                <Link to="/register" className="font-bold text-blue-600 hover:text-blue-800">
                register
                </Link>
            </p>
        );
    }else{
        return(
            <p className="text-sm mt-5 text-center">Already have an Account?{" "}
                <Link to="/login" className="font-bold text-blue-600 hover:text-blue-800">
                login
                </Link>
            </p>
        );
    }
}
export default AuthLayout;