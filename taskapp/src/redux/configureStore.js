import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
// root store creation
const store = configureStore({
    reducer: rootReducer

})

export default store;