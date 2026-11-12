import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "./hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Auth() {
  const [step, setStep] = useState(1);
  const { loginUser } = useAuth();

  // Helper Functions
  
  const nextStep = () => setStep(step + 1);
  const backStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


  // Schemas:

  const registerSchema = z.object({
    name: z.string(),
    lastname: z.string(),
    email: z.string(),
    password: z.string(),
  });

  const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
  });


  // Forms with schema:
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

  const sendFormLogin = (data) => {
    loginUser(data);
  };

  const sendFormRegister = (data) => {
    loginUser(data);
  };

  return (
    <div className="flex min-h-dvh flex-col m-4 ">
      <header className="flex justify-between mb-6">
        <h2>Verstane</h2>
      </header>

      <div className="flex-1">
        {step == 1 && (
          <form onSubmit={handleLoginSubmit(sendFormLogin)}>
            <Card>
              <CardHeader>
                <CardTitle>I was waiting you.</CardTitle>
                <CardDescription>...</CardDescription>
                <CardAction onClick={nextStep}>Sign up</CardAction>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      type="text"
                      placeholder="jane@example.com"
                      {...loginField("email")}
                    />
                    {loginErrors.email && <p>Mensaje de error</p>}
                  </div>

                  <div className="grid gap-2">
                    <div className="flex justify-between items-center">
                      <Label>Password</Label>
                      <a href="">Forgot your password?</a>
                    </div>
                    <Input
                      type="text"
                      placeholder="***********"
                      {...loginField("password")}
                    />
                    {loginErrors.password && <p>Mensaje de error</p>}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" size="lg" className={"w-full"}>
                  Login
                </Button>
                <Button
                  variant="outline"
                  type="submit"
                  size="lg"
                  className={"w-full"}
                >
                  Login with Google
                </Button>
              </CardFooter>
            </Card>
          </form>
        )}

        {step == 2 && (
          <div>
            <form onSubmit={handleRegisterSubmit(sendFormRegister)}>
              <Card>
                <CardHeader>
                  <CardTitle>Starts the Adventure.</CardTitle>
                  <CardDescription>See.</CardDescription>
                  <CardAction onClick={backStep}>Log in</CardAction>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                      <div className="grid gap-2">
                        <Label>Name</Label>
                        <Input
                          type="text"
                          placeholder="Jane"
                          {...registerField("name")}
                        />
                        {registerErrors.email && <p>Mensaje de error</p>}
                      </div>

                      <div className="grid gap-2">
                        <Label>Lastname</Label>
                        <Input
                          type="text"
                          placeholder="Ross"
                          {...registerField("lastname")}
                        />
                        {registerErrors.email && <p>Mensaje de error</p>}
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label>Email</Label>
                      <Input
                        type="text"
                        placeholder="jane@example.com"
                        {...registerField("email")}
                      />
                      {registerErrors.email && <p>Mensaje de error</p>}
                    </div>

                    <div className="grid gap-2">
                      <div className="flex justify-between items-center">
                        <Label>Password</Label>
                      </div>
                      <Input
                        type="text"
                        placeholder="***********"
                        {...registerField("password")}
                      />
                      {registerErrors.password && <p>Mensaje de error</p>}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button type="submit" size="lg" className={"w-full"}>
                    Register
                  </Button>
                  <Button
                    variant="outline"
                    type="submit"
                    size="lg"
                    className={"w-full"}
                  >
                    Register with Google
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </div>
        )}
      </div>
      <footer className="flex self-end">
        <p>© {new Date().getFullYear()} Verstane. All rights reserved. </p>
      </footer>
    </div>
  );
}

export default Auth;
