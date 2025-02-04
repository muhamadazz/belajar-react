import React from "react";
import Button from "./components/Elements/Button/button";
import InputForm from "./components/Elements/Input";

function App(){
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, please enter your detail</p>
        <form action="">
          <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
          <InputForm label="Password" type="password" placeholder="******" name="password"></InputForm>
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App