export type IStatus = 'Alive' | 'Dead' | 'unknown' | '';
export type IGender = 'Female' | 'Male' | 'Genderless' | 'unknown' | '';
export interface QueryParams {
  currentPageNumber: number;
  name: string;
  status: IStatus;
  gender: IGender;
}
