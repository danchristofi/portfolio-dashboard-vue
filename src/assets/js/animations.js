import anime from "animejs";

const fadeInObserver = (elementToObserve, targets) => {
  const options = {
    rootMargin: "-50px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: targets,
          opacity: [0, 1],
          delay: anime.stagger(20),
          duration: 1500,
          easing: "easeOutCirc",
        });
      } else {
        anime({
          targets: targets,
          opacity: [1, 0],
          duration: 0,
          easing: "linear",
        });
      }
    });
  }, options);

  observer.observe(elementToObserve);
};

export { fadeInObserver };
