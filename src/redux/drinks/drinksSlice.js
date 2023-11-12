import { createSlice } from '@reduxjs/toolkit';
import {
  fetchOwnDrinks,
  addOwnDrink,
  deleteOwnDrink,
  fetchFavoriteDrinks,
  addFavoriteDrink,
  deleteFavoriteDrink,
  fetchNewDrinks,
  fetchDrinkById,
  fetchCategories,
  fetchGlass,
  fetchIngredient,
  fetchPopularDrinks,
  getDrinksCategoriesThunk,
  getDrinksIngredientsThunk,
  searchDrinksThunk,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const initialDrinksState = {
  searchQuery: { keyword: '', category: '', ingredient: '' },
  categories: [],
  ingredients: [],
  page: 1,
  searchResults: [],
  isLoading: false,
  error: null,
};

export const popularDrinksSlice = createSlice({
  name: 'popularDrinks',
  initialState,
  extraReducers: {
    [fetchPopularDrinks.pending]: handlePending,
    [fetchPopularDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchPopularDrinks.rejected]: handleRejected,
  },
});

export const ownDrinksSlice = createSlice({
  name: 'ownDrinks',
  initialState,
  extraReducers: {
    [fetchOwnDrinks.pending]: handlePending,
    [fetchOwnDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.drinks;
      state.max_page = action.payload.max_page;
      state.page = action.payload.page;
      state.per_page = action.payload.per_page;
    },
    [fetchOwnDrinks.rejected]: handleRejected,
    [addOwnDrink.pending]: handlePending,
    [addOwnDrink.fulfilled](state) {
      state.isLoading = false;
      state.error = null;
    },
    [addOwnDrink.rejected]: handleRejected,
    [deleteOwnDrink.pending]: handlePending,
    [deleteOwnDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    [deleteOwnDrink.rejected]: handleRejected,
  },
});
export const favoriteDrinksSlice = createSlice({
  name: 'favoriteDrinks',
  initialState,
  extraReducers: {
    [fetchFavoriteDrinks.pending]: handlePending,
    [fetchFavoriteDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.favoriteDrinks;
      state.max_page = action.payload.max_page;
      state.page = action.payload.page;
      state.per_page = action.payload.per_page;
    },
    [fetchFavoriteDrinks.rejected]: handleRejected,
    [addFavoriteDrink.pending]: handlePending,
    [addFavoriteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addFavoriteDrink.rejected]: handleRejected,
    [deleteFavoriteDrink.pending]: handlePending,
    [deleteFavoriteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    [deleteFavoriteDrink.rejected]: handleRejected,
  },
});

export const newDrinksSlice = createSlice({
  name: 'newDrinks',
  initialState,
  extraReducers: {
    [fetchNewDrinks.pending]: handlePending,
    [fetchNewDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchNewDrinks.rejected]: handleRejected,
  },
});

export const drinkByIdSlice = createSlice({
  name: 'drinkDetails',
  initialState,
  extraReducers: {
    [fetchDrinkById.pending]: handlePending,
    [fetchDrinkById.fulfilled](state, { payload }) {
      state.drinkById = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchDrinkById.rejected]: handleRejected,
  },
});

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [fetchCategories.pending]: handlePending,
    [fetchCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCategories.rejected]: handleRejected,
  },
});
export const glassSlice = createSlice({
  name: 'glass',
  initialState,
  extraReducers: {
    [fetchGlass.pending]: handlePending,
    [fetchGlass.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchGlass.rejected]: handleRejected,
  },
});
export const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  extraReducers: {
    [fetchIngredient.pending]: handlePending,
    [fetchIngredient.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchIngredient.rejected]: handleRejected,
  },
});

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: initialDrinksState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.searchQuery.keyword = payload;
    },
    setSelectedCategory: (state, { payload }) => {
      state.searchQuery.category = payload;
    },
    setSelectedIngredient: (state, { payload }) => {
      state.searchQuery.ingredient = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [getDrinksCategoriesThunk.pending]: handlePending,
    [getDrinksCategoriesThunk.fulfilled](state, { payload }) {
      state.categories = payload;
      state.isLoading = false;
    },
    [getDrinksCategoriesThunk.rejected]: handleRejected,
    [getDrinksIngredientsThunk.pending]: handlePending,
    [getDrinksIngredientsThunk.fulfilled](state, { payload }) {
      state.ingredients = payload;
      state.isLoading = false;
    },
    [getDrinksIngredientsThunk.rejected]: handleRejected,
    [searchDrinksThunk.pending]: handlePending,
    [searchDrinksThunk.fulfilled](state, { payload }) {
      state.searchResults = payload;
      state.isLoading = false;
    },
    [searchDrinksThunk.rejected]: handleRejected,
  },
});

export const favoriteDrinksReducer = favoriteDrinksSlice.reducer;
export const ownDrinksReducer = ownDrinksSlice.reducer;
export const popularDrinksReducer = popularDrinksSlice.reducer;
export const newDrinksReducer = newDrinksSlice.reducer;
export const drinkByIdReducer = drinkByIdSlice.reducer;
export const categoryReducer = categorySlice.reducer;
export const glassReducer = glassSlice.reducer;
export const ingredientReducer = ingredientSlice.reducer;
export const drinksReducer = drinksSlice.reducer;
export const {
  setQuery,
  setSelectedCategory,
  setSelectedIngredient,
  setCurrentPage,
} = drinksSlice.actions;
