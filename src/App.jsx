
import { Outlet, useNavigation } from 'react-router'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Loading from './Component/Loading';
 import { ToastContainer, toast } from 'react-toastify';

function App() {
const navigation=useNavigation();
const isLoading=Boolean(navigation.location);
  return (
    <>
    <Navbar></Navbar>
    {
      isLoading && <Loading></Loading>
    }
    <Outlet></Outlet>
    <Footer></Footer>
    <ToastContainer />
    
    </>
  )
}

export default App
