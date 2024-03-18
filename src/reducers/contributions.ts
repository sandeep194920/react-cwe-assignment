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

    // return state
    // case 'contributions/deleteItemOnBackend/fulfilled':
    //   return state

    default:
      return state
  }
}

// // Define the async thunk
// export const deleteItemOnBackend = createAsyncThunk(
//   'CONTRIBUTION_DELETE',
//   async (itemId, thunkAPI) => {
//     console.log('REACHED')
//     try {
//       const response = await fetch(`${__DB_URL__}/contributions/${itemId}`, {
//         method: 'PATCH',
//       })
//       if (!response.ok) {
//         throw new Error('Failed to delete item on backend')
//       }
//       return itemId
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )

export default contributions
