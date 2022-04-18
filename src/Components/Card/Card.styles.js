import styled from "styled-components";
import colors from "../styles/styleVariables";

import equilibrium from "../../images/image-equilibrium.jpg";
import view from "../../images/icon-view.svg";

export const Box = styled.div`
  background-color: ${colors.secondary};
  width: 87%;
  max-width: 40rem;
  padding: 2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 255, 247, 0.5);
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: url(${view});
  }
`;

export const Equilibrium = styled.div`
  border-radius: 0.7rem;
  background-image: url(${equilibrium});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 30rem;
  position: relative;
`;

export const Title = styled.h1`
  color: ${colors.tertiary};
  font-size: 2.2rem;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: ${colors.cyan};
  }
`;

export const SecondaryTxt = styled.p`
  color: ${colors.primary};
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
`;

export const FlexRowBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const HumanWrapper = styled(FlexRowBlock)`
  justify-content: unset;
`;

export const EthereumTxt = styled(SecondaryTxt)`
  font-weight: 600;
  color: ${colors.cyan};
`;

export const Icon = styled.img`
  width: ${(props) => (props.primary ? "2rem" : "1rem")};
`;

export const Devider = styled.span`
  width: 100%;
  padding: 0.03rem;
  background-color: ${colors.primary};
`;

export const Human = styled.img`
  width: 3.5rem;
  border-radius: 50%;
  border: 0.1rem solid ${colors.tertiary};
`;

export const Name = styled.span`
  color: ${colors.tertiary};
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: ${colors.cyan};
  }
`;
