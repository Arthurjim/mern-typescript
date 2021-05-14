export interface Video{
  _id?:string;
  url:string;
  title:string;
  description:string,
  createdAt?:string | Date;
  updatedAt?:string | Date;
}