import TextFiled from "./TextFiled";
import TextFiledWrap from "./TextFiledWrap";

const FormData = () => {
  return (
    <>
      <form>
        <TextFiledWrap
          label="아이디 입력"
          errorMessege="아이디 중복검사를 진행하세요."
          id="userId"
        >
          <TextFiled
            type="text"
            placeholder="아이디를 입력하세요."
            valueError={true}
          />
        </TextFiledWrap>
        <TextFiledWrap
          label="비밀번호 입력"
          successMessege="아이디 중복검사를 진행하세요."
          id="usePassword"
        >
          <TextFiled
            type="password"
            placeholder="비밀번호를 입력하세요."
            valueSuccess={true}
          />
        </TextFiledWrap>

        <TextFiledWrap
          errorMessege={true}
          successMessege="아이디 중복검사를 진행하세요."
        >
          <TextFiled type="text" />
          <TextFiled type="text" />
          <TextFiled type="text" />
        </TextFiledWrap>
      </form>
    </>
  );
};

export default FormData;
