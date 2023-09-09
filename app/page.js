'use client';

import nodemailer from "nodemailer"
import { SignJWT } from "jose";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";



export default function Home() {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    email: "ashraf.shazed@gmail.com",
    password: "123456"
  })
  const [loading, setLoading] = useState(false)

  const inputChange = (name, value) => {
    setFormValue(formValue => ({
      ...formValue, [name]: value
    }))
  }



  const sendEmail = async (email, message) => {

    try {
      // Transporter 
      let Transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {
          user: "info@teamrabbil.com",
          pass: "~sR4[bhaC[Qs",
        },
        tls: { rejectUnauthorized: false }
      })

      // Prepare Email 
      let myEmail = {
        from: "info@teamrabbil.com",
        to: email,
        subject: "Test Email From Next JS Application",
        text: "Mail with token",
        html: `<b>Token</b> : ${token}`,

      }

      const response = await Transporter.sendMail(myEmail);
      return response;

    } catch (e) {

    }

  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (formValue.email !== "ashraf.shazed@gmail.com") {

      toast.error("Please provide correct email", {
        autoClose: 2500,
        theme: "colored",
      });

    } else if (formValue.password !== "123456") {

      toast.error("Please provide correct password", {
        autoClose: 2500,
        theme: "colored",
      });

    } else {
      setLoading(true)
      await fetch("/api/email?email=" + formValue.email)
      await sendEmail(formValue.email);
      setLoading(false)
      const callbackUrl = "/dashboard"
      const response = await signIn("credentials",
        {
          redirect: false,
          email: formValue.email,
          password: formValue.password,
          callbackUrl
        })
     
     
      if (!response?.error) {
        router.replace(callbackUrl)
      }
    }

  }
  return (
    <div>
      <ToastContainer />
      <div className="container-lg">
        <div className="row d-flex vh-100 align-content-center justify-content-center">
          <div className="col-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" value={formValue.email} onChange={(e) => inputChange('email', e.target.value)} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" value={formValue.password} onChange={(e) => inputChange('password', e.target.value)} placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                {loading ? "Loading..." :"Submit"}
              </Button>
            </Form>
          </div>
        </div>
      </div>

    </div>
  )
}
