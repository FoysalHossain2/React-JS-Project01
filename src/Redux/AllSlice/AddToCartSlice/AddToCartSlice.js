import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { toast, Bounce } from 'react-toastify'

const initialState = {
    CartItem: localStorage.getItem("CartItem") 
    ? JSON.parse(localStorage.getItem("CartItem"))
    : [],
    TotalCartItem: 0,
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
        },

        RemoveCartItem: (state, action) => {
            const removeItems = state.CartItem.filter((item) => item.id !== action.payload.id)
            state.CartItem = removeItems
            localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
            toast.error(`${action.payload.title} Removed To Cart`, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        },

        ProductIncrement: (state, action) => {
            const findIndex = state.CartItem.findIndex((item) => item.id === action.payload.id)   
            state.CartItem[findIndex].CartQuantity += 1
            localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
        },

        ProductDecrement: (state, action) => {
            const findIndex = state.CartItem.findIndex((item) => item.id === action.payload.id)   
            if (state.CartItem[findIndex].CartQuantity > 1) {
                state.CartItem[findIndex].CartQuantity -= 1
            }
            localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
        },

        getTotal: (state, action) => {
            const totalCarts = state.CartItem.reduce((totalCart, cartItem) => {
                const {CartQuantity, price} = cartItem;
                const totalCartPrice = CartQuantity * price;
                totalCart.totalAmount += Math.round(totalCartPrice);
                totalCart.totalItems += CartQuantity;
                return totalCart;
            }, 
            {
                totalAmount: 0,
                totalItems: 0,
            }
            );
            state.TotalCartItem = totalCarts.totalItems;
            state.TotalAmount = totalCarts.totalAmount
            console.log(totalCarts);
        }
    }
})


export const { 
     addToCart,
     RemoveCartItem,
     ProductIncrement,
     ProductDecrement ,
     getTotal
    } = AddToCardSlice.actions;
export default AddToCardSlice.reducer;