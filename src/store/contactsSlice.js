import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://dummyapi.io/data/v1/user`, {
        headers: { "app-id": "64fc4a747b1786417e354f31" },
      });
      const contactsData = res.json();
      return contactsData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertContacts = createAsyncThunk(
  "contacts/insertContacts",
  async (data, thunkAPI) => {
    try {
      const res = await fetch(`https://dummyapi.io/data/v1/user/create`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "app-id": "64fc4a747b1786417e354f31",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { contacts: [], isLoading: false },
  reducers: {},
  extraReducers: {
    //Get contact
    [getContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [getContacts.rejected]: (state, action) => {
      state.isLoading = false;
    },

    //insert contact
    [insertContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [insertContacts.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;