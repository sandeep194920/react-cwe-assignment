import addDays from 'date-fns/addDays'
import subMonths from 'date-fns/subMonths'
import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducers'
// We don't need this ./store.json static data anymore as we are fetching data from backend API
// import preloadedState from './store.json'
import { Contribution, Contributions } from './types/contribution'
import { dialogsDefaultState } from './reducers/dialogs'
import { State } from './types/store'
import { VisibleDialogs } from './types/dialog'

type InitialState = {
  contributions: Contributions
  dialogs: VisibleDialogs
  selectedContribution: Nullable<string>
}

const transformState = (data: State, startDate: Date): InitialState => {
  const { contributions, dialogs } = data
  const transformedContributions = Object.values(contributions).reduce(
    (
      result: Contributions,
      { uuid, status, tfsa, rrsp }: Contribution,
      index: number
    ) => ({
      ...result,
      [uuid]: {
        uuid,
        status,
        tfsa,
        rrsp,
        total: tfsa + rrsp,
        date: subMonths(startDate, index).toISOString(),
      },
    }),
    {}
  )

  return {
    dialogs,
    selectedContribution: null,
    contributions: transformedContributions,
  }
}

export const createStore = async (startDate: Date) => {
  // Fetch contributions from the backend
  const contributions = await getContributions()
  console.log('The contributions are', contributions)

  const data: State = {
    contributions: contributions as Contributions,
    dialogs: dialogsDefaultState,
    selectedContribution: null,
  }
  console.log(data)
  return configureStore({
    reducer,
    preloadedState: transformState(data, startDate) as any,
  })
}

// defined this in vite.config.ts
declare const __DB_URL__: string
const getContributions = async () => {
  const data = await fetch(`${__DB_URL__}/contributions`)
  const contributions = await data.json()
  return contributions
}

const store = await createStore(addDays(new Date(), 15))

export default store
