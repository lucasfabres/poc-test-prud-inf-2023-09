import { useFontScale } from '../../hooks/useFontScale';
import { Typography } from '../atoms/Typography';

export const Zoom = () => {
  const { ref, scale, doScale } = useFontScale<HTMLDivElement>();

  const onClick = (zoom: number) => () => {
    doScale(zoom);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white gap-8">
      <Typography size="lg">Texto fora do container não escala</Typography>

      <div ref={ref} className="flex items-center gap-4">
        <button onClick={onClick(-0.1)}>-</button>

        <div className="flex flex-col gap-2 justify-center text-center">
          <Typography size="lg">Test</Typography>
          <span>Current scale: {scale.toFixed(2)}</span>
        </div>

        <button onClick={onClick(0.1)}>+</button>
      </div>
    </div>
  );
};
