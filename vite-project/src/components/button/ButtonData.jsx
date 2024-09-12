import ButtonList from "./ButtonList";

function btnClickHandler() {
  console.log("click");
}

const primaryMediumSamples = [
  { label: "Primary Medium1", className: "primary", onClick: btnClickHandler },
  {
    label: "Primary Medium2",
    className: "primary left-plus",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Medium3",
    className: "primary right-plus",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Medium4",
    className: "primary down",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Medium5",
    className: "primary left-plus down",
    onClick: btnClickHandler,
    disabled: true,
  },
];

const primaryNormalSamples = [
  {
    label: "Primary Normal1",
    className: "primary normal",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Normal2",
    className: "primary normal left-plus",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Normal3",
    className: "primary normal right-plus",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Normal4",
    className: "primary normal down",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Normal5",
    className: "primary normal plus-down",
    onClick: btnClickHandler,
  },
];

const primarySmallSamples = [
  {
    label: "Primary Small1",
    className: "primary small",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Small2",
    className: "primary small left-plus",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Small3",
    className: "primary small right-plus",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Small4",
    className: "primary small down",
    onClick: btnClickHandler,
  },
  {
    label: "Primary Small5",
    className: "primary small plus-down",
    onClick: btnClickHandler,
  },
];

const secondaryMediumSamples = [
  {
    label: "secondary Medium1",
    className: "secondary",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Medium2",
    className: "secondary left-plus",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Medium3",
    className: "secondary right-plus",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Medium4",
    className: "secondary down",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Medium5",
    className: "secondary plus-down",
    onClick: btnClickHandler,
    disabled: true,
  },
];

const secondaryNormalSamples = [
  {
    label: "secondary Normal1",
    className: "secondary normal",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Normal2",
    className: "secondary normal left-plus",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Normal3",
    className: "secondary normal right-plus",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Normal4",
    className: "secondary normal down",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Normal5",
    className: "secondary normal plus-down",
    onClick: btnClickHandler,
  },
];

const secondarySmallSamples = [
  {
    label: "secondary Small1",
    className: "secondary small",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Small2",
    className: "secondary small left-plus",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Small3",
    className: "secondary small right-plus",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Small4",
    className: "secondary small down",
    onClick: btnClickHandler,
  },
  {
    label: "secondary Small5",
    className: "secondary small plus-down",
    onClick: btnClickHandler,
  },
];

// anchor
const primaryMediumAnchorSamples = [
  { label: "Primary Medium1", className: "primary", to: "/", as: "a" },
  {
    label: "Primary Medium2",
    className: "primary left-plus",
    to: "/",
    as: "a",
  },
  {
    label: "Primary Medium3",
    className: "primary right-plus",
    to: "/",
    as: "a",
  },
  { label: "Primary Medium4", className: "primary down", to: "/", as: "a" },
  {
    label: "Primary Medium5",
    className: "primary plus-down",
    to: "/",
    as: "a",
    disabled: true,
  },
];

const primaryNormalAnchorSamples = [
  { label: "Primary Normal1", className: "primary normal", to: "/", as: "a" },
  {
    label: "Primary Normal2",
    className: "primary normal left-plus",
    to: "/",
    as: "a",
  },
  {
    label: "Primary Normal3",
    className: "primary normal right-plus",
    to: "/",
    as: "a",
  },
  {
    label: "Primary Normal4",
    className: "primary normal down",
    to: "/",
    as: "a",
  },
  {
    label: "Primary Normal5",
    className: "primary normal plus-down",
    to: "/",
    as: "a",
  },
];

const primarySmallAnchorSamples = [
  { label: "Primary Small1", className: "primary small", to: "/", as: "a" },
  {
    label: "Primary Small2",
    className: "primary small left-plus",
    to: "/",
    as: "a",
  },
  {
    label: "Primary Small3",
    className: "primary small right-plus",
    to: "/",
    as: "a",
  },
  {
    label: "Primary Small4",
    className: "primary small down",
    to: "/",
    as: "a",
  },
  {
    label: "Primary Small5",
    className: "primary small plus down",
    to: "/",
    as: "a",
  },
];

const secondaryMediumAnchorSamples = [
  { label: "secondary Medium1", className: "secondary", to: "/", as: "a" },
  {
    label: "secondary Medium2",
    className: "secondary left-plus",
    to: "/",
    as: "a",
  },
  {
    label: "secondary Medium3",
    className: "secondary right-plus",
    to: "/",
    as: "a",
  },
  { label: "secondary Medium4", className: "secondary down", to: "/", as: "a" },
  {
    label: "secondary Medium5",
    className: "secondary plus-down",
    to: "/",
    as: "a",
    disabled: true,
  },
];

const secondaryNormalAnchorSamples = [
  {
    label: "secondary Normal1",
    className: "secondary normal",
    to: "/",
    as: "a",
  },
  {
    label: "secondary Normal2",
    className: "secondary normal left-plus",
    to: "/",
    as: "a",
  },
  {
    label: "secondary Normal3",
    className: "secondary normal right-plus",
    to: "/",
    as: "a",
  },
  {
    label: "secondary Normal4",
    className: "secondary normal down",
    to: "/",
    as: "a",
  },
  {
    label: "secondary Normal5",
    className: "secondary normal plus-down",
    to: "/",
    as: "a",
  },
];

const secondarySmallAnchorSamples = [
  { label: "secondary Small1", className: "secondary small", to: "/", as: "a" },
  {
    label: "secondary Small2",
    className: "secondary small left-plus",
    to: "/",
    as: "a",
  },
  {
    label: "secondary Small3",
    className: "secondary small right-plus",
    to: "/",
    as: "a",
  },
  {
    label: "secondary Small4",
    className: "secondary small down",
    to: "/",
    as: "a",
  },
  {
    label: "secondary Small5",
    className: "secondary small plus-down",
    to: "/",
    as: "a",
  },
];
const secondaryIconSamples = [
  {
    label: "secondary icon case1",
    className: "secondary download",
    btnType: "icon",
  },
  {
    label: "secondary icon case2",
    className: "secondary  plus",
    btnType: "icon",
  },
  {
    label: "secondary icon case3",
    className: "secondary minus",
    btnType: "icon",
  },
  {
    label: "secondary icon case4",
    className: "secondary down",
    btnType: "icon",
  },
  {
    label: "secondary icon case5",
    className: "secondary repeat",
    btnType: "icon",
  },
];

const ButtonData = () => {
  return (
    <>
      <ButtonList buttonList={primaryMediumSamples}></ButtonList>
      <ButtonList buttonList={secondaryMediumAnchorSamples}></ButtonList>
    </>
  );
};

export default ButtonData;
