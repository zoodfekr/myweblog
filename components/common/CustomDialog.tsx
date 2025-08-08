import * as React from 'react';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { DialogActions } from '@mui/material';
import 'animate.css';
import zIndex from '@mui/material/styles/zIndex';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type dialogType = {
    open: Boolean,
    handleClose: () => void,
    Dialog_fullWidth?: Boolean,
    title: String,
    text?: string,
    children: React.ReactNode,
    maxWidth?: string,
    IconButton_display?: string,
    textSize,
    zIndex
}


const CustomDialog = (props) => {
    const {
        open = false,
        handleClose,
        Dialog_fullWidth,
        title,
        text,
        children,
        maxWidth,
        IconButton_display,
        textSize,
        zIndex

    }: dialogType = props;



    return (
        <>
            <Dialog
                style={{ zIndex: zIndex ? zIndex : 10 }}
                sx={{ zIndex: zIndex ? zIndex : 10 }}
                dir='rtl'
                maxWidth={maxWidth ? maxWidth : 'sm'}
                fullWidth={Dialog_fullWidth ?? true}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    className="z-10"
                    sx={{
                        position: 'absolute',
                        display: IconButton_display ? IconButton_display : "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon className="rounded-full closeIcon" />
                </IconButton>

                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='chart_title'>

                    {title}

                </DialogTitle>

                <DialogContent sx={{ zIndex: 10, mt: 2 }}>
                    <Typography gutterBottom className='' sx={{ my: 0, fontSize: textSize && "" }}>
                        {text}
                    </Typography>
                    <div className='animate__animated animate__backInRight'>
                        {children}
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
};

export default CustomDialog;