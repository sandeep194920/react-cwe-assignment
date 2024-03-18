import { configureStore } from '@reduxjs/toolkit'
import selectedContributionSlice from './features/selectedContributionSlice'
import dialogsSlice from './features/dialogsSlice'
import contributionsSlice from './features/contributionsSlice'
import { Status } from './types/contribution'
import intialJsonState from './store.json'
import subMonths from 'date-fns/subMonths'
import addDays from 'date-fns/addDays'

const transformState = (startDate: Date) => {
  return {
    dialogs: intialJsonState.dialogs,
    selectedContribution: intialJsonState.selectedContribution,
    contributions: {
      value: intialJsonState.contributions.value.map((contribution, index) => {
        return {
          ...contribution,
          status: contribution.status as Status,
          total: contribution.tfsa + contribution.rrsp,
          date: subMonths(startDate, index).toISOString(),
        }
      }),
    },
  }
}

export const store = configureStore({
  reducer: {
    selectedContribution: selectedContributionSlice,
    dialogs: dialogsSlice,
    contributions: contributionsSlice,
  },
  preloadedState: transformState(addDays(new Date(), 15)),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
