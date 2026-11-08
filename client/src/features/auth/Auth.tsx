import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "./hooks/useAuth";

function Auth() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step+1);
  const backStep = () => { if (step > 1) {setStep(step-1);}} 


  const { 
    registerUser, 
    loginUser,
    loginData } = useAuth();

  const registerSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  });

  const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  // Create the form with their schema.
  const registerForm = useForm({ resolver: zodResolver(registerSchema) });
  const loginForm = useForm({ resolver: zodResolver(loginSchema) });

  // Assign to each form their field, btns, errors.
  const {
    register: loginField,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = loginForm;
  const {
    register: registerField,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = registerForm;

  //
  const sendFormLogin = (data) => {
    loginUser(data);
  };

  const sendFormRegister = (data) => {
    loginUser(data);
  };


  console.log(loginData)

  return (
    <div>
      <h1>You'll get it</h1>

      {step == 1 && (
        <div>
          <h1>Register</h1>

          <form onSubmit={handleRegisterSubmit(sendFormRegister)}>
            <input type="text" placeholder="name" {...registerField("name")} />
            {registerErrors.name && <p>Mensaje de error</p>}

            <input type="text" placeholder="email" {...registerField("email")} />
            {registerErrors.email && <p>Mensaje de error</p>}

            <input
              type="text"
              placeholder="password"
              {...registerField("password")}
            />

            <button type="submit">Register</button>
            <button type="reset">Reset</button>
          </form>

                <button onClick={nextStep}>Login</button>

        </div>
      )}

      {step == 2 && (
        <div>
          <h1>Login</h1>

          <form onSubmit={handleLoginSubmit(sendFormLogin)}>
            <input type="text" placeholder="email" {...loginField("email")} />
            {loginErrors.email && <p>Mensaje de error</p>}

            <input
              type="text"
              placeholder="password"
              {...loginField("password")}
            />
            {loginErrors.password && <p>Mensaje de error</p>}

            <button type="submit">Login</button>
            <button type="reset">Reset</button>
          </form>
          <button onClick={backStep}>Register</button>
        </div>
      )}

    </div>
  );
}

export default Auth;
