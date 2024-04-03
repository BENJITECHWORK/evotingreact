import React,{useEffect, useState} from 'react'
import { useMutation } from '@tanstack/react-query'
import Input from "../formComponents/Input";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { verifyToken } from "../../apis/apifunctions/voteApi";
import { notify, errorNotification } from "../../Toasts/toasts";
import { tokenschema } from "../../Schemas/authSchema";
import { useSelector, useDispatch } from 'react-redux';
import { setIsEligible } from '../../redux/slices/authSlice';
import Modal from "../Dialog/Modal";
import "../../components/Modals/styles.css"

const GetNameModal = ({isOpen}) => {
  const dispatch = useDispatch()
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
        dispatch(setIsEligible(false))
        notify(data.message);
      },
      onError: (error) => {
        console.log('error', error)
        errorNotification(error.message)
      }
    });
  }

  return (
    <Modal
        hasCloseBtn={false}
        isOpen={isOpen}
        onClose={()=>{}}
     >
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
            <div className="modalContainer">
             <button class='btn btn-primary fw-bolder fs-8'
              className={`primary-btn siguin ${mutation.isPending ? "disabled" : ""}`}
              type="submit">
              {mutation.isPending ? "Verifying ..." : "Verify Token"}
            </button>
            </div>
          </form>
  
  </Modal>
  )
}

export default GetNameModal