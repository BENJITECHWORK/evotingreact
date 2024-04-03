import React from 'react'
import { useMutation } from '@tanstack/react-query'
import Input from "../components/formComponents/Input";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { verifyToken } from "../apis/apifunctions/voteApi";
import { notify, errorNotification } from "../Toasts/toasts";
import { tokenschema } from "../Schemas/authSchema";

const Sample = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange", //validate on each form change
        resolver: yupResolver(tokenschema),
      })

      /* useMutation Implementation */
  const mutation = useMutation({
    mutationFn: verifyToken,
  })


  /* Handle Submit Logic */
  const onSubmit = (user_data) => {
    const user =localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null
    mutation.mutate({token:user_data.token, email:user.email}, {
      onSuccess: (data) => {
        console.log('data', data)
        notify("Successful");
      },

      onError: (error) => {
        console.log('error', error)
        errorNotification(error.message)
      }
    });
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                className="input"
                title="Token"
                label="token"
                register={register}
                required
                placeholder="Enter Token"
                type="text"
                errors={errors.token}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Sample