let cSlideIndex = 0;
const maxCSlideIndex = 2;

function incrementCSlide(){

    const cSlideContainer = document.getElementById('c-slide-container')
    const currentCSlide = document.getElementById(`c-slide-${cSlideIndex+1}`)
    currentCSlide.style.display = "none"
    if(cSlideIndex<maxCSlideIndex){
        cSlideIndex +=1
    } else {
        cSlideIndex = 0
    }
    const nextCSlide = document.getElementById(`c-slide-${cSlideIndex+1}`)
    nextCSlide.style.display = "flex"
    cSlideContainer.appendChild(nextCSlide)

}


function decrementCSlide() {
    const cSlideContainer = document.getElementById('c-slide-container')
    const currentCSlide = document.getElementById(`c-slide-${cSlideIndex+1}`)
    currentCSlide.style.display = "none"
    if(cSlideIndex>0){
        cSlideIndex -=1
    } else {
        cSlideIndex = maxCSlideIndex
    }
    const nextCSlide = document.getElementById(`c-slide-${cSlideIndex+1}`)
    nextCSlide.style.display = "flex"
    cSlideContainer.appendChild(nextCSlide)

}