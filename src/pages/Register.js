import React from 'react'
import {Button} from "react-bootstrap"
import * as yup from "yup"
import {useFormik} from "formik"
import {useDispatch} from "react-redux"
import { createAccount } from "../features/user/userSlice"
import {ToastContainer, toast} from "react-toastify"

function Register() {
  const dispatch = useDispatch()


  const schema  = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    password2: yup.string().required("Repeat your password")
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      family: "",
      email: "",
      password: "",
      password2: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (values.password === values.password2){
        dispatch(createAccount(values))
      }else{
        toast.error("Your password is not match")
      }

    }
  })


  return (
    <div>
    <div className='login'>

      <div className='text-danger p-2'>{formik.errors.name}</div>
        <input type='name' onChange={formik.handleChange("name")} value={formik.values.name} placeholder='name'/>

      <div className='text-danger p-2'>{formik.errors.family}</div>
        <input type='family' onChange={formik.handleChange("family")} value={formik.values.family} placeholder='family'/>

      <div className='text-danger p-2'>{formik.errors.email}</div>
        <input type='email' onChange={formik.handleChange("email")} value={formik.values.email} placeholder='email'/>

      <div className='text-danger p-2'>{formik.errors.password}</div>
        <input type='password' placeholder='password' onChange={formik.handleChange("password")} value={formik.values.password}/>

      <div className='text-danger p-2'>{formik.errors.password2}</div>
        <input type='password' placeholder='repeat password' onChange={formik.handleChange("password2")} value={formik.values.password2}/>


        <Button onClick={formik.handleSubmit} >Register</Button> 
        <ToastContainer />
        <a href='/login'>login</a>
    </div>
        </div>
  )
}

export default Register