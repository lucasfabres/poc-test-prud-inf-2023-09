import React from 'react';

function clamp(min: number, max: number) {
  return (value: number) => {
    if (value < min) return min;

    if (value > max) return max;

    return value;
  };
}

export function useFontScale<T extends HTMLElement = HTMLElement>(
  min = 1,
  max = 2
) {
  const [scale, setScale] = React.useState(1);
  const ref = React.useRef<T>(null);

  const _clamp = clamp(min, max);

  React.useEffect(() => {
    if (ref.current == null) return;

    // Aqui talvez o --font-scale seja o valor do :root
    // dai precisamos definir um --font-scale no componente atual
    // para que seja alterado apenas o tamanaho da fonte dos filhos
    // do componente atual
    ref.current.style.setProperty('--font-scale', scale.toString());
  }, [scale]);

  const doScale = (value: number) => {
    setScale((scale) => _clamp(scale + value));
  };

  return { ref, scale, doScale };
}
