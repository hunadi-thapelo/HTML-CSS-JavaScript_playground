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
    /*calls update function*/
    update()
 })

 prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
        
    }
    /*calls update function*/ 
    update()
 })

 function update() {

    circles.forEach((circle, idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    /*get all active circles*/
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

 }