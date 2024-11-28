//Navbar
const menu = document.querySelector(".menu")
const navbar = document.querySelector(".navbar")

menu.addEventListener("click", () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
//End of Navbar

//Section-2 Video
const video = document.querySelector(".video")
const btn = document.querySelector(".buttons i")
const bar = document.querySelector(".video-bar")

const playPause = () => {
    if(video.paused) {
        video.play()
        btn.className = "far fa-pause-circle"
        video.style.opacity = "0.7"
    } else {
        video.pause()
        btn.className = "far fa-play-circle"
        video.style.opacity = "0.3"
    }
}

btn.addEventListener( "click", () => {
    playPause()
})

video.addEventListener("timeupdate", () => {
    const barWidth = video.currentTime/video.duration
    bar.style.width = `${barWidth * 100}%`
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = "0.3"
    }
})

//End of Section-2 Video


//Section-3 Pricing Card
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 90,
      stretch: 0,
      depth: 100,
    //   modifier: 1,
      slideShadows: true,
    },
    mousewheel: {
        sensitivity: 1,
        releaseOnEdges: true,
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="" />
            <label class="form-check-label" for=""> Default checkbox </label>
        </div>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id=""
                checked
            />
            <label class="form-check-label" for=""> Checked checkbox </label>
        </div>
        
      },
  });
//End of Section-3 Pricing Card

