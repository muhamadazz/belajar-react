import InputForm from "../Elements/Input"
import Button from "../Elements/Button/button"


const FormLogin = () => {
    const handlelogin = () => {
        event.preventDefault()
        localStorage.setItem("email",event.target.email.value)
        localStorage.setItem("password",event.target.password.value)
        window.location.href = "/product"
    }
    return(
        <form onSubmit={handlelogin}>
         <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
         <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
         <Button classname="bg-blue-600 w-full" type = "submit">Login</Button>
        </form>
    )
}

export default FormLogin;
