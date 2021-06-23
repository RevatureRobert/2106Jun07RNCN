export interface IStudent {
  firstName: string;
  lastName: string;
  phone: string;
  grade_year: string;
  gender: string;
}

export class Student implements IStudent {
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public grade_year: string,
    public gender: string
  ) {}
}
