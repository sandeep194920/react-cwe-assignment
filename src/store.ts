import addDays from 'date-fns/addDays'
import subMonths from 'date-fns/subMonths'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
import { Contribution } from './types/contribution'
import { VisibleDialogs } from './types/dialog'

const transformState = (
  {
    contributions,
    dialogs,
  }: { contributions: Contribution[]; dialogs: Partial<VisibleDialogs> },
  startDate: Date
) => {
  return {
    dialogs: dialogs ?? {},
    selectedContribution: null,
    contributions: contributions.map(
      (contribution: Contribution, index: number) => {
        const { tfsa, rrsp } = contribution
        contribution.total = tfsa + rrsp
        contribution.date = subMonths(startDate, index).toISOString()
        return contribution
      }
    ),
  }
}

export const createStore = async (startDate: Date) => {
  // Fetch contributions from the backend
  const contributions = await getContributions()
  return configureStore({
    reducer,
    preloadedState: transformState(
      {
        contributions,
        dialogs: {},
      },
      startDate
    ) as any,
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
