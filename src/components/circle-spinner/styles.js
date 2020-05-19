import styled, { keyframes } from "styled-components";
import { getDashValue } from "./helper/circle-dash-helper";

export const STROKE_WIDTH = 10;

const svgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100%{
    transform: rotateZ(360deg);
  }
`;

export const CircleSpinner = styled.svg`
  width: ${(props) => ` ${props.width}px`};
  height: ${(props) => ` ${props.height}px`};

  animation: 2s linear infinite ${svgAnimation};
`;

export const Circle = styled.circle`
  fill: transparent;
  stroke: ${(props) => props.stroke};
  stroke-width: ${(props) => props.strokeWidth};
  stroke-linecap: ${(props) => props.strokeLinecap};
  transform-origin: center;
  stroke-dasharray: ${(props) => getDashValue(props.r, 1)};

  stroke-dashoffset: ${(props) => getDashValue(props.r, 0.24)};
  animation: 1.4s ease-in-out infinite both
    ${(props) => getSpinAnimation(props.r)};
`;

function getSpinAnimation(radius) {
  return keyframes`
    0%{
      stroke-dashoffset:  ${getDashValue(radius, 0.95)};

      transform: rotate(0);
    }

    50%{
      stroke-dashoffset: ${getDashValue(radius, 0.24)};

      transform: rotate(45deg);
    }

    100%{
      stroke-dashoffset:  ${getDashValue(radius, 0.95)};

      transform: rotate(360deg);
    }
  `;
}
