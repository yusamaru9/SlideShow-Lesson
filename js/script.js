/*global $*/

$(".theTarget").skippr({
  transition: 'fade',
  speed: 1000,
  easing: 'easeOutQuat',
  navType: 'bubble',
  childrenElementType: 'div',
  arrows: true,
  autoPlay: false,
  autoPlayDuration: 5000,
  keyboardOnAlways: true,
  hidePrevious: false
});