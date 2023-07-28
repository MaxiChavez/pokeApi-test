// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage/session";
// const reducers = combineReducers({});

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
// });

// import { configureStore } from "@reduxjs/toolkit";
// import detailSlice from "../Components/Common/Services/Slices/detailSlice";
// import searchSlice from "../Components/Common/Services/Slices/searchSlice";

// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";

// import thunk from "redux-thunk";

// const reducers = combineReducers({
//   detail: detailSlice,
//   search: searchSlice,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
// });
