
export const animateOnce = (name: string, time: string, offset = '0s') => {
  return {
    animationName: name,
    animationDuration: time,
    animationDelay: offset,
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
  };
};

export const animateLoop = (name: string, time: string, offset = '0s') => {
  return {
    animationName: name,
    animationDuration: time,
    animationDelay: offset,
    animationIterationCount: 'infinite',
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
  };
};
