import { Dispatch, SetStateAction, createContext, useContext } from "react"
export type User = {
  id: number
  email: string
  token: string
}

export const nullUser = {
  id: 0,
  email: "",
  token: "",
}
export const UserContext = createContext<User>(nullUser)
export const SetUserContext = createContext<Dispatch<SetStateAction<User>> | undefined>(undefined)

export function useUserContext() {
  const user = useContext(UserContext)
  const setUser = useContext(SetUserContext)

  if (!setUser) {
    throw new Error("useUserContext must be used within a UserProvider")
  }

  return [user, setUser] as const
}
