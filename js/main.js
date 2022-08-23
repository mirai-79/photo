'use strict';

{

  const items = document.querySelectorAll('.grid__item');
  const bigitem = document.querySelector('.item-big');

  function callback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
      entry.target.animate(
        [
          {opacity: 1, transform: 'translateY(0)'},
        ],
        {
          duration: 500,
          fill: "forwards",
        },
      )
      obs.unobserve(entry.target);
    });
  }
  function callback_filter(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
      entry.target.animate(
        [
          { filter: 'grayscale(0)'},
        ],
        {
          duration: 500,
          fill: "forwards",
        },
      )
      obs.unobserve(entry.target);
    });
  }

  const option = {
    threshold: 0.2,
  };
  const option2 = {
    threshold: 1.0,
  };
  const option3 = {
    threshold: 0.7,
  };

  const observer = new IntersectionObserver(callback, option);
  const observer_filter = new IntersectionObserver(callback_filter, option2);
  const observerbig = new IntersectionObserver(callback_filter, option3);

  items.forEach(item => {
    observer.observe(item);
  });
  items.forEach(item => {
    observer_filter.observe(item);
  });
  observerbig.observe(bigitem);

}