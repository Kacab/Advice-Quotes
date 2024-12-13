

const dicebut = document.querySelector('#submit')
const forms  = document.querySelector('.forms')
let  isAdvice;

// function togetQuote(){
//   const p =  document.createElement('p')
//   p.innerText = data.slip.advice

//   forms.appendChild(p)
// }

const dice = diceApi=>{
    fetch('https://api.adviceslip.com/advice')
    .then((response)=>{
        if(!response.ok){
            throw new Error(`HTTP servor error${response.status}`)
        }
        else{
            return response.json()
        }

    }).then((data)=>{
        console.log(data.slip.advice)
        
        // if(!isAdvice){}

        if(!isAdvice){
            isAdvice =  document.createElement('p')
            forms.appendChild(isAdvice)
        }

        isAdvice.innerText = data.slip.advice

              
    
        
       
        
    }).catch((eror)=>{
        
        console.log('servers are down1',eror)
        const c = document.createElement('p')
        c.style.color = 'red'
        c.innerText = `Http servers down 😟😟${eror}`
        forms.appendChild(c)
        //  throw eror
    })
}

dicebut.addEventListener('click',function(){
    console.log('clicked')
//    togetQuote()
    dice()
})