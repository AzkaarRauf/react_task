import SideBar from "./SideBar"
import TopBar from "./TopBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideBar />
      <TopBar />
      <div className="pl-64 pt-11 h-full min-h-screen pb-4">{children}</div>
    </>
  )
}
