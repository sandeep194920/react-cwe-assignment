import {
  ContributionSelect,
  ContributionEdit,
  ContributionEditDismiss,
  ContributionDelete,
  ContributionDeleteConfirm,
} from './action/contributions'

export enum Actions {
  APP_EDIT = 'APP_EDIT',
  CONTRIBUTIONEDIT_DISMISS = 'CONTRIBUTIONEDIT_DISMISS',
  CONTRIBUTION_SELECT = 'CONTRIBUTION_SELECT',
  CONTRIBUTION_DELETE_CONFIRM = 'CONTRIBUTION_DELETE_CONFIRM',
  CONTRIBUTION_DELETE = 'CONTRIBUTION_DELETE',
}

export type Action =
  | ContributionEdit
  | ContributionEditDismiss
  | ContributionSelect
  | ContributionDelete
  | ContributionDeleteConfirm
