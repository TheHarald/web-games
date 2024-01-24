import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { aliasGameReducer } from "../modules/alias/services/alias-reducer";

const rootReducer = combineReducers({
  aliasGame: aliasGameReducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
