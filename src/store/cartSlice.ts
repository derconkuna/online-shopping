import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartItem {
  _id: number;
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  quantity: number;
}

interface cartState {
  productData: cartItem[];
  favoriteData: cartItem[];
  allProducts: cartItem[];
  userInfo: null;
}

const initialState: cartState = {
  productData: localStorage.getItem("productData")
    ? JSON.parse(localStorage.getItem("productData")!)
    : [],
  favoriteData: localStorage.getItem("favoriteData")
    ? JSON.parse(localStorage.getItem("favoriteData")!)
    : [],
  allProducts: [],
  userInfo: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<cartItem, "quantity">>) => {
      const existingProduct = state.productData.find(
        (item) => item._id == action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.productData.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("productData", JSON.stringify(state.productData));
    },

    addToFavorite: (
      state,
      action: PayloadAction<Omit<cartItem, "quantity">>
    ) => {
      const existingProduct = state.favoriteData.find(
        (item) => item._id == action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.favoriteData.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("favoriteData", JSON.stringify(state.favoriteData));
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id == action.payload._id
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          existingProduct.quantity = 1;
        }
      }
      localStorage.setItem("productData", JSON.stringify(state.productData));
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id == action.payload._id
      );
      existingProduct && existingProduct.quantity++;

      localStorage.setItem("productData", JSON.stringify(state.productData));
    },
    // : PayloadAction<{ _id: string }>
    removeProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id != action.payload
      );

      localStorage.setItem("productData", JSON.stringify(state.productData));
    },

    removeFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item._id != action.payload
      );

      localStorage.setItem("favoriteData", JSON.stringify(state.favoriteData));
    },

    clearCart: (state) => {
      state.productData = [];
    },

    clearFavorite: (state) => {
      state.favoriteData = [];
    },

    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const {
  setAllProducts,
  removeFavorite,
  clearFavorite,
  addToCart,
  clearCart,
  removeProduct,
  decreaseQuantity,
  increaseQuantity,
  addToFavorite,
} = cartSlice.actions;

export default cartSlice.reducer;
