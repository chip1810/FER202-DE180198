// redux/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

// GET all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// POST add product
export const addProductAsync = createAsyncThunk('products/addProductAsync', async (product, thunkAPI) => {
  try {
    const res = await axios.post(API_URL, product);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// DELETE product
export const deleteProductAsync = createAsyncThunk('products/deleteProductAsync', async (id, thunkAPI) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// PUT update product
export const updateProductAsync = createAsyncThunk('products/updateProductAsync', async (product, thunkAPI) => {
  try {
    const res = await axios.put(`${API_URL}/${product.id}`, product);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.list = state.list.filter(p => p.id !== action.payload);
      })

      .addCase(updateProductAsync.fulfilled, (state, action) => {
        const index = state.list.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
  },
});

export default productSlice.reducer;