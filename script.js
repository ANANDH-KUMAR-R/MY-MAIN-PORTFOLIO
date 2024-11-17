function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}





// =========================================     " EmailJS "     ====================================================

// Use EmailJS to send emails from HR's web form :

(function () {
  emailjs.init("S74Gp5015i6bp0WlD"); // Initialize EmailJS with your public key
})();

document.getElementById('work-request-form').addEventListener('submit',
  function (event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form data                                                    
      const name = document.getElementById('from_name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;


      console.log('Sending email with the following details:', { name, email, subject, message });

      // Send email via EmailJS
      emailjs.send('service_twwc50h', 'template_27o6ld7', {
          name: name,
          email: email,
          message: message,
          subject: subject
      })
          .then(function (response) {
              alert('Email sent successfully!');
          }, function (error) {
              console.error('Failed to send email:', error);
              alert('Failed to send email. Please try again.');
          });
  }, { passive: false });


