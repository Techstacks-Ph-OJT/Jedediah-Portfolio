const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () => {
          navMenu.classList.add("show-menu")
        })
      }

      if(navClose){
        navClose.addEventListener('click', () => {
          navMenu.classList.remove("show-menu")
        })
      }

      const navLinks = document.querySelectorAll('.nav-link')
      function linkAction(){
        navMenu.classList.remove("show-menu")
      }

      navLinks.forEach(n => n.addEventListener('click', linkAction))

      function scrollHeader() {
        const header = document.getElementById("header")
        /* greater than 80vh */
        if(this.scrollY >=80) header.classList.add("scroll-header");
        else 
          header.classList.remove("scroll-header")
      }
      window.addEventListener("scroll", scrollHeader);

       //filter-container
  const filterContainer = document.querySelector(".projects-filter-in");
  const filterBtns = filterContainer.children;
  const totalFilterBtn = filterBtns.length;
  const projectsItem = document.querySelectorAll(".projects-item");
  const totalProjectsItem = projectsItem.length;


  for(let i = 0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener('click', function() {
      filterContainer.querySelector(".active").classList.remove("active");
      this.classList.add("active");
      
      const filterValue = this.getAttribute("data-filter"); 
      for(let df = 0; df < totalProjectsItem; df++){
        if(filterValue === projectsItem[df].getAttribute("data-category"))
        {
          projectsItem[df].classList.remove("hide");
          projectsItem[df].classList.add("show");
        }
        else{
          projectsItem[df].classList.add("hide");
          projectsItem[df].classList.remove("show");
        }
        if(filterValue === "all"){
          projectsItem[df].classList.remove("hide");
          projectsItem[df].classList.add("show");
        }
      }
    })
  }

    //navigation - circle 
    const sections = document.querySelectorAll("section[id]");
   
    
    window.addEventListener('scroll', navHighlighter);
    
    function navHighlighter() {
      const scrollY = window.pageYOffset;
    
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        const sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active-link");
            } else {
              link.classList.remove("active-link");
            }
          });
        }
      });
    }
    
      /*theme display */

      const theme = document.querySelector("#theme-button");
      const themeModal = document.querySelector(".customize-theme");

      //open
      const openThemeModal = () => {
        themeModal.style.display = 'grid'
      }
      //close 
      const closeThemeModal = (e) => {
        if(e.target.classList.contains('customize-theme'))
        {
          themeModal.style.display = "none"
        }
      }
      theme.addEventListener("click", openThemeModal);
      themeModal.addEventListener("click", closeThemeModal);
      
      //change-theme
      const root = document.querySelector(":root");
      const bg1 = document.querySelector(".bg-01");
      const bg2 = document.querySelector(".bg-02");
      const bg3 = document.querySelector(".bg-03");
      
      let lightColorLightness;
      let whiteColorLightness;
      let darkColorLightness;
      
      const changeBG = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
      }
      
      bg1.addEventListener('click', () => {
        lightColorLightness = '90%';
        whiteColorLightness = '100%';
        darkColorLightness = '12%';
      
        bg1.classList.add('active');
        bg2.classList.remove('active');
        bg3.classList.remove('active');

        window.location.reload();
      })
      
      bg2.addEventListener('click', () => {
        lightColorLightness = '70%';
        whiteColorLightness = '50%';
        darkColorLightness = '25%';
      
        bg2.classList.add('active');
        bg1.classList.remove('active');
        bg3.classList.remove('active');
        changeBG();
      })
      
      bg3.addEventListener('click', () => {
        lightColorLightness = '10%';
        whiteColorLightness = '55%';
        darkColorLightness = '100%';
      
        bg3.classList.add('active');
        bg1.classList.remove('active');
        bg2.classList.remove('active');
        changeBG();
       
      })
      
/*testimonial swiper*/
var swiper = new Swiper(".testimonial-wrapper", {
    loop:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });


