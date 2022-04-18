import { useState } from "react";

import * as C from "./Card.styles";

import ethereum from "../../images/icon-ethereum.svg";
import clock from "../../images/icon-clock.svg";
import avatar from "../../images/image-avatar.png";

const Card = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <C.Box>
      <C.Equilibrium
        onMouseEnter={() => setIsOverlayVisible(true)}
        onMouseLeave={() => setIsOverlayVisible(false)}
      >
        {isOverlayVisible && <C.Overlay />}
      </C.Equilibrium>
      <C.Title>Equilibrium #3429</C.Title>
      <C.SecondaryTxt>
        Our Equilibrium collection promotes balance and calm.
      </C.SecondaryTxt>
      <C.FlexRowBlock>
        <C.FlexRowBlock>
          <C.Icon src={ethereum} alt="ethereum" />
          <C.EthereumTxt>0.041 ETH</C.EthereumTxt>
        </C.FlexRowBlock>

        <C.FlexRowBlock>
          <C.Icon src={clock} primary alt="clock" />
          <C.SecondaryTxt>3 days left</C.SecondaryTxt>
        </C.FlexRowBlock>
      </C.FlexRowBlock>
      <C.Devider />
      <C.HumanWrapper>
        <C.Human src={avatar} alt="Jules Wyvern avatar" />
        <C.SecondaryTxt>
          Creation of <C.Name>Jules Wyvern</C.Name>
        </C.SecondaryTxt>
      </C.HumanWrapper>
    </C.Box>
  );
};

export default Card;
