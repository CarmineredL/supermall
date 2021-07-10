export function debounce(fun, delay = 20) {
  let timer = null;
  return function (...agrs) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, agrs);
    }, delay);
  };
}
