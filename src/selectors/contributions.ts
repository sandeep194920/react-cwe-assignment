import { Contribution } from '../types/contribution'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../reduxStore'

export const get = (state: RootState) => state.contributions.value

export const getList = createSelector(get, (contributions) => {
  return Object.values<Contribution>(contributions)
})

export const getSelected = ({ selectedContribution }: RootState) =>
  selectedContribution.value
