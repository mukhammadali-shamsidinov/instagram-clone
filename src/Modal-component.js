import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {createUserWithEmailAndPassword} from 'firebase/auth'

import {auth} from "./config";
import {useContext} from "react";
import {Context} from "./App";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({isLogin}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {register,handleSubmit,formState: { errors }}= useForm()
    const {account} = useContext(Context)
    const login = (data)=>{
        createUserWithEmailAndPassword(auth,
            data.email,
            data.password).then((user)=>{
            toast.success('Ro\'yxatdan o\'tdingiz' )
            isLogin(true)
            console.log(user.user)
            localStorage.setItem('item',JSON.stringify(user.user))
        }).catch(()=>{
            toast.error("Register failed")
        })
    }

    return (
        <>
            <Button onClick={handleOpen} variant={'contained'}>Ro'yxatdan O'tish</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(login)}>
                        <Typography variant={'h5'} align={'center'} color={'blue'}>Register</Typography>
                        <br/>
                        <TextField {...register('email')} type={'email'} placeholder={'email'} fullWidth />
                        <br/><br/>
                        <TextField {...register('password',{
                            required:true,
                            minLength:8
                        })} type={'password'} placeholder={'password'} fullWidth />
                        {errors.password && <Typography variant={'body2'} color={'red'}>minimalni parol uzunligi 8ta simvoldan iborat bo'lishi kerak  </Typography>}
                        <br/><br/>
                        <Button type={'submit'} variant={'outlined'} color={'success'} fullWidth>Register</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}