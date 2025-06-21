const users = [
  {
    name: "Esraa",
    email: "test@gmail.com",
    password: "123456",
  },
  {
    name: "Mahmoud",
    email: "mahmoudnakhlawy6@gmail.com",
    password: "Rahma.Html.27",
  },
  {
    name: "Mohamed Mokhlas",
    email: "mokhlas@gmail.com",
    password: 123456,
  },
];

function login() {
  let emailValue = document.getElementById("email").value;
  let passwordValue = document.getElementById("password").value;
  let errMsg = document.getElementById("errMsg");

  const matchedUser = users.find((user) => {
    return user.email === emailValue && user.password == passwordValue;
  });

  if (matchedUser) {
    window.localStorage.setItem("names", matchedUser.name);
    window.location.href = "http://127.0.0.1:5500/pages/welcomePage.html";
  } else {
    errMsg.textContent = "معلشي في غلط في بيانات الدخول جرب تاني كده!";
  }
}
