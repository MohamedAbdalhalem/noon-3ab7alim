import { Outlet } from 'react-router-dom';
import { Nav } from './../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
      <>
        <Nav />
      <Outlet />
      <Footer/>
      </>
  )
}
