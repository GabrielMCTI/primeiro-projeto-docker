// CADASTRO
function register() {
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;
  const message = document.getElementById("message");

  if (!user || !pass) {
    message.innerText = "Preencha todos os campos";
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  message.style.color = "lightgreen";
  message.innerText = "Conta criada! Vá para o login.";
}

// LOGIN
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("message");

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", user);
    window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.innerText = "Login inválido";
  }
}

// DASHBOARD
if (window.location.pathname.includes("dashboard.html")) {
  const isLogged = localStorage.getItem("loggedIn");

  if (isLogged !== "true") {
    window.location.href = "index.html";
  } else {
    const user = localStorage.getItem("currentUser");
    document.getElementById("userDisplay").innerText = "Usuário: " + user;
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
