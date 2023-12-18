import Header from "../components/header";
import Footer from "../components/footer"
import Fetchitems from "../components/fetchItems";
import LoadingSpinner from "../components/LoadingSpinner";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
const fetchStatus=useSelector((store)=>store.fetchStatus)
 

  return (
    <>
    <Header/>
    <Fetchitems/>
    {fetchStatus.currentlyFetching ? <LoadingSpinner/>:<Outlet/>}
   
     <Footer/>
    </>
  
  );
}
export default App
