export type WithChildren<T = {}> = {
  children?: JSX.Element | JSX.Element[] | string;
} & T;
