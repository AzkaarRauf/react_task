import { User, useUserContext } from "../context"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from "yup"
import { StdResponse } from "../types/types"

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
})

export default function Login() {
  const [_, setUser] = useUserContext()

  return (
    <div className="h-screen  grid grid-cols-3 justify-center content-center">
      <div className="card card-compact col-span-1 col-start-2 shadow-xl h-fit">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="card-title">Login</h2>
          </div>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values, helpers) => {
              const response = await fetch("http://localhost:8090/auth/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }).catch(err => err as Error)

              if (response instanceof Error) {
                console.error(response)
                return
              }

              if (response.ok) {
                const res: StdResponse = await response.json()

                const user = res.data as User

                localStorage.setItem("user", JSON.stringify(user))
                return setUser(user)
              }

              helpers.setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field type="email" name="email" placeholder="Email" className="input input-bordered" />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
