import { configureStore } from '@reduxjs/toolkit'
import selectedContributionReducer from './features/selectedContributionSlice'
import dialogsReducer from './features/dialogsSlice'
import contributionsReducer from './features/contributionsSlice'
import { contribututionsApi } from './features/async/contributions'

export const store = configureStore({
  reducer: {
    selectedContribution: selectedContributionReducer,
    dialogs: dialogsReducer,
    contributions: contributionsReducer,
    // for async
    [contribututionsApi.reducerPath]: contribututionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
    getDefaultMiddleware().concat(contribututionsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
