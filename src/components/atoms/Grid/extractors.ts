/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { css, type RuleSet } from 'styled-components';

import { type theme } from '../../../theme';
import { query } from '../../../theme/query';
import { type GridProps } from './styles';

export function margin(props: GridProps) {
  if (!props.margin) {
    return css``;
  }

  return css`
    --margin: ${(props) => props.theme.spacing.xs};

    margin: 0 calc(var(--margin) - var(--grid-gap) / 2);

    ${query.min('xs')} {
      --margin: 4.5rem;
    }

    ${query.min('sm')} {
      --margin: 6.5rem;
    }

    ${query.min('md')} {
      --margin: 7rem;
    }

    ${query.min('xl')} {
      --margin: 9.5rem;
    }
  `;
}

export function span(props: GridProps) {
  type Key = keyof typeof theme.breakpoints;

  const keys = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
  const spans = [props.xs, props.sm, props.md, props.lg, props.xl];

  function createBreakpoint(key: Key, core: RuleSet<object>) {
    if (key === 'xs') {
      return core;
    }

    const previous = keys[keys.indexOf(key) - 1];

    const result = css`
      ${query.min(previous)} {
        ${core}
      }
    `;

    return result;
  }

  const queries = keys.map((key, index) => {
    const span = spans[index];

    if (typeof span === 'boolean') {
      return createBreakpoint(
        key,
        css`
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
        `
      );
    }

    if (span === undefined) {
      return createBreakpoint(key, css``);
    }

    return createBreakpoint(
      key,
      css`
        flex-grow: 0;
        flex-basis: auto;

        width: calc(100% * ${span} / var(--grid-columns));
      `
    );
  });

  return queries;
}
