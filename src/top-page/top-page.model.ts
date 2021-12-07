export enum TopLavelCategory {
  Courses,
  Services,
  Books,
  Products
}

export class TopPageModel {
  firstCategory: TopLavelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seText: string;
  tagsTitle: string;
  tags: string[];
}
