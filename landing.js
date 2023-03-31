function SendMail(){
    var params = {
        from_name: document.getElementById('Name').value,
        mail_id: document.getElementById('email_id').value,
        message: document.getElementById('message').value
    }
    emailjs.send("service_uazju5j", "template_fxbfyj8", params).then(function (res){
        alert("Successful" + res.status)
    });
}
//  function to change a div color
// function changeCircleColor(color) {
//     const circle = document.querySelector('.circle');
//     circle.style.background = color;
// }


let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
}

// fade in and fade out slideshow javascript
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlideShow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    //set the timing here
    setTimeout(carousel, 5000);
}

// // scroll animation using javascript

// function reveal(){
//     var reveals = document.querySelectorAll(".reveal");

//     // getBoundingClientRect().top gives us this distance from the viewport and 
//     // window.innerHeight will gives us the height of the viewport
//     for (var i = 0; i < reveals.length; i++){
//         var windowHeight = window.innerHeight;
//         var elementTop = reveals[i].getBoundingClientRect().top;
//         var elementVisible = 150;
//     // with the above code we can set the condition using for;

//         // if or else statement to set the condition for triggering the animation
//         if(elementTop < windowHeight - elementVisible){
//             reveals[i].classList.add("active");
//         }else{
//             reveals[i].classList.remove("active");
//         }
//     }
// }
// window.addEventListener("scroll", reveal);
// // to check the scroll position on the page loaded
// reveal();



