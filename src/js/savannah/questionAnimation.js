export const questionAnimation = () => {
  const start = Date.now();
  const draw = (timePassed) => {
    const question = document.getElementById('question');
    question.style.left = `${timePassed / 90}%`;
  };

  const timer = setInterval(() => {
    const timePassed = Date.now() - start;

    if (timePassed >= 4500) {
      clearInterval(timer);
      return;
    }
    draw(timePassed);
  }, 20);
};
