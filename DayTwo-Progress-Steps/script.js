 const progress = document.getElementById('progress')
 const prev = document.getElementById('prev')
 const next = document.getElementById('next')
/*class of circles - similar to an array*/ 
 const circles = document.querySelectorAll('.circle')

 let currentActive = 1

 next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length

    }
 })