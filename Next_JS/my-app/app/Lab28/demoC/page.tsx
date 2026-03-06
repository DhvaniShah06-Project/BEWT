import Link from "next/link";
import {useState,FocusEvent} from "react";
import { validateAndSubmitForm } from "@/app/action";


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


async function handleSubmit(){
  setSubmittedData(null)

  const result = await validateAndSubmitForm(formData)
}
}