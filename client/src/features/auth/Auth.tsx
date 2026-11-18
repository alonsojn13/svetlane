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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

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
    <div className="flex min-h-dvh flex-col ">
    
      {/* Hero */}
      <section className="mb-3 bg-foreground text-background p-8 rounded-b-4xl">

        <header className="flex justify-between mb-6">
          <h1>Svetlane</h1>
        </header>

        <h2 className="text-4xl font-bold mb-6 tracking-tighter">
          Feel yourself confident <br />{" "}
          <span className="text-terciary">what your learning.</span>{" "}
        </h2>

        <div className="flex gap-2 items-center">
          <AvatarGroup className="flex">
            <Avatar>
              <AvatarImage src="./img/user1.png" alt="@shadcn"  />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="./img/user2.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar >
              <AvatarImage
                src="./img/user3.png"
                alt="@evilrabbit" 
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar >
              <AvatarImage
                src="./img/user4.png"
                alt="@evilrabbit" 
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </AvatarGroup>

          <span className="text-sm text-terciary">+500 people feel confident speaking.</span>
        </div>
      </section>

      {/* Form */}
      <div className="m-3">

        {/* Login */}
        {step == 1 && (
          <div>
            <form onSubmit={handleLoginSubmit(sendFormLogin)} className="mb-3">
              <Card>
                <CardHeader>
                  <CardTitle>I was waiting you.</CardTitle>
                  <CardDescription>
                    It's great to see you're alive.
                  </CardDescription>
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
                </CardFooter>
              </Card>
            </form>

            <section className="flex flex-col text-center gap-3">
              <span>Or continue with</span>

              <section className="flex gap-2">
                <Button variant="secondary" className={"flex-1"}>
                  <img src="/icons/google.svg" alt="" className="h-6" />
                </Button>
                <Button variant="secondary" className={"flex-1"}>
                  <img src="/icons/apple.svg" alt="" className="h-6" />
                </Button>
              </section>

              <p>
                Don't you have an account?{" "}
                <b onClick={nextStep}>Register</b>{" "}
              </p>
            </section>
          </div>
        )}


        {/* Register */}
        {step == 2 && (
          <div>
            <form onSubmit={handleRegisterSubmit(sendFormRegister)} className="mb-3">
              <Card className="pt-0">
                <CardHeader>
                  <CardTitle>Starts the Adventure.</CardTitle>
                  <CardDescription>French, Spanish, English...</CardDescription>
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
                </CardFooter>
              </Card>
            </form>

             <section className="flex flex-col text-center gap-3">
              <span>Or continue with</span>

              <section className="flex gap-2">
                <Button variant="secondary" className={"flex-1"}>
                  <img src="/icons/google.svg" alt="" className="h-6" />
                </Button>
                <Button variant="secondary" className={"flex-1"}>
                  <img src="/icons/apple.svg" alt="" className="h-6" />
                </Button>
              </section>

              <p>
                Don't you have an account?{" "}
                <b onClick={backStep}>Login</b>{" "}
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
