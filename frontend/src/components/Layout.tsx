import SideBar from "./SideBar"
import TopBar from "./TopBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideBar />
      <TopBar />
      <div className="pl-56 pt-11 bg-base-100">{children}</div>
    </div>
  )
}
