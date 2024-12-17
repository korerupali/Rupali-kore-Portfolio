// Select all nav-links and add event listener to hide navbar on click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Check if the screen width is mobile/tablet and the navbar is expanded
        if (window.innerWidth <= 991) {
            // Add class to hide navbar on small screens
            document.querySelector('.navbar-collapse').classList.add('hide-navbar');
        }
    });
});

// Optional: If you want the navbar to be shown again after the link is clicked
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.remove('hide-navbar');
});



// typing animation

const typingAnimation=document.getElementById("typing-animation");

const typingTexts=[
    'Front End Developer   ',
    'Web Developer   ',
    'Python Developer   ',
];

function playTypingAnimation(text){
    for(let i=0; i<text.length; i++){
        setTimeout(()=>{
        typingAnimation.textContent += text[i]
        },i * 200);
    }

    setTimeout(()=>{
        typingAnimation.textContent='';
        playTypingAnimation(typingTexts[(typingTexts.indexOf(text)+1) % typingTexts.length]);
    
    },text.length  * 200);
}
playTypingAnimation(typingTexts[0]);





// document.getElementById('contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let message = document.getElementById('message').value;
    
//     if (name && email && message) {
//       alert('Your message has been sent!');
//       // You can implement AJAX to send the form data to the server
//     } else {
//       alert('Please fill out all fields.');
//     }
//   });


//form validation
// function formValidation(){
//     const name= document.getElementById('name').value;
//     const email= document.getElementById('email').value;
//     const number= document.getElementById('number').value;
//     const message= document.getElementById('message').value;
  
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
//     if(name=='' || email=='' || number==''|| message==''){
//       alert('All fields must be filled out');
//       return false;
//     }
  
//     if(!emailPattern.test(email)){
//       alert("Please enter a valid email address");
//       return false;
//     }
  
//     if(number.length !==10){
//       alert('please enter 10-digit number');
//       return false;
//     }
  
//     alert('Your massege sent has been successfully')
  
//     document.getElementById('name').value='';
//     document.getElementById('email').value='';
//     document.getElementById('number').value='';
//     document.getElementById('message').value='';
  
//     return true;
//   }



// const scriptURL = 'https://script.google.com/macros/s/AKfycbw2wxW3GI_KU-naj07nqSqPt6wQTnudoiG_U5FAbNz_9G-AGxyu1CRo8FvdnB8k21y1gQ/exec'

// const form = document.forms['contact-forms']

// form.addEventListener('submit', e => {
  
//   e.preventDefault()
  
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! Form is submitted" ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })



const scriptURL = 'https://script.google.com/macros/s/AKfycbw2wxW3GI_KU-naj07nqSqPt6wQTnudoiG_U5FAbNz_9G-AGxyu1CRo8FvdnB8k21y1gQ/exec';
    const form = document.forms['contact-forms'];

    // Validation Function
    function formValidation(event) {
        event.preventDefault(); // Prevent default submission

        // Clear previous errors
        document.querySelectorAll('.error').forEach(span => span.textContent = '');

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const number = document.getElementById("number").value.trim();
        const message = document.getElementById("message").value.trim();

        // Regular Expressions for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
        const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits for phone number

        let isValid = true;

        // Validation checks
        if (name === "") {
            document.getElementById("name-error").textContent = "Name cannot be empty.";
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (!phoneRegex.test(number)) {
            document.getElementById("number-error").textContent = "Phone number must be 10 digits.";
            isValid = false;
        }

        if (message === "") {
            document.getElementById("message-error").textContent = "Message cannot be empty.";
            isValid = false;
        }

        // If validation fails, stop submission
        if (!isValid) return false;

        // If validation passes, submit the form data
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert("Thank you! Your form has been submitted successfully.");
                form.reset(); // Clear the form after submission
            })
            .catch(error => {
                console.error('Error!', error.message);
                document.querySelector('.contact-form').insertAdjacentHTML('beforeend',
                    '<p style="color: red;">Something went wrong. Please try again later.</p>'
                );
            });

        return true;
    }
  



