import { configureStore } from '@reduxjs/toolkit'
// ...
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import songReducer from './songSlice'
 export const store = configureStore({
  reducer: {
    songs:songReducer
  },
  middleware:(getDefaultMiddleware) =>getDefaultMiddleware({serializableCheck: {
    // Ignore these action types
    ignoredActions: ['songs/receivedSongs'],
    // Ignore these field paths in all actions
    ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    // Ignore these paths in the state
    ignoredPaths: ['songs.songs'],
  },})
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch