import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image xlinkHref="https://exchange.strawberryswap.link/images/logo_sp.png" x="0" y="0" height="32" width="32" />
    </Svg>
  );
};

export default Icon;
