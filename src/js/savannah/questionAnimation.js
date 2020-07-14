export const questionAnimation = () => {
  const question = document.getElementById('question');
  const start = Date.now();
  const draw = (timePassed) => {
    if (question) {
      question.style.left = `${timePassed / 90}%`;
    }
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
