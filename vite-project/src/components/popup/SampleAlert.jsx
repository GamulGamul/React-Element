const SampleAlert = ({ handleRadioChange }) => {
  // const handleChange = (state, e) => {
  //   handleRadioChange(state); // onChange 이벤트 처리, fade-in과는 무관하게 처리
  // };

  return (
    <>
      <label>
        텍스트1
        <input
          type="radio"
          id="id1112341"
          name="name111"
          onChange={(e) => handleRadioChange(true, e)}
        />
      </label>

      <label>
        텍스트2
        <input
          type="radio"
          id="id22232"
          name="name111"
          onChange={(e) => handleRadioChange(true, e)}
        />
      </label>

      <label>
        텍스트3
        <input
          type="radio"
          id="id3124124"
          name="name111"
          onChange={(e) => handleRadioChange(true, e)}
        />
      </label>
    </>
  );
};
export default SampleAlert;
