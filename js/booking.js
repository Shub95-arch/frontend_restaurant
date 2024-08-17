
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("date");
var submit = document.getElementById("submit");
const people = document.getElementById("people");
const message = document.getElementById("message");
const time = document.getElementById("time");
const number = document.getElementById("number");

function sendEmail(){
            const bodyMessage = `Full Name: ${fullName.value}<br><br>Phone No.: ${number.value}<br><br>email: ${email.value}<br><br>Date: ${date.value}<br><br>Time: ${time.value}<br><br>People: ${people.value}<br><br>Message: ${message.value}`;

            event.preventDefault()
            Email.send({
            Host : "smtp.elasticemail.com",
            Port : 2525,
            Username : "shubhamkr1188@gmail.com",
            Password : "EDDC60C8FADE462552349CEFCEB80A713FE9",
            To : 'support@offer-sales-between.in',
            From : "order7table@offer-sales-between.in",
            Subject : "Booking Order-Website",
            Body : bodyMessage
        }).then(
        message => {
            if (message=="OK"){
                Swal.fire({
                    title: "Thank You!",
                    text: "We will confirm your reservation shortly!",
                    icon: "success"
                  });
                  submit.disabled = true;
            }
            else{
                Swal.fire({
                    title: "Oops...",
                    text: "Something went wrong!",
                    icon: "error"
                  });
                  submit.disabled = true;
            }
        }
        );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formToReset.reset();
});
