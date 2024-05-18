import SideBar from "./SideBar"
import TopBar from "./TopBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideBar />
      <TopBar />
      <div className="pl-64 pt-11 bg-base-200 h-screen ">{children}</div>
    </div>
  )
}
