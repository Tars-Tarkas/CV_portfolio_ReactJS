declare module cvtype {
  export interface Person {
    firstname: string;
    lastname: string;
    patronymic: string;
    age: string;
    city: string;
  }

  export interface Contact {
    photo: string;
    tel: string;
    mail: string;
    telegram: string;
    github: string;
    linkedin: string;
  }

  export interface Position {
    position: string;
    employment: string;
    schedule: string;
    about: string;
  }

  export interface Experience {
    id: number;
    year: string;
    organization: string;
    position: string;
    description: string;
  }

  export interface Education {
    year: string;
    institution: string;
    department: string;
    specialization: string;
  }

  export interface RootObject {
    person: Person[];
    contacts: Contact[];
    position: Position[];
    hobby: string[];
    languages: string[];
    hardskils: string[];
    experience: Experience[];
    education: Education[];
    CV: [];
    loading: boolean;
  }
}

export { cvtype };
