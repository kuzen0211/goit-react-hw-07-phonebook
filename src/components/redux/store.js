// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { filterSlice } from './filter.slice';
// import { persistContactsReducer } from './contact.slice';

// export const store = configureStore({
//   reducer: {
//     contacts: persistContactsReducer,
//     filter: filterSlice.reducer,
//   },
//   devTools: true,
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },

// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
