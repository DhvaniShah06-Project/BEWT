"use client"

import { useState } from "react"
import { validateAndSubmitForm } from "./action"

interface ValidationErrors {
  username?: string
  email?: string
  age?: string
  password?: string
}

interface SubmittedData {
  username: string
  email: string
  age: number
}

export default function DemoC() {

  const [errors, setErrors] = useState<ValidationErrors>({})
  const [success, setSuccess] = useState(false)
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const result = await validateAndSubmitForm(formData)

    if(!result.success){
      setErrors(result.errors || {})
      setSuccess(false)
      return
    }

    setErrors({})
    setSuccess(true)
    setSubmittedData(result.data || null)
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input name="username" placeholder="Username"/>
      <p>{errors.username}</p>

      <input name="email" placeholder="Email"/>
      <p>{errors.email}</p>

      <input name="age" placeholder="Age"/>
      <p>{errors.age}</p>

      <input type="password" name="password" placeholder="Password"/>
      <p>{errors.password}</p>

      <button type="submit">Submit</button>

      {success && submittedData && (
        <div>
          <h3>Form Submitted Successfully</h3>
          <p>{submittedData.username}</p>
          <p>{submittedData.email}</p>
          <p>{submittedData.age}</p>
        </div>
      )}

    </form>
  )
}