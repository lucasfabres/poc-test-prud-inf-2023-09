import styled, { css } from "styled-components";

const Intents = {
  primary: css``,
  secondary: css``,
} as const;

const Sizes = {
  small: css``,
  medium: css``,
  large: css``,
} as const;

export type ButtonProps = Partial<{
  intent: keyof typeof Intents;
  size: keyof typeof Sizes;
}>;

export const Button = styled.button<ButtonProps>`
  /* Object displacement */
  display: flex;
  width: fit-content;

  transition: all ease 300ms;

  /* Alignment */
  align-items: center;
  justify-content: center;

  /* Icon spacing */
  gap: 0.5rem;

  /* font */
  font-family: "Open Sans";
  font-weight: 600;

  ${({ intent }) => Intents[intent ?? "primary"]};
  ${({ size }) => Sizes[size ?? "medium"]};
`;
