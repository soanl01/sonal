// const slidePage = document.querySelector("#slidepage");
// const firstNextBtn = document.querySelector("#next-btn1");
// const backBtnSec = document.querySelector("#back-btn1");
// const secNextBtn = document.querySelector("#next-btn2");
// const backBtnThird = document.querySelector("#back-btn2");
// const nextBtnThird = document.querySelector("#next-btn3");
// const backBtnFourth = document.querySelector("#back-btn3");


// const progressText = document.querySelectorAll("#progress");



// firstNextBtn.addEventListener('click', function() {
//     slidePage.style.marginLeft ="-80.3rem";
//     alert('hello')
// })
// backBtnSec.addEventListener('click', function() {
//     slidePage.style.marginLeft ="80.3rem";
//     alert('hello')
// })

// secNextBtn.addEventListener('click', function(){
//     slidePage.style.marginLeft ='-80rem';
//     alert('hello')
// })

// backBtnThird.addEventListener('click',function(){
//     slidePage.style.marginLeft ='100px';
//     alert('hello')
// })

// nextBtnThird.addEventListener('click',function(){
//     slidePage.style.marginLeft ="-100%";
//     alert('hello')
// })
// backBtnFourth.addEventListener('click',function(){
//     slidePage.style.marginLeft ="100px";
//     alert('hello')
// })
//  // progressText.style.width ="50%";























// const slidePage = document.querySelector("#slidepage");
// const firstNextBtn = document.querySelector("#next-btn1");
// const backBtnSec = document.querySelector("#back-btn1");




































 var form1 = document.getElementById('slidepage')
 var form = document.getElementById('form-1')
 var form2 = document.getElementById('form-2')
 var form3 = document.getElementById('form-3')
 var form4 = document.getElementById('form-4')
 var next1 = document.getElementById('next-btn1')
 var next2 = document.getElementById('next-btn2')
 var next3 = document.getElementById('next-btn3')
 var back1 = document.getElementById('back-btn1')
 var back2 = document.getElementById('back-btn2')
 var back3 = document.getElementById('back-btn3')
 var progress = document.querySelector('#progress')


 next1.onclick = function(){
    // alert('hello')
     
    form1.style.marginLeft = "-90%";
    // form2.style.marginLeft = "0";
    progress.style.width ="50%";
    
};

back1.onclick = function(){
    //  alert('hello')
    // form1.style.marginLeft = "66%";
    form1.style.marginLeft = "-10%";
    // form2.style.marginLeft = "-9%";
    progress.style.width ="25%";
};

next2.onclick = function(){
    // alert('hello')
    form2.style.marginLeft = "-24%";
    form3.style.marginLeft = "0";
    progress.style.width ="75%";
};


back2.onclick = function(){
    // alert('hello')
    form2.style.marginLeft = "3%";
    form3.style.marginLeft = "-22%";
    form3.style.display = "none";

    progress.style.width ="50%";


};
next3.onclick = function(){
    // alert('hello')
    form3.style.marginLeft = "-34%";
    form4.style.marginLeft = "0";
    progress.style.width ="100%";
};
// back3.onclick = function(){
//     alert('hello')
//     form3.style.marginLeft = "-24%";
//     form4.style.marginLeft = "0";
//     progress.style.width ="75%";
// };




















