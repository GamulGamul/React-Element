import TextFiled from "./TextFiled";
import TextFiledWrap from "./TextFiledWrap";

const FormData = () => {
  return (
    <>
      <form>
        <TextFiledWrap
          id="userId"
          label="아이디 입력"
          errorMessege="아이디 중복검사를 진행하세요."
        >
          <TextFiled
            id="userId"
            type="text"
            placeholder="아이디를 입력하세요."
            successValue={true}
          />
          <button type="button">조회</button>
        </TextFiledWrap>
        <TextFiledWrap
          id="usePassword"
          label="비밀번호 입력"
          successMessege="아이디 중복검사를 진행하세요."
        >
          <TextFiled
            id="usePassword"
            type="password"
            placeholder="비밀번호를 입력하세요."
            errorValue={true}
          />
        </TextFiledWrap>

        <TextFiledWrap
          successMessege="아이디 중복검사를 진행하세요."
          label="전화번호 입력"
        >
          <TextFiled type="text" title="번호 첫번째 3자리" errorValue={true} />
          <TextFiled type="text" title="번호 두번째 4자리" errorValue={true} />
          <TextFiled type="text" title="번호 세번째 4자리" errorValue={true} />
        </TextFiledWrap>
      </form>
    </>
  );
};

export default FormData;
