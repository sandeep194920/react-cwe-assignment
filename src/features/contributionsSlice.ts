import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Contribution } from '../types/contribution'

type initialStateT = {
  value: Contribution[]
}

const initialState: initialStateT = {
  value: [],
}

const contributionsSlice = createSlice({
  name: 'contributions',
  initialState,
  reducers: {
    contributionDelete(state, action: PayloadAction<Contribution>) {
      state.value = state.value.filter(
        (contribution) => contribution.uuid !== action.payload.uuid
      )
    },
  },
})

export const { contributionDelete } = contributionsSlice.actions
export default contributionsSlice.reducer
