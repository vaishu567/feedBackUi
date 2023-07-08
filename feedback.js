const seli= document.querySelectorAll('.feedback-emojis');

seli.forEach(function addeventi(sel){
    sel.addEventListener('click',(sel)=>{
        removeActive();
        const veri=sel.target.innerText||sel.target.parentNode.innerText;
        sel.target.classList.add('active');
        sel.target.parentNode.classList.add('active');
        // submit button:
        const btnseli=document.querySelector('.feedback-button');
        const modified= document.querySelector('.container');
        btnseli.addEventListener('click',()=>{
        modified.innerHTML=`<strong><h3>Thank You!</h3></strong>
        <br>
        <strong><p>Feedback : ${veri}</p></strong>
        <br>
            
        <p>We'll use your feedback to improve our customer support.</p>`

})
    })
} )

function removeActive(){
    seli.forEach((sel)=>{
        sel.classList.remove('active')
    })

}

// const btnseli=document.querySelector('.feedback-button');
// const modified= document.querySelector('.container');

// // const 

// btnseli.addEventListener('click',()=>{
//     modified.innerHTML=`Thank You!
//                     Feedback :
//                 We'll use your feedback to improve our customer support.`

// })

// function makingActive(param){
//     param.classList.add('active')
// }

