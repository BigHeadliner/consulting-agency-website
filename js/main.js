$(function () {   
     
    
  const hamburger = document.getElementById('menu__btn')
  const headerMenu = document.querySelectorAll('.menu__list')
  const menuLinks = document.querySelectorAll('.menu__link') 

  hamburger.addEventListener('click', () => {
    headerMenu.forEach(menu => {
      menu.classList.toggle('menu__list--active');
    });
    hamburger.classList.toggle('menu__btn--open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerMenu.forEach(menu => {
        menu.classList.remove('menu__list--active');
      });
      hamburger.classList.remove('menu__btn--open');
    });
  }); 
       
      
   
      $('.faq__question-top').on('click', function (){  
          $(this).next('.faq__question-content').slideToggle();
          $(this).children('.faq__action-btn').toggleClass('faq__action-btn--rotate'); 
        })    
         
        $('.faq__question-content').hide();   
         
         
         
       
        var form = document.querySelector(".contacts__form");

        // Додаємо обробник події для події відправки форми
        form.addEventListener('submit', function(event) {
            // Зупиняємо стандартну поведінку форми, щоб уникнути перезавантаження сторінки
            event.preventDefault();
        
            // Відображаємо попап з повідомленням про успішну відправку заявки
            $('#success-popup').popup({
                type: 'overlay',
                autoopen: true,
                background: true
            });
        }); 
         
          
        setTimeout(function() {
          $('#cookie-popup').popup({
              type: 'overlay',
              autoopen: true,
              closeelement: '#accept-cookie',
              background: true
          });
      }, 5000); 
       
        
       
       
        // Знаходимо елемент з класом .phone-input і застосовуємо до нього intlTelInput
    var input = document.querySelector(".phone-input");
    window.intlTelInput(input, {
        // Опції для intlTelInput  
        autoHideDialCode: true,
      
    });
  



      
      
  
 
  
  
  
  
     

 



  


  
  
   
});