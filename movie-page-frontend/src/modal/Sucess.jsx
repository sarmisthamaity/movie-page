import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sucess = (message) => {
    console.log("message", message);
    
    return toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      })
};

export default Sucess;
