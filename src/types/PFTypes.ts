export interface IObject {
  id: number;
  title: string;
  page: string;
  linkrep: string;
  description: string;
  stack: string[];
}

export interface IPFtype {
  PFjson: IObject[];
  loading: boolean;
  error: string | null;
  isEdit: boolean;
  editWorkId: "";
}
