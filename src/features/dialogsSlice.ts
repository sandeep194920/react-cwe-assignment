import { createSlice } from '@reduxjs/toolkit'
import { Dialogs } from '../types/dialog'

const initialState = {
  [Dialogs.contributionEdit]: false,
  [Dialogs.contributionDelete]: false,
  [Dialogs.ContributionDeleteConfirm]: false,
}

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    appEdit(state) {
      state[Dialogs.contributionEdit] = true
    },
    contributionEditDismiss(state) {
      state[Dialogs.contributionEdit] = false
      state[Dialogs.contributionDelete] = false
      state[Dialogs.ContributionDeleteConfirm] = false
    },
    contributionDeleteConfirm(state) {
      state[Dialogs.ContributionDeleteConfirm] = true
    },
    contributionDeleteComplete(state) {
      state[Dialogs.contributionDelete] = false
      state[Dialogs.ContributionDeleteConfirm] = false
      state[Dialogs.contributionEdit] = false
    },
  },
})

export const {
  appEdit,
  contributionDeleteConfirm,
  contributionEditDismiss,
  contributionDeleteComplete,
} = dialogsSlice.actions

export default dialogsSlice.reducer
