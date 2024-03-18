export enum Status {
  Pending = 'PENDING',
  Cancelled = 'CANCELLED',
  Processed = 'PROCESSED',
}

// export type Status = 'PENDING' | 'CANCELLED' | 'PROCESSED'

export interface Contribution {
  uuid: string
  status: Status
  total?: number
  tfsa: number
  rrsp: number
  date?: string
}
export interface WithContribution {
  contribution: Contribution
}

export interface Contributions {
  contributions: Contribution[]
}

export interface WithContributions {
  contributions: Contribution[]
}

export interface WithSelectedContribution {
  selectedContribution: Nullable<Contribution>
}
