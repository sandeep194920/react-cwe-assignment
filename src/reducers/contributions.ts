import { Action, Actions } from '../types/action'
import { Contributions, Contribution, Status } from '../types/contribution'

export const contributionsDefaultState: Contributions = {}

const getContributionsList = (contributions: Contributions) => {
  return Object.values<Contribution>(contributions)
}

const contributions = (
  state: Contributions = contributionsDefaultState,
  action: Action
) => {
  switch (action.type) {
    case Actions.CONTRIBUTION_DELETE:
      return getContributionsList(state).filter(
        (contribution) =>
          contribution.uuid !== action.contribution.uuid &&
          action.contribution.status === Status.Pending
      )
    default:
      return state
  }
}

export default contributions
