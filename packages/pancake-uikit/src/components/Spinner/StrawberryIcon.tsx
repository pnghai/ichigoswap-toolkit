import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image xlinkHref="https://exchange.strawberryswap.link/images/logo_sp.png" x="0" y="0" height="128" width="128" />
      </svg>
    </Svg>
  );
};

export default Icon;
