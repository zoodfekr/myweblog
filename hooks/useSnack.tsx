
import { useSnackbar } from 'notistack';


type snackType = {
  text: string,
  variant: 'info' | 'success' | "error"
}


const useSnack = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const snack = (props: snackType) => {
    const { text = '', variant = 'info' } = props;
    enqueueSnackbar(text, {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      style: { direction: 'rtl' },
      autoHideDuration: 2000, // مدت زمان نمایش اسنک در میلیثانیه
      action: key => (
        <>
          <div
            onClick={() => closeSnackbar(key)}
            className='left-0 absolute mx-2'
            style={{ width: "100%", height: "100%" }}
          >
          </div>
        </>
      )
    });
  };

  return snack;
};

export default useSnack;
