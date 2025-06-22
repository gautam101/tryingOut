import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        // If item already exists, increment the count
        state.items[existingItemIndex].count += 1;
        return;
      }

      state.items.push(item);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
