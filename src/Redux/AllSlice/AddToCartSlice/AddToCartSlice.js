import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from 'react-toastify'

const initialState = {
    CartItem: [],
    totalCartItem: 0,
    TotalAmount: 0,
}


export const AddToCardSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findIndex = state.CartItem.findIndex((item) => {
                return item.id === action.payload.id
            })

            if(findIndex >= 0) {
                state.CartItem[findIndex].CartQuantity += 1;
                localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
            } else {
                const temporary = ({...action.payload, CartQuantity: 1})
                state.CartItem.push(temporary)
                localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
                
                toast.success(`${action.payload.title} cart Add success`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    })
            }
        }
    }
})


export const { addToCart } = AddToCardSlice.actions;
export default AddToCardSlice.reducer;