import React from 'react'
import { useMutation } from '@tanstack/react-query'
import Input from "../components/formComponents/Input";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { loginApi } from "../apis/apifunctions/authApi";
import { notify, errorNotification } from "../Toasts/toasts";
import { schema } from "../Schemas/authSchema";
import "../App.css";
import logo from "../assets/logo.jpeg"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", //validate on each form change
    resolver: yupResolver(schema),
  })

  /* useMutation Implementation */
  const mutation = useMutation({
    mutationFn: loginApi,
  })


  /* Handle Submit Logic */
  const onSubmit = (user_data) => {
    mutation.mutate(user_data, {
      onSuccess: (data) => {
        localStorage.setItem("access_token", data.jwt_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        notify("Login Successful");
      },

      onError: (error) => {
        errorNotification(error.message)
      }
    });
  }


  return (
    <><div className="container1">
      <div className="login-form">
        <div className="logo">
          <img src={logo} alt='loading' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <header>Login</header>
          <Input
            className="input"
            title="Email"
            label="email"
            register={register}
            required
            placeholder="Enter Email Address"
            type="text"
            errors={errors.email} />
          <Input
            className="input"
            title="Password"
            label="password"
            register={register}
            required
            placeholder="Enter Password"
            type="password"
            errors={errors.password} />

          <button
            className={`primary-btn siguin ${mutation.isPending ? "disabled" : ""}`}
            type="submit">
            {mutation.isPending ? "Signing In ..." : "Sign In"}
          </button>
        </form>
      </div>
    </div></>
  )
}

export default Login