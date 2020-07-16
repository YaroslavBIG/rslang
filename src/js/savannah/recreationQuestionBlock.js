export const recreationQuestionBlock = () => {
  const question = document.getElementById('question');
  if (question) {
    question.remove();
    const newQuestion = document.createElement('div');
    newQuestion.classList.add('screen-wrapper__question');
    newQuestion.id = 'question';
    const wrapper = document.getElementById('savannah-wrapper');
    wrapper.append(newQuestion);
  }
};
