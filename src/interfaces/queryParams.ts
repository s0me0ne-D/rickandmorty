export type IStatus = 'Alive' | 'Dead' | 'unknown' | '';

export interface QueryParams {
  currentPageNumber: number;
  name: string;
  status: IStatus;
}
