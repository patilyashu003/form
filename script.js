let modal = document.getElementById('id101');

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // form submit
    document.getElementById("signupForm").addEventListener("submit", function(event){
      event.preventDefault(); // prevent page reload

      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let repeat = document.getElementById("repeat").value;

      if(password !== repeat){
        alert("Passwords do not match!");
        return;
      }

      // Show output below form
      let outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
        <h3>Signup Details</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p style="color:green;">Account created successfully</p>
      `;

      // Close modal
      modal.style.display = "none";

      // Reset form
      document.getElementById("signupForm").reset();
    });