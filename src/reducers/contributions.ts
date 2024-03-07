import { Action, Actions } from '../types/action'
import { Contributions, Contribution, Status } from '../types/contribution'

const initialState: Contributions = {}
const contributions = (state: Contributions = initialState, action: Action) => {
  switch (action.type) {
    case Actions.CONTRIBUTION_DELETE:
      return Object.values<Contribution>(state).filter(
        (contribution) =>
          contribution.uuid !== action.contribution.uuid &&
          action.contribution.status === Status.Pending
      )
    default:
      return state
  }
}

export default contributions
