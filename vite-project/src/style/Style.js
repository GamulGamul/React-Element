const _mx = {
  svg: (value) => {
    return typeof value === "function"
      ? `url("data:image/svg+xml,${value()}")`
      : `url("data:image/svg+xml,${value}")`;
  },
  ell: (num = 1) => {
    if (num > 1) {
      return `overflow: hidden; white-space: normal; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: ${num}; -webkit-box-orient: vertical; word-wrap: break-word; word-break: break-all;`;
    } else {
      return `overflow: hidden; white-space: nowrap; text-overflow: ellipsis; word-break: break-all;`;
    }
  },
  inlineBlock: `display: inline-block; vertical-align: middle;`,
  flexCenter: `display: flex; justify-content: space-between; align-items: center;`,
  basicTable: `table-layout: fixed; width: 100%; border-collapse: collapse;`,
  underline: `text-decoration: underline; text-underline-position: under;`,
  blind:
    "position: absolute; width: 1px; height: 1px; margin: -1px; overflow: hidden; clip-path: polygon(0 0, 0 0, 0 0);",
};

export default _mx;
