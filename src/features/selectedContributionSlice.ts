import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Contribution } from '../types/contribution'

type initialStateT = {
  value: Nullable<Contribution>
}
// in redux toolkit, we can't directly set the state to a variable,
// hence defining it as object and using value prop
const initialState: initialStateT = {
  value: null,
}

const selectedContributionSlice = createSlice({
  name: 'selectedContribution',
  initialState,
  reducers: {
    contributionSelect(state, action: PayloadAction<Nullable<Contribution>>) {
      state.value = action ? action.payload : null
    },
  },
})

export const { contributionSelect } = selectedContributionSlice.actions
export default selectedContributionSlice.reducer
