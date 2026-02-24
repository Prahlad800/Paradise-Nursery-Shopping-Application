import { configureStore } from '@reduxjs/toolkit'
import  productReduser from "../slice/productSlice"

export default configureStore({
  reducer: {
    product:productReduser,
  },
})