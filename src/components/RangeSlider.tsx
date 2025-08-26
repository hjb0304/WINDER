import { getTrackBackground, Range } from 'react-range';

const MIN = 0;
const MAX = 5;

function RangeSlider({
  values,
  onChange,
}: {
  values: number[];
  onChange: (values: number[]) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <span>0</span>
      <Range
        min={MIN}
        max={MAX}
        step={1}
        values={values}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div
            className="w-full h-2 rounded-full bg-lightgray"
            {...props}
            style={{
              background: getTrackBackground({
                values,
                min: MIN,
                max: MAX,
                colors: ['var(--color-primary)', 'var(--color-lightgray)'],
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            className="relative w-5 bg-white rounded-full aspect-square border-1 border-primary"
            {...props}
            key={props.key}
          >
            <span className="absolute px-2 py-1 text-xs text-white rounded-sm -translate-1/2 -top-5 left-1/2 bg-primary">
              {values[0]}
              <span className="absolute border-4 border-b-0 border-transparent -translate-1/2 -bottom-1.5 left-1/2 border-t-primary"></span>
            </span>
          </div>
        )}
      />

      <span>5</span>
    </div>
  );
}

export default RangeSlider;
