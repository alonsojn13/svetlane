import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "./hooks/useAuth";

function Auth() {

  const [step, setStep] = useState(1);

  const {registerUser, loginUser} = useAuth();
  

 

  const onSubmit = (data) => {
    console.log(data);
    registerUser(data);
  };




   const schemaForm = z.object({
    email: z
    .string(),
    
    password: z
    .string(),

  })

    const {
    register: registerForm,
    handleSubmit,
    formState: { errors : errorsForm },
  } = useForm({
    resolver: zodResolver(schemaForm)
  });


  const { reset } = useForm();

  const clean = () => {
    reset({
      email: "nuevo@email.com",
      password: "Nuevo usuario",
    });
  };

  return (
    <div>
      <h1>You'll get it</h1>

      {step == 1 && (
        <div>
          <h1>Register</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="email" {...registerForm("email")} />
          {errorsForm.email && <p>Mensaje de error</p> }
        
            <input
              type="text"
              placeholder="password"
              {...registerForm("password")}
            />

            <button type="submit">Register</button>
            <button onClick={() => clean()}>Reset</button>
          </form>
        </div>
      )}

      {step == 2 && (
        <div>
          <h1>Login</h1>
        </div>
      )}
    </div>
  );
}

export default Auth;
