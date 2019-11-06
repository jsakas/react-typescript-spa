
export const animate_once = (name, time, offset = 0) => `
  animation-name: ${name};
  animation-duration: ${time};
  animation-delay: ${offset};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const animate_loop = (name, time, offset = 0) => `
  animation-name: ${name};
  animation-duration: ${time};
  animation-delay: ${offset};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;
