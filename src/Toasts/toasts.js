import { toast } from "react-toastify";



/* Error Notification */
export const errorNotification =  (message) => {
   toast.dismiss()
    toast.error(message, {
      position: "top-center",
      toastId: 5483,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
  
/* Success Notification */
 export const notify= (message) => {
     toast.success(message, {
      position: "top-center",
      toastId: 5483, 
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light"
    });
  };

  