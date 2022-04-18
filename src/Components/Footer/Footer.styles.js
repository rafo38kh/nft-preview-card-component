import styled from "styled-components";
import colors from "../styles/styleVariables";

export const FooterAttr = styled.footer`
  width: 100%;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: center;
  margin: 0 auto;
  padding: 3rem 0 1rem 0;
  color: ${colors.primary};
  transition: all 0.2s;
`;

export const FooterLink = styled.a`
  &:link,
  &:visited {
    text-transform: uppercase;
    color: ${colors.cyan};
    transition: all 0.2s;
  }

  &:hover,
  &:active {
    color: ${colors.tertiary};
    font-weight: 700;
  }
`;
