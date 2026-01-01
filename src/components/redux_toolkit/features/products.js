import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

const featchProducts = createAsyncThunk('product/featchProducs', async () => {
  await axios.get('https://fakestoreapi.com/products').then((res) => {
    console.log(res.data);
  });
});

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(featchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(featchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(featchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  // reducers: {
  //   get_products:featchProducts()
  // },
});

console.log(productSlice);

export default productSlice.reducer;

export { featchProducts };
