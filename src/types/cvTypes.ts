export interface ICVtype {
  CVjson: ICap[];
  loading: boolean;
  error: string | null;
}

export interface ICap {
  person: Person[];
  contacts: Contacts[];
  position: Position[];
  hobby: string[];
  languages: string[];
  hardskils: string[];
  experience: Experience[];
  education: Education[];
}

export interface Contacts {
  photo: string;
  tel: string;
  mail: string;
  telegram: string;
  github: string;
  linkedin: string;
}

export interface Education {
  year: string;
  institution: string;
  department: string;
  specialization: string;
}

export interface Experience {
  id: number;
  year: string;
  organization: string;
  position: string;
  description: string;
}

export interface Person {
  firstname: string;
  lastname: string;
  patronymic: string;
  age: string;
  city: string;
}

export interface Position {
  position: string;
  employment: string;
  schedule: string;
  about: string;
}
