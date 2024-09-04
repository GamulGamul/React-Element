import Slide from "./Slide";
import slideImg from "../../assets/thum_images.jpg";

const slideList = [
  {
    id: "slide-1",
    src: `${slideImg}`,
  },
  {
    id: "slide-2",
    src: `${slideImg}`,
  },
  {
    id: "slide-3",
    src: `${slideImg}`,
  },
];

const SlideData = () => {
  return (
    <>
      <Slide slideList={slideList} />
    </>
  );
};

export default SlideData;
