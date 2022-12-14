import { IconType } from "react-icons";

export interface DataType {
  id: number;
  categoris?: string;
  ctgdetail?: string;
  name?: string;
  title: string;
  subtitle: string;
  number: number;
  numIcon: IconType;
  btn: string;
  count: number;
}
