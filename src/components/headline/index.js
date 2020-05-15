import * as S from "./styles";
import FacebookSVG from "../../svgs/facebook/stroke";
import TwitterSVG from "../../svgs/twitter";
import LinkedInSVG from "../../svgs/linked-in/stroke";
import PaperPlaneSVG from "../../svgs/paper-plane";
import HomepageSVG from "../../svgs/homepage";

const Headline = () => (
  <S.Headline>
    <S.HeadlineGridContainer>
      <S.SNSButtonContainer>
        <S.FacebookSVGBox href='#'>
          <FacebookSVG width={17} height={17} />
        </S.FacebookSVGBox>
        <S.TwitterSVGBox href='#'>
          <TwitterSVG width={17} height={17} />
        </S.TwitterSVGBox>
        <S.LinkedInSVGBox href='#'>
          <LinkedInSVG width={18} height={18} />
        </S.LinkedInSVGBox>
        <S.PaperPlaneSVGBox href='#'>
          <PaperPlaneSVG width={17} height={17} />
        </S.PaperPlaneSVGBox>
      </S.SNSButtonContainer>
      <S.ProfileContainer>
        <S.Profile>
          <S.Avatar
            src={
              "https://avatars0.githubusercontent.com/u/32104982?s=460&u=f4725430276813fcd0043549c006d88690b1ab8f&v=4"
            }
          ></S.Avatar>
          <S.Nickname>Atercatus</S.Nickname>
          <S.Description>
            나는 원한다. 취직 나는 원한다. 취직 나는 원한다. 취직
            <br />
            하고싶다. 일 하고싶다. 일 하고싶다. 일
          </S.Description>
        </S.Profile>
      </S.ProfileContainer>
      <S.StackBtnContainer>
        <S.StackBtn>
          <S.HomepageLinkBox href='#'>
            <HomepageSVG width={17} height={17} />
          </S.HomepageLinkBox>
        </S.StackBtn>
      </S.StackBtnContainer>
    </S.HeadlineGridContainer>
  </S.Headline>
);

export default Headline;
