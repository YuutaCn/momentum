let githubSvgOne = document.querySelector('.github-btn__svg-1');
let githubSvgTwo = document.querySelector('.github-btn__svg-2');
let githubButton = document.querySelector('.github-btn');


githubSvgTwo.style.transform = 'translateX(-20%) translateY(80%) scale(0.2, 0.2)'

githubButton.onmouseover = function() {
  githubSvgOne.style.transition = 'all 500ms ease-in-out';
  githubSvgTwo.style.transition = 'all 500ms ease-in-out';
  githubSvgOne.style.transform = 'translateX(-130%) translateY(70%) scale(0.2, 0.2)';
  githubSvgTwo.style.transform = 'translateX(-136.5%) translateY(0%) scale(1, 1)';
  };

githubButton.onmouseleave = function() {
  githubSvgOne.style.transition = 'all 0ms ease-out';
  githubSvgTwo.style.transition = 'all 0ms ease-out';
  githubSvgOne.style.transform = 'translateX(0px) translateY(0px) scale(1, 1)';
  githubSvgTwo.style.transform = 'translateX(-20%) translateY(80%) scale(0.2, 0.2)';
  };