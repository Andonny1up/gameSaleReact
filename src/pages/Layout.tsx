import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <Navbar/>
        <div>
            {children ?? <Outlet/>}
        </div>
    </div>
  )
}

export default Layout