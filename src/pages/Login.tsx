import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  console.log("email", email);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Login form submitted");

    const stotedUser = localStorage.getItem("user");

    if(stotedUser){
      const {email: storedEmail, password: storePassword } = JSON.parse(stotedUser)

      if(email === storedEmail && password === storePassword){
        console.log ('login sukses')
        localStorage.setItem('token',"NANTI AKAN DIISI OLEH TOKEN")
        navigate('/products')
      } else {
        console.log('invalid email or password')
        alert('invalid email of password')
      }
    } else {
      const newUser = {email, password}
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("token", "NANTI AKAN DIISSI OLEH TOKEN");
      console.log("user sukses register");
      navigate("/products")
      
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-900">
    <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold text-white text-center">
            Login
      </h2>
      <p className="text-center text-gray-300">Please sign in to continue</p>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}/>
          <div>
            <Link to={"/auth/signup"}>Sign Up</Link>
          </div>
          
      </div>
    </div>
  );
}

export default Login;