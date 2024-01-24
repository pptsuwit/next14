"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/zodSchema/loginSchema";
import * as z from "zod";
type FormData = z.infer<typeof loginSchema>;

import { authService } from "@/services/auth.service";
import httpService from "@/utils/axios";
import { redirect } from "next/navigation";

import Input from "@/components/Input";
export default function page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });
  async function onSubmit(data: FormData) {
    try {
      await authService.login(data.email, data.password).then(async (item: ILoginResponse) => {
        const { token } = item.data;
        if (token) {
          httpService.defaults.headers.common["authorization"] = `Bearer ${token}`;
          localStorage.setItem(process.env.TOKEN_NAME as string, token);
          redirect("/dashboard");
        }
      });
    } catch (error) {
      console.log("login error : ", error);
      //       setModal(true);
      //       setModalMessage(getModalMessage("error", err));
    }
  }
  return (
    <div className="dark:bg-none flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md shadow-slate-300 w-full sm:w-96">
        <h1 className="text-5xl text-center text-blue-500 font-semibold mb-6">LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Input id="email" type="text" placeholder="Email" register={register("email", { required: true })}></Input>
            {errors?.email && <p className="text-red-500 text-sm">{errors?.email?.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Input id="password" type="password" placeholder="Password" register={register("password", { required: true })}></Input>
            {errors?.password && <p className="text-red-500 text-sm">{errors?.password?.message}</p>}
          </div>
          <div className="mb-4 ">
            {/* <button className="text-xl font-bold bg-blue-500" type="submit">
              Login
            </button> */}
            <button
              className="w-full focus:border-blue-400 focus:border-2 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 font-bold">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
