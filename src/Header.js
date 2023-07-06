import React, {useContext, useState} from 'react';
import './Header.css'
import {Button} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ModalComponent from "./Modal-component";
import {Context} from "./App";
import LogoutIcon from '@mui/icons-material/Logout';
import {signOut } from "firebase/auth"

import {toast} from "react-toastify";
import {auth} from "./config";
function Header(props) {
    const {setIsLogin,isLogin,account,logout} = useContext(Context)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <header className={'container'}>

            <div className="header_logo">
                <h3>Dream Academy Social App</h3>
            </div>
            <div className="header_buttons mr-3">



                {isLogin == true || account.length < 0 ? <>
                        <Button variant={'contained'} className={'header_btn'}>
                            New Post <AddCircleOutlineIcon />
                        </Button>
                    &nbsp;
                        <Button variant={'contained'} className={'header_btn_2'}
                        onClick={logout}
                        >
                             <LogoutIcon />
                        </Button>
                </>
                :  <ModalComponent isLogin={setIsLogin} />
                }

            </div>

        </header>
    );
}

export default Header;