import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { prop } from "@typegoose/typegoose";

export enum TopLavelCategory {
  Courses,
  Services,
  Books,
  Products
}

export class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

export interface TopPageModel extends Base { }

export class TopPageModel extends TimeStamps {

  @prop({ enum: TopLavelCategory })
  firstCategory: TopLavelCategory;

  @prop()
  secondCategory: string;

  @prop({unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => HhData })
  hh?: HhData;

  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];

  @prop()
  seText: string;

  @prop()
  tagsTitle: string;

  @prop({type: () => [String]})
  tags: string[];
}
