import React from 'react'
import { useMutation } from '@tanstack/react-query'
import Input from "../components/formComponents/Input";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { registerApi } from "../apis/apifunctions/authApi";
import { notify, errorNotification } from "../Toasts/toasts";
import { registerSchema } from "../Schemas/authSchema";
import "../App.css"

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange", //validate on each form change
        resolver: yupResolver(registerSchema),
    })

    /* useMutation Implementation */
    const mutation = useMutation({
        mutationFn: registerApi,
    })


    /* Handle Submit Logic */
    const onSubmit = (user_data) => {
        mutation.mutate(user_data, {
            onSuccess: (data) => {
                notify("User Created Successful");
            },

            onError: (error) => {
                errorNotification(error.message)
            }
        });
    }
    return (
        <div className="container1">
            <div className="signup">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <header>SignUp</header>
                    <Input
                        className="input"
                        title="Email"
                        label="email"
                        register={register}
                        required
                        placeholder="Enter Email Address"
                        type="text"
                        errors={errors.email}
                    />
                    <Input
                        className="input"
                        title="First Name"
                        label="firstName"
                        register={register}
                        required
                        placeholder="Enter First Name"
                        type="text"
                        errors={errors.firstName}
                    />
                    <Input
                        className="input"
                        title="Last Name"
                        label="lastName"
                        register={register}
                        required
                        placeholder="Enter Last Name"
                        type="text"
                        errors={errors.lastName}
                    />
                    <Input
                        className="input"
                        title="Phone Number"
                        label="phone_number"
                        register={register}
                        required
                        placeholder="Enter Phone Number"
                        type="text"
                        errors={errors.phone_number}
                    />
                    <Input
                        className="input"
                        title="Password"
                        label="password"
                        register={register}
                        required
                        placeholder="Enter Password"
                        type="password"
                        errors={errors.password}
                    />

                    <button
                        className={`primary-btn siguin ${mutation.isPending ? "disabled" : ""}`}
                        type="submit">
                        {mutation.isPending ? "Signing Up ..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register