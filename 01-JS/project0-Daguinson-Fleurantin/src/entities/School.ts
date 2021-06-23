export interface ISchool {
  schoolName?: string;
  district?: string;
  mascot?: string;
}

export class School implements ISchool {
  constructor(
    public schoolName?: string,
    public district?: string,
    public mascot?: string
  ) {}
}
