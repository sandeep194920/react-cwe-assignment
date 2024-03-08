export enum Dialogs {
  contributionEdit = 'contributionEdit',
  contributionDelete = 'contributionDelete',
  ContributionDeleteConfirm = 'contributionDeleteConfirm',
}
export type VisibleDialogs = Record<Dialogs, boolean>

export interface WithDialogs {
  dialogs: VisibleDialogs
}
