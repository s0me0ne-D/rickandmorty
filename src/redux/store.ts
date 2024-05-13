import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rickAndMortyApi';

export const store = configureStore({
  reducer: { [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer },
  middleware: (gDM) => gDM().concat(rickAndMortyApi.middleware),
});
