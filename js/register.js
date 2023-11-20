let qs = (elemento) => {
  return document.querySelector(elemento);
};
window.addEventListener("load", () => {
  let nombre = qs("#nombre");
  let apellido = qs("#apellido");
  let alias = qs("#alias");
  let email = qs("#email");
  let contraseña = qs("#contraseña");
  let avatar = qs("#avatar");
  let recordame = qs("#recordame");

  nombre.addEventListener("input", () => {
    let nombreActual = nombre.value;
    if (nombreActual.length >= 4 && nombreActual.length <= 12) {
      nombre.classList.add("validado");
      nombre.classList.remove("invalido");
    } else {
      nombre.classList.remove("validado");
      nombre.classList.add("invalido");
    }
  });
  apellido.addEventListener("input", () => {
    let apellidoActual = apellido.value;
    if (apellidoActual.length >= 4 && apellidoActual.length <= 12) {
      apellido.classList.add("validado");
      apellido.classList.remove("invalido");
    } else {
      apellido.classList.remove("validado");
      apellido.classList.add("invalido");
    }
  });
  alias.addEventListener("input", () => {
    let aliasActual = alias.value;
    if (aliasActual.length >= 4 && aliasActual.length <= 12) {
      alias.classList.add("validado");
      alias.classList.remove("invalido");
    } else {
      alias.classList.remove("validado");
      alias.classList.add("invalido");
    }
  });
  email.addEventListener("input", () => {
    let emailActual = email.value;
    if (emailActual.length >= 4 && emailActual.length <= 12) {
      email.classList.add("validado");
      email.classList.remove("invalido");
    } else {
      email.classList.remove("validado");
      email.classList.add("invalido");
    }
  });
  contraseña.addEventListener("input", () => {
    let contraseñaActual = contraseña.value;
    if (contraseñaActual.length >= 4 && contraseñaActual.length <= 12) {
      contraseña.classList.add("validado");
      contraseña.classList.remove("invalido");
    } else {
      contraseña.classList.remove("validado");
      contraseña.classList.add("invalido");
    }
  });
});
