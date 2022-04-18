import { useState } from "react";

import {
  Box,
  Equilibrium,
  Title,
  SecondaryTxt,
  EthereumTxt,
  FlexRowBlock,
  HumanWrapper,
  Icon,
  Devider,
  Human,
  Name,
  Overlay,
} from "./Card.styles";

import ethereum from "../../images/icon-ethereum.svg";
import clock from "../../images/icon-clock.svg";
import avatar from "../../images/image-avatar.png";

const Card = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <Box>
      <Equilibrium
        onMouseEnter={() => setIsOverlayVisible(true)}
        onMouseLeave={() => setIsOverlayVisible(false)}
      >
        {isOverlayVisible && <Overlay />}
      </Equilibrium>
      <Title>Equilibrium #3429</Title>
      <SecondaryTxt>
        Our Equilibrium collection promotes balance and calm.
      </SecondaryTxt>

      <FlexRowBlock>
        <FlexRowBlock>
          <Icon src={ethereum} alt="ethereum" />
          <EthereumTxt>0.041 ETH</EthereumTxt>
        </FlexRowBlock>

        <FlexRowBlock>
          <Icon src={clock} primary alt="clock" />
          <SecondaryTxt>3 days left</SecondaryTxt>
        </FlexRowBlock>
      </FlexRowBlock>

      <Devider />

      <HumanWrapper>
        <Human src={avatar} alt="Jules Wyvern avatar" />
        <SecondaryTxt>
          Creation of <Name>Jules Wyvern</Name>
        </SecondaryTxt>
      </HumanWrapper>
    </Box>
  );
};

export default Card;
