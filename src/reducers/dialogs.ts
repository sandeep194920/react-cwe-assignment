import { Action, Actions } from '../types/action'
import { VisibleDialogs, Dialogs } from '../types/dialog'

const defaultState = {
  [Dialogs.contributionEdit]: false,
  [Dialogs.contributionDelete]: false,
  [Dialogs.ContributionDeleteConfirm]: false,
}

const dialogs = (state: VisibleDialogs = defaultState, action: Action) => {
  switch (action.type) {
    case Actions.APP_EDIT:
      return {
        ...state,
        [Dialogs.contributionEdit]: true,
      }
    case Actions.CONTRIBUTIONEDIT_DISMISS:
      return {
        ...state,
        [Dialogs.contributionEdit]: false,
        [Dialogs.contributionDelete]: false,
      }
    case Actions.CONTRIBUTION_DELETE_CONFIRM:
      return {
        ...state,
        [Dialogs.ContributionDeleteConfirm]: true,
      }
    case Actions.CONTRIBUTION_DELETE:
      return {
        ...state,
        [Dialogs.contributionDelete]: true,
        [Dialogs.ContributionDeleteConfirm]: false,
        [Dialogs.contributionEdit]: false,
      }
    default:
      return state
  }
}

export default dialogs
