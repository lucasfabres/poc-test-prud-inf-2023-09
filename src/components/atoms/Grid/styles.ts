import styled from 'styled-components';

import type * as Typing from './types';
import * as extractors from './extractors';
import { query } from '../../../theme/query';
import { theme } from '../../../theme';

export type GridProps = {
  container?: boolean;
  margin?: boolean;
} & Typing.Span;

export const Base = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['container', ...Object.keys(theme.breakpoints)].includes(prop),
})<GridProps>`
  display: block;
  transition: all ease 300ms;
`;

export const Item = styled(Base)`
  ${extractors.span}

  /* 
    Um hack para aplicar o gap respeitando a quantidade
    de itens por linha.
  */
  padding: calc(var(--grid-gap) / 2) calc(var(--grid-gap) / 2);

  /*
    Essas regras de tamanho mínimo da coluna existem
    no design system da prud, infelizmente eles quebram o layout
    em telas menores, então eu comentei. Se for um problema no futuro,
    comente a linha abaixo e descomente o restante.
  */
  min-width: 0px;

  /* min-width: 4.5rem;

  ${query.min('xs')} {
    min-width: 4rem;
  }

  ${query.min('sm')} {
    min-width: 5.5rem;
  }

  ${query.min('md')} {
    min-width: 5rem;
  }

  ${query.min('lg')} {
    min-width: 7.5rem;
  } */
`;

export const Grid = styled(Base)`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  /* Mobile first */
  --grid-gap: ${(props) => props.theme.spacing.xxxs};
  --grid-columns: 4;

  ${extractors.margin}

  ${query.min('xs')} {
    --grid-gap: ${(props) => props.theme.spacing.xxs};
    --grid-columns: 8;
  }

  ${query.min('sm')} {
    --grid-gap: ${(props) => props.theme.spacing.xxs};
    --grid-columns: 8;
  }

  ${query.min('md')} {
    --grid-gap: ${(props) => props.theme.spacing.xxs};
    --grid-columns: 12;
  }

  ${query.min('lg')} {
    --grid-gap: ${(props) => props.theme.spacing.xxs};
    --grid-columns: 12;
  }
`;
