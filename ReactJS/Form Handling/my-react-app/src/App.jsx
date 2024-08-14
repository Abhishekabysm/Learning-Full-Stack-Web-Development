import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting},
  } = useForm()

  const delay = (d)=>{
    return new Promise((res, rej)=>{
      setTimeout(() => {
        res();
      }, d* 1000);
    })
  }


  const onSubmit = async(data) => {
    // await delay(3); // Simulating Network delays
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let res = await r.text()
    console.log(data, res)

    // if (data.username !== "Abhishek") {
    //   setError("username", { message: "Your credentials is incorrect" });
    // }

    // if(data.username==="Aman"){
    //   setError("blockedUsers", {message:"Sorry this user is Blocked"})
    // }
   
  }

  return (
    <>
     <div className="container">
        {isSubmitting && <div>Loading...</div>}
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input placeholder='Username'  {...register("username", { required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "Minimum 3 letters are required"}, maxLength: {value: 8, message: "Only At max 8 letters"}})}  type="text" id="username" /> <br />
          {errors.username && <p className='red'>{errors.username.message}</p>}

          <input placeholder='Password'  {...register("password", {required:{value:true, message:"Password is Required"}, minLength:{value:3, message:"password length should atleast of 7 characters"}})}  type="password"  /> <br />
          {errors.password && <p className='red'>{errors.password.message}</p>}

          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myForm && <p className='red'>{errors.myForm.message}</p>}
          {errors.blockedUsers && <p className='red'>{errors.blockedUsers.message}</p>}
        </form>
     </div>
    </>
  )
}

export default App
