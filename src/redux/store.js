import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import { contactsSlice } from "./contacts/contacts.slice";
import { filterSlice } from "./filter/filter.slice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
  },
});
