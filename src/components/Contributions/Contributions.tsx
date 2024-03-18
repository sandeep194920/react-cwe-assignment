import List from '@mui/material/List'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getList } from '../../selectors/contributions'
import Contribution from '../Contribution/Contribution'
import { useGetAllContributionsQuery } from '../../features/async/contributions'

import subMonths from 'date-fns/subMonths'
import { setContributions } from '../../features/contributionsSlice'

const Contributions: React.FC = () => {
  const contributions = useSelector(getList)
  const dispatch = useDispatch()
  const { data } = useGetAllContributionsQuery()

  useEffect(() => {
    if (data) {
      // Transform data to include total and date properties
      const transformedData = data.map((contribution, index) => ({
        ...contribution,
        total: contribution.tfsa + contribution.rrsp,
        date: subMonths(new Date(), index).toISOString(),
      }))
      dispatch(setContributions(transformedData)) // Dispatch action to update state
    }
  }, [data, dispatch])

  return (
    <List>
      {contributions.map((contribution) => (
        <Contribution key={contribution.uuid} contribution={contribution} />
      ))}
    </List>
  )
}

export default Contributions
