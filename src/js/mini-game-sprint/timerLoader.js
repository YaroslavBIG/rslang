import { constantsData } from './constants';

export const timerLoader = () => {
  const loader = document.getElementById('loader');
  const timer = document.getElementById('timer');
  let azimuth = 0;
  const pi = Math.PI;
  const { loaderTime } = constantsData;

  const draw = () => {
    azimuth += 1;
    azimuth %= 360;
    const r = ((azimuth * pi) / 180);
    const x = Math.sin(r) * 125;
    const y = Math.cos(r) * (-125);
    const mid = (azimuth > 180) ? 1 : 0;
    const anim = `M 0 0 v -125 A 125 125 1 ${mid} 1 ${x} ${y} z`;

    loader.setAttribute('d', anim);
    if (timer.innerHTML !== '0') {
      setTimeout(draw, loaderTime);
    }
  };
  draw();
};
