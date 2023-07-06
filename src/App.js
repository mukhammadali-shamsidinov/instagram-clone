
import './App.css';
import {Route, Routes} from "react-router-dom"
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import {createContext, useEffect, useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "./config";
export const Context = createContext()
function App() {
    const [account,setAccaout] = useState([])
    const [isLogin,setIsLogin] = useState(false);
    function logout(){
        signOut(auth).then(()=>{
            toast.dark("Logout success full")
            localStorage.clear()
            setIsLogin(false)
        }).catch(()=>{
            toast.error("error")
        })
    }
    useEffect(()=>{
       let x = JSON.parse(localStorage.getItem('item'))

        setAccaout([x])
        setIsLogin(true)


    },[])
  return (
<Context.Provider value={{account,setIsLogin,isLogin,logout}}>
    <div className="app">
        <ToastContainer />
        <Routes>
            <Route path={'/'} element={<Home />} />
        </Routes>
    </div>

</Context.Provider>

  );
}

export default App;
