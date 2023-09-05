'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const [formValue, setFormValue] = useState({ email: "ashraf.shazed@gmail.com", password: "123456" })

  const inputChange = (name, value) => {
    setFormValue(formValue => ({
      ...formValue, [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValue.email.length === 0) {

      const notify = () => toast("Wow so easy!");

    } else if (formValue.password.length === 0) {

      const notify = () => toast("Wow so easy!");

    } else {
      const callbackUrl = "/dashboard"
      const response = await signIn("credentials",
        {
          redirect: false,
          email: formValue.email,
          password: formValue.password,
          callbackUrl
        })
        if(!response?.error) {
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
                <Form.Control type="email" value={formValue.email} onChange={(e)=>inputChange('email', e.target.value)} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={formValue.password} onChange={(e)=>inputChange('password', e.target.value)} placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>

    </div>
  )
}
