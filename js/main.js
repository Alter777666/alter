const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,  
    speed: 400,
    spaceBetween:70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    breakpointts: {
      320: {
        slidersPerView:1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });

  const modalWindow = document.querySelector('.modal');
  const buttonModal = document.querySelector('.main-display__button');

  buttonModal.addEventListener('click', () => {
    modalWindow.classList.add('active');
  });

  modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal){
      modalWindow.classList.remove('active');
    }
  });