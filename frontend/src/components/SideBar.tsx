import { NavLink } from "react-router-dom"

function MyNavLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full">
      <NavLink
        className={({ isActive }) => {
          return `m-2 mx-2 w-full rounded-full font-semibold hover:bg-slate-300 p-2 px-6  ${
            isActive ? "bg-base-300" : ""
          }`
        }}
        to={to}
      >
        {children}
      </NavLink>
    </div>
  )
}

function SideBar() {
  return (
    // <div className="fixed justify-center h-screen bg-white w-52">
    //   <div className="my-4">
    //     <div>Logo</div>
    //   </div>
    //   <div className="mx-2 ">
    //     <MyNavLink to="/dashboard">Dashboard</MyNavLink>
    //     <MyNavLink to="/settings">Settings</MyNavLink>
    //   </div>
    // </div>

    <div className="navbar bg-base-200 h-screen fixed w-52 flex-col">
      <a className="btn btn-ghost text-xl">daisyUI</a>

      <MyNavLink to="/dashboard">Dashboard</MyNavLink>
      <MyNavLink to="/settings">Settings</MyNavLink>
      <label className="flex cursor-pointer gap-2 fixed bottom-0 m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          value="dark"
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  )
}

export default SideBar
