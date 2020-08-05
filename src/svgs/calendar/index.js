import * as S from "./styles";

const CalendarSVG = ({ width = 24, height = 24 }) => {
  return (
    <S.CalendarSVG
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path d='M20 19h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm16-14v22h-24v-22h24zm-2 6h-20v14h20v-14zm-8 8h-4v4h4v-4zm-6-6h-4v4h4v-4z' />
    </S.CalendarSVG>
  );
};

export default CalendarSVG;
