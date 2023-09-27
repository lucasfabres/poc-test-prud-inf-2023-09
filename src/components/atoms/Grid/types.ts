type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type Span = Partial<{
  xs: IntRange<0, 5> | boolean;
  sm: IntRange<0, 9> | boolean;
  md: IntRange<0, 9> | boolean;
  lg: IntRange<0, 13> | boolean;
  xl: IntRange<0, 13> | boolean;
}>;
