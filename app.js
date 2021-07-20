const h1 = document.querySelector('h1');
const sadBtn = document.getElementById('sad');
const happyBtn = document.getElementById('happy');
const angryBtn = document.getElementById('angry');
const confusedBtn = document.getElementById('confused');

sadBtn.addEventListener('click', (e) => {
  store.dispatch({ type: 'SAD' });
  const state = store.getState();
  h1.innerText = state.face;
});

happyBtn.addEventListener('click', (e) => {
  store.dispatch({ type: 'HAPPY' });
  const state = store.getState();
  h1.innerText = state.face;
});

angryBtn.addEventListener('click', (e) => {
  store.dispatch({ type: 'ANGRY' });
  const state = store.getState();
  h1.innerText = state.face;
});

confusedBtn.addEventListener('click', (e) => {
  store.dispatch({ type: 'CONFUSED' });
  const state = store.getState();
  h1.innerText = state.face;
});