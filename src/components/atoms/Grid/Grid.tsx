import * as S from './styles';

export type GridProps = S.GridProps;

export const Grid = (props: React.PropsWithChildren<GridProps>) => {
  if (props.container) {
    return <S.Grid className="grid-container" {...props} />;
  }

  return <S.Item className="grid-item" {...props} />;
};
