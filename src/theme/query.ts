/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { theme } from './index';

interface CreateOptions {
  type: 'min' | 'max';
  breakpoint: keyof typeof theme.breakpoints;
  direction?: 'portrait' | 'landscape';
  screen?: boolean;
}

function create({ screen = true, ...options }: CreateOptions): string {
  const { type, breakpoint, direction } = options;

  const mediaType = screen ? 'screen and ' : '';
  const mediaDirection = direction ? ` and (orientation: ${direction})` : '';

  return `@media ${mediaType} (${type}-width: ${theme.breakpoints[breakpoint]}px)${mediaDirection}`;
}

function min(breakpoint: keyof typeof theme.breakpoints): string {
  return create({ type: 'min', breakpoint });
}

function max(breakpoint: keyof typeof theme.breakpoints): string {
  return create({ type: 'max', breakpoint });
}

export const query = {
  min,
  max,
  create,
};
