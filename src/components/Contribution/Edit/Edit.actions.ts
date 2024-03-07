import { Actions } from '../../../types/action'
import { Contribution } from '../../../types/contribution'

export const dismiss = () => ({
  type: Actions.CONTRIBUTIONEDIT_DISMISS,
})

export const confirmRemove = () => ({
  type: Actions.CONTRIBUTION_DELETE_CONFIRM,
})

export const remove = (contribution: Contribution) => ({
  contribution,
  type: Actions.CONTRIBUTION_DELETE,
})
