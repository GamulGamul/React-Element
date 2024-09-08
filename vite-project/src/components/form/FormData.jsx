import TextFiled from "./TextFiled";

const FormData = () => {
  return (
    <>
      <form>
        <TextFiled
          label="아이디 입력"
          type="text"
          placeholder="아이디를 입력하세요."
          id="userId"
          valueError={true}
          errorMessege="아이디 중복검사를 진행하세요."
        />
        <TextFiled
          label="비밀번호 입력"
          type="password"
          placeholder="비밀번호를 입력하세요."
          id="usePassword"
          errorMessege={true}
          successMessege="아이디 중복검사를 진행하세요."
        />
      </form>
    </>
  );
};

export default FormData;
