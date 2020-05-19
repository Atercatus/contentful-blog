import * as S from "./styles";

const CircleSpinner = ({
  width = 100,
  height = 100,
  stroke = "#2f3d4c",
  strokeWidth = "10",
  strokeLinecap = "square",
}) => {
  const center = parseInt(width / 2);

  return (
    <S.CircleSpinner
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <S.Circle
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        cx={center}
        cy={center}
        r={center - strokeWidth}
      />
    </S.CircleSpinner>
  );
};

export default CircleSpinner;
