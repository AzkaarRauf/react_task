import { ErrorMessage, Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useUserContext } from "../context"
import { Dispatch, SetStateAction } from "react"

const validationSchema = yup.object({
  balance: yup.number().required(),
  date: yup.date().required(),
})

export default function AddBalanceHistory({ setData }: { setData: Dispatch<SetStateAction<any[]>> }) {
  const navigate = useNavigate()
  const [user] = useUserContext()

  return (
    <div className="form-control">
      <Formik
        initialValues={{ balance: "", date: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/balance-history`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({ balance: Number(values.balance), date: values.date }),
          })
            .then(res => res.json())
            .catch(err => err as Error)

          if (response.success) {
            setData([])
            return navigate("/balance-history")
          }

          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex">
            <div>
              <Field type="date" name="date" placeholder="Date" className="input input-bordered" />
              <ErrorMessage name="date" component="div" className="text-red-500" />
            </div>
            <div>
              <Field type="text" name="balance" placeholder="Balance" className="input input-bordered " />
              <ErrorMessage name="balance" component="div" className="text-red-500" />
            </div>
            <button className="btn bg-base-300" type="submit" disabled={isSubmitting}>
              {isSubmitting ? <span className="loading loading-dots loading-sm"></span> : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
