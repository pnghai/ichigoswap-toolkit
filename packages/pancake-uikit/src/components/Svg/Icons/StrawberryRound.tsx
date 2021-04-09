import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image xlinkHref="https://exchange.strawberryswap.link/images/logo_sp.png" x="0" y="0" height="90" width="90" />
    </Svg>
  );
};

export default Icon;
