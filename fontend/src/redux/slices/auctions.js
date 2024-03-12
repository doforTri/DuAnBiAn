import { createSlice } from '@reduxjs/toolkit';
import sum from 'lodash/sum';
import uniqBy from 'lodash/uniqBy';
import axios from '../../utils/axios';
import { put, takeLatest, all } from 'redux-saga/effects';

const initialState = {
  auctions: [],
  auction: null,
  isLoading: false,
  error: null,
};

const auctionSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    // Load auctions
    loadAuctions: (state) => {
      state.isLoading = true;
    },
    loadAuctionsSuccess: (state, action) => {
      state.isLoading = false;
      state.auctions = action.payload;
    },
    loadAuctionsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //Get auction by id
    getAuction: (state, action) => {
      state.auction = null;
      state.isLoading = true;
    },
    getAuctionSuccess: (state, action) => {
      state.isLoading = false;
      state.auction = action.payload;
    },
    getAuctionsSuccess: (state, action) => {
      state.isLoading = false;
      state.auctions = action.payload;
    },

    // Load auction by id
    loadAuction: (state, action) => {
      state.auction = null;
      state.isLoading = true;
    },
    loadAuctionSuccess: (state, action) => {
      state.isLoading = false;
      state.auction = action.payload;
    },

    // Create auction
    createAuction: (state) => {
      state.isLoading = true;
    },
    createAuctionSuccess: (state, action) => {
      state.isLoading = false;
      state.auctions.push(action.payload);
    },

    // Update auction
    updateAuction: (state) => {
      state.isLoading = true;
    },
    updateAuctionSuccess: (state, action) => {
      state.isLoading = false;
      state.auction = action.payload;
    },
  },
});

// Action creators
export const {
  loadAuctions,
  loadAuctionsSuccess,
  loadAuctionsFailure,
  getAuction,
  getAuctionSuccess,
  getAuctionsSuccess,
  createAuction,
  createAuctionSuccess,
  updateAuction,
  updateAuctionSuccess,
} = auctionSlice.actions;

// Selectors
export const selectAuctions = (state) => state.auction.auctions;

// Sagas
function* loadAuctionsAPI() {
  try {
    const response = yield axios.get('/auctions');
    yield put(loadAuctionsSuccess(response.data));
  } catch (error) {
    yield put(loadAuctionsFailure(error));
  }
}

function* getAuctionsSuccessAPI(action) {
  try {
    const response = yield axios.get('/auctions/name', {
      params: { name: action.payload },
    });
    yield put(getAuctionsSuccess(response.data.data));
  } catch (error) {
    console.error(error);
    yield put(loadAuctionsFailure(error));
  }
}

function* watchLoadAuctions() {
  yield takeLatest(loadAuctions.type, loadAuctionsAPI);
}

function* watchGetAuctionsSuccess() {
  yield takeLatest(getAuctionsSuccess.type, getAuctionsSuccessAPI);
}

export default function* rootSaga() {
  yield all([watchLoadAuctions(), watchGetAuctionsSuccess()]);
}

export default auctionSlice.reducer;