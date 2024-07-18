import { UI } from './userInterface';

const EventHandlers = (() => {
  function init() {
    const startButton = document.querySelector('.start');

    startButton.addEventListener('click', UI.startGame);
  }

  return {
    init,
  };
})();

EventHandlers.init();
