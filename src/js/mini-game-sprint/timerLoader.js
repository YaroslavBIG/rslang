import constantsData from './constants';

const timerLoader = () => {
  const loader = document.getElementById('loader');
  const timer = document.getElementById('timer');
  let a = 0;
  const pi = Math.PI;
  const t = constantsData.loaderTime;

  const draw = () => {
    a += 1;
    a %= 360;
    const r = ((a * pi) / 180);
    const x = Math.sin(r) * 125;
    const y = Math.cos(r) * (-125);
    const mid = (a > 180) ? 1 : 0;
    const anim = `M 0 0 v -125 A 125 125 1 ${mid} 1 ${x} ${y} z`;

    loader.setAttribute('d', anim);
    if (timer.innerHTML !== '0') {
      setTimeout(draw, t);
    }
  };
  draw();
};

export default timerLoader;
