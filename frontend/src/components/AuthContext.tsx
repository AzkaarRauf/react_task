import { ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SetUserContext, User, UserContext } from "../context"
import _ from "lodash"
import { StdResponse } from "../types/types"

const nullUser = {
  id: 0,
  email: "",
  token: "",
}

export default function AuthContext({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(nullUser)
  const navigate = useNavigate()

  useEffect(() => {
    // Get user from local storage
    const user = localStorage.getItem("user")

    // If user is not found, navigate to login
    if (!user || _.isEqual(user, nullUser)) {
      return
    }

    // Try parsing user data
    try {
      setUser(JSON.parse(user))
    } catch (error) {
      console.error(error)
    }
  }, [])

  // Verify user is logged in
  useEffect(() => {
    const validate = async () => {
      const response: StdResponse = await fetch("http://localhost:8090/auth/isLoggedIn", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
        .then(res => res.json())
        .catch(err => err as Error)

      if (response.success) {
        localStorage.setItem("user", JSON.stringify({ ...response.data }))
        navigate("/dashboard")
      } else {
        localStorage.removeItem("user")
        navigate("/auth/login")
      }
    }

    validate()
  }, [user])

  return (
    <SetUserContext.Provider value={setUser}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </SetUserContext.Provider>
  )
}
