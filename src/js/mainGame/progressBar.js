export const progressBar = (done = 0, all = 0) => {
  const progress = document.querySelector('.progress-done');
  const percent = (all / 100) * done;
  progress.style.width = `${percent}%`;
  progress.style.opacity = 1;
  console.log(`${done}/${all}`);
  progress.innerHTML = '';
  progress.innerText = `${done}/${all}`;
};
