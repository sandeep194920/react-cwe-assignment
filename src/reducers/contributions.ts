// import { createAsyncThunk } from '@reduxjs/toolkit'
import { Action, Actions } from '../types/action'
import { Contribution, Status } from '../types/contribution'

export const contributionsDefaultState: Contribution[] = []

const contributions = (state = contributionsDefaultState, action: Action) => {
  switch (action.type) {
    case Actions.CONTRIBUTION_DELETE:
      return state.filter(
        (contribution) =>
          contribution.uuid !== action.contribution.uuid &&
          action.contribution.status === Status.Pending
      )
    default:
      return state
  }
}

export default contributions
