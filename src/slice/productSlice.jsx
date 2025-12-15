import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { VITE_APP_Path06, VITE_APP_Email06, VITE_APP_Password06 } = import.meta.env;
const BASE_URL = 'https://vue3-course-api.hexschool.io/v2';
const API_PATH = VITE_APP_Path06;

// Async Thunks

// 登入
export const login = createAsyncThunk(
    'product/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${BASE_URL}/admin/signin`, { username, password });
            const { token, expired } = res.data;
            document.cookie = `mycook=${token};expires=${new Date(expired)};`;
            return token;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || '登入失敗');
        }
    }
);

// 檢查登入狀態
export const checkLogin = createAsyncThunk(
    'product/checkLogin',
    async (_, { rejectWithValue }) => {
        try {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)mycook\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            if (!token) throw new Error('No token found');

            axios.defaults.headers.common['Authorization'] = token;
            await axios.post(`${BASE_URL}/api/user/check`);
            return token;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || '驗證失敗');
        }
    }
);

// 取得產品列表
export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (_, { rejectWithValue, getState }) => {
        try {
            // 確保 token 已設定 (雖然後面 checkLogin 會設，但防呆)
            const token = getState().product.token;
            axios.defaults.headers.common['Authorization'] = token;

            const res = await axios.get(`${BASE_URL}/api/${API_PATH}/admin/products/all`);
            // 注意：06.jsx 用的是 /admin/products (有分頁) 還是 /admin/products/all (全部)? 
            // 06.jsx: `${url}/api/${path}/admin/products` -> 這是有分頁的，預設第一頁
            // 我們按照 06.jsx 的邏輯:
            const resPaged = await axios.get(`${BASE_URL}/api/${API_PATH}/admin/products`);
            return Object.values(resPaged.data.products); // API 回傳 products 物件或陣列，視版本而定，06.jsx setProducts(checkProduct.data.products)
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || '取得產品失敗');
        }
    }
);

// 新增產品
export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (productData, { rejectWithValue, dispatch }) => {
        try {
            await axios.post(`${BASE_URL}/api/${API_PATH}/admin/product`, { data: productData });
            dispatch(fetchProducts()); // 重新取得列表
            return;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || '新增失敗');
        }
    }
);

// 刪除產品
export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (productId, { rejectWithValue, dispatch }) => {
        try {
            await axios.delete(`${BASE_URL}/api/${API_PATH}/admin/product/${productId}`);
            dispatch(fetchProducts());
            return productId;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || '刪除失敗');
        }
    }
);


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        token: '',
        isLoggedIn: false,
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = !!action.payload;
        },
        logout: (state) => {
            state.token = '';
            state.isLoggedIn = false;
            state.products = [];
            document.cookie = 'mycook=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        }
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Check Login
            .addCase(checkLogin.fulfilled, (state, action) => {
                state.token = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(checkLogin.rejected, (state) => {
                state.isLoggedIn = false;
                state.token = '';
            })
            // Fetch Products
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Add/Delete
            .addCase(addProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { setToken, logout } = productSlice.actions;
export default productSlice.reducer;
