import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://drinks-whm4.onrender.com';

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const fetchOwnDrinks = createAsyncThunk(
  'drinks/fetchOwn',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/own?page=${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchFavoriteDrinks = createAsyncThunk(
  'drinks/fetchFavorite',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/favorite?page=${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchPopularDrinks = createAsyncThunk(
  'drinks/fetchPopular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/popular');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addOwnDrinkImg = createAsyncThunk(
  'drinks/addOwnDrinkImg',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/drinks/own/add/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.status.ok ? response.data.avatarURL : response.data;
    } catch (e) {
      if (!e.response) {
        throw e;
      }
      return rejectWithValue(e.response.data);
    }
  },
);

export const addOwnDrink = createAsyncThunk(
  'drinks/addOwnDrink',
  async (drink, { rejectWithValue }) => {
    try {
      const response = await axios.post('/drinks/own/add', drink);
      return response.status.ok ? response.config.data : response.data;
    } catch (e) {
      if (!e.response) {
        throw e;
      }
      return rejectWithValue(e.response.data);
    }
  },
);
export const addFavoriteDrink = createAsyncThunk(
  'drinks/addFavoriteDrink',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.post(`/drinks/favorite/add/${drinkId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const deleteOwnDrink = createAsyncThunk(
  'drinks/deleteOwnDrink',
  async (drinkId, thunkAPI) => {
    try {
      await axios.delete(`/drinks/own/remove/${drinkId}`);
      return drinkId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const deleteFavoriteDrink = createAsyncThunk(
  'drinks/deleteFavoriteDrink',
  async (drinkId, thunkAPI) => {
    try {
      await axios.delete(`/drinks/favorite/remove/${drinkId}`);
      return drinkId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchNewDrinks = createAsyncThunk(
  'drinks/fetchNew',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/mainpage');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// отримання даних із фільтрів (переліки категорій, сервування, інгрідієнтів)
export const fetchCategories = createAsyncThunk(
  'drink/getCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/categories');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchGlass = createAsyncThunk(
  'drink/getGlasses',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/glasses');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchIngredient = createAsyncThunk(
  'drink/getIngredient',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/ingredients');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// *** for DrinkById
export const fetchDrinkById = createAsyncThunk(
  'drinks/fetchDrinkById',
  async (drinkId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/drinks/${drinkId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// --------------drinksPage operations-------

// Запит на отримання категорій коктелів
export const getDrinksCategoriesThunk = createAsyncThunk(
  'filters/getDrinksCategories',
  async (_, thunkAPI) => {
    try {
      // return await getDrinksCategories();
      const { data } = await axios.get('filters/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Запит на отримання інградієнтів коктелів
export const getDrinksIngredientsThunk = createAsyncThunk(
  'filters/getDrinksIngredients',
  async (_, thunkAPI) => {
    try {
      // return await getDrinksIngredients();
      const { data } = await axios.get('filters/ingredients');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Пошуковий запит за ключовим словом, вибраною категорією та інградієнтом
export const searchDrinksThunk = createAsyncThunk(
  'filters/searchDrinks',
  async ({ searchQuery, page, limit }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      // return await searchDrinks({ searchQuery }, page, limit);
      const { keyword, category, ingredient } = searchQuery;

      const { data } = await axios.get(
        `drinks/search?page=${page}&limit=${limit}&keyword=${keyword}&category=${category}&ingredient=${ingredient}`,
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
