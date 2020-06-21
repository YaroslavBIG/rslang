export const progressBar = (done = 0, all = 0) => {
  const progress = document.querySelector('.progress-done');
  const percent = (done / (all / 100));
  progress.style.width = `${percent}%`;
  progress.style.opacity = 1;
  progress.innerHTML = '';
  progress.innerText = `${done}/${all}`;
};
