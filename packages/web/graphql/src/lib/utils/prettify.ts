/* eslint-disable @typescript-eslint/ban-types */
export type Prettify<T> = T extends {}
  ? T extends infer Obj
    ? T extends Date
      ? Date
      : { [K in keyof Obj]: Prettify<Obj[K]> } & {}
    : never
  : T;
