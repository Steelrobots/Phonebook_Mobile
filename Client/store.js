import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../Client/src/reducers/phonebook"


export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
})
