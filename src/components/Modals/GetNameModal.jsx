import React,{useEffect, useState} from 'react'
import gooleIcon from '@/assets/icon.png'
import appleIcon from '@/assets/apple.png'
import Input from "@/componets/formComponents/Input";
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { setFirstNameApi } from '@/api/apifunctions/userApi';
import { useMutation } from "@tanstack/react-query";
import { updateUserDetails } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { notify, errorNotification } from "@/Toasts/toasts";
import { Link, useNavigate } from "react-router-dom";
import Modal from '../Dialog/Modal';
import { firstLoginSchema } from '@/Schemas/authSchema';
import './styles.css';

const GetNameModal = ({isOpen}) => {
        const dispatch = useDispatch();
        const {
            register,
            handleSubmit,
            formState: { errors },
            setFocus
        } = useForm({
            mode: "onChange", //validate on each form change
            resolver: yupResolver(firstLoginSchema),
            defaultValues: {
                firstName: "",
                lastName: "",
            },
        })

        /* useMutation Implementation */
        const mutation = useMutation({
            mutationFn:setFirstNameApi,
            mutationKey:["setname"]
        })

        /* Handle Submit Logic */
        const onSubmit = (user_data) => {
            mutation.mutate(user_data,{
            onSuccess:(data)=>{
                notify(data.message);
                dispatch(updateUserDetails({...data.data, is_first_login:false}))
            },
            onError: (error)=>{
                errorNotification(error.message)
            } });
            console.log('user_data', user_data)
        }
  return (
    <Modal
        hasCloseBtn={false}
        isOpen={isOpen}
        onClose={()=>{}}
    >
        <form className="auth_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-group-text">
                <h2>Please provide your name</h2>
            </div>
        <div className="content-feilds">
            <div className="input-con">
                <Input 
                    title = "First Name"
                    label="firstName"
                    register={register}
                    required
                    placeholder = "Enter First Name"
                    type = "text"
                    errors={errors.firstName}
                /> 
            </div>
            <div className="input-con">
                <Input
                    title="Last Name"
                    label="lastName"
                    register={register}
                    required
                    placeholder = "Enter Last Name"
                    type = "text"
                    errors={errors.lastName}
                />
            </div>
            <button 
                className={`primary-btn siguin ${mutation.isPending ? "disabled": ""}`}  
                type="submit">
                {mutation.isPending? "Saving ...":"Save"}
            </button>
        </div>
    </form>
  </Modal>
  )
}

export default GetNameModal