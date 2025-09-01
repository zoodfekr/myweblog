import * as React from "react";
import Slide, { SlideProps } from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "animate.css";

// Transition با تایپ صحیح
const Transition = React.forwardRef<HTMLDivElement, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// تایپ صحیح props کامپوننت
type CustomDialogProps = {
  open: boolean;
  handleClose: () => void;
  Dialog_fullWidth?: boolean;
  title: string;
  text?: string;
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  IconButton_display?: string;
  textSize?: string;
  zIndex?: number;
};

const CustomDialog: React.FC<CustomDialogProps> = ({
  open = false,
  handleClose,
  Dialog_fullWidth = true,
  title,
  text,
  children,
  maxWidth = "sm",
  IconButton_display = "flex",
  textSize,
  zIndex = 10,
}) => {
  return (
    <Dialog
      style={{ zIndex }}
      sx={{ zIndex }}
      dir="rtl"
      maxWidth={maxWidth}
      fullWidth={Dialog_fullWidth}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        className="z-10"
        sx={{
          position: "absolute",
          display: IconButton_display,
          justifyContent: "center",
          alignItems: "center",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon className="rounded-full closeIcon" />
      </IconButton>

      <DialogTitle
        sx={{ m: 0, p: 2 }}
        id="customized-dialog-title"
        className="bg-blue-400 chart_title"
      >
        {title}
      </DialogTitle>

      <DialogContent sx={{ zIndex, mt: 2 }}>
        {text && (
          <Typography gutterBottom sx={{ my: 0, fontSize: textSize }}>
            {text}
          </Typography>
        )}
        <div className="animate__animated animate__backInRight">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
