document.addEventListener('DOMContentLoaded', () => {
    let testik = document.querySelector('.tail')
    let Sound = new Audio("cat.mp3")
    let Sound2 = new Audio("Ура!.mp3")
    let Sound3 = new Audio("Sound3.mp3")
    console.log(testik)
    console.log(testik.classList)
    testik.addEventListener('click', () => {
        testik.classList.add("wide")
        setTimeout(() => {
            testik.classList.remove("wide")
        }, 200)
    function playTriggerSound() {
    let trigger = 'click';
        if (trigger) {
            Sound.play()
        }
    }
    playTriggerSound()
        // console.log(testik.classList)

        // if (testik.width >= 800) {
        //     testik.classList.remove("wide")
        // }

        //     let myInterval = setInterval(() => {
        //         testik.style.width = `${testik.getBoundingClientRect().width + 1}px`
        //         if(testik.getBoundingClientRect().width >= 1000){
        //             clearInterval(myInterval)
        //         }
        //     }, 1);
    })
    function confettiBurst() {
      confetti({
        particleCount: 900,    
        spread: 300,             
        origin: { x: 0.2, y: 0.5 } 
      });
      confetti({
        particleCount: 900,    
        spread: 300,             
        origin: { x: 0.7, y: 0.5 } 
      });
    }
    let img=document.getElementById('face')
    let options=['1.png','2.png','3.png','4.png','5.png'];
    let index=0
    img.addEventListener('click',()=>{
        index=(index+1)%options.length;
        img.src=options[index]
        if(index==4){
            confettiBurst();
            Sound2.play()  
        }    
    }) 
    let fall = document.querySelector('.lie')
    fall.addEventListener('click', ()=>{
        fall.classList.add('moveDown');
        setTimeout(() => {
            Sound3.play();
        }, 200);
        setTimeout(() => {
        fall.classList.remove('moveDown');
    }, 3000);
    })
    function createDigit() {
        const digit = document.createElement('div');
        digit.textContent = '67';
        digit.className = 'digit';
        digit.style.left = Math.random() * 100 + '%';
        digit.style.top = Math.random() * 100 + '%';
 
        const colors = ['#ff0066', '#00ff66', '#6600ff', '#ffaa00', '#00aaff', '#ff6600', '#aa00ff'];
        digit.style.color = colors[Math.floor(Math.random() * colors.length)];
 
        document.body.appendChild(digit);
    }
 
    for(let i = 0; i < 100; i++) {
        setTimeout(createDigit, i * 500);
    }
})
