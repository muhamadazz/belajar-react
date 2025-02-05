import InputForm from "../Elements/Input"
import Button from "../Elements/Button/button"


const FormRegister = () => {
    return(
        <form action="">
         <InputForm label="fullname" type="text" placeholder="enter your fullname..." name="fullname"></InputForm>
         <InputForm label="email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
         <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
         <InputForm label="Confirm Password" type="password" placeholder="******" name="Confirm password"></InputForm>
         <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister;
