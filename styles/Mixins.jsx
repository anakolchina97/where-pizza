export const pxToPercent = (size = 1, context = 1) =>
  `${Math.round((size / context) * 100)}%`;
