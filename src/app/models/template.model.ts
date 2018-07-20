export class Template {
  id?: number;
  name: string;
  description: string;
  authorId: number;
  authorInfo: string;
  videoList: Array<string>;
  courseLink?: string;
  roles: Array<{name: string, description: string}>;
  additional: Array<string>;
  resources: Array<string>;
  projectCount: number;
  isClose: boolean;
  categories: Array<string>;
}
