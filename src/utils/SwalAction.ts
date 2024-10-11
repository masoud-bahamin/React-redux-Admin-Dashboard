import Swal from "sweetalert2"


export const deleteSwal = () => {
   return Swal.fire({
        icon: "warning",
        text: "Do you want to delete this item?",
        showConfirmButton: true,
        showCancelButton: true,
        background : "#222",
        color:"#fff",
        confirmButtonColor : "red"
    })
}