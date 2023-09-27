import { styled } from "styled-components";
import { theme } from "../../../theme";

export interface TypographyProps {
  // Required
  size: keyof (typeof theme)["fontSizes"];
}

export const Typography = styled.span<TypographyProps>`
  font-size: ${({ size }) => theme.fontSizes[size]};
`;
