/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
var campoQuantidade = document.getElementById('quantidade');
var form = document.getElementById("contactForm");
var wrapperButtonSubmit = document.getElementById('submitButton')

const handleSubmit = async (e) => {
  e.preventDefault();

  const [button] = wrapperButtonSubmit.getElementsByTagName('button')

  button.disabled = true
  button.textContent = 'Contate-nos...'

  try {
    const payload = {
      email: e.target.email.value,
      nome: e.target.name.value,
      telefone: e.target.telefone.value,
      endereco: e.target.endereco.value,
      numero: e.target.numero.value,
      bairro: e.target.bairro.value,
      cidade: e.target.cidade.value,
      estado: e.target.estado.value,
      cep: e.target.cep.value,
      dataVisita: e.target.dataVisita.value,
      quantidade: e.target.quantidade.value
    }

    const api = await fetch('/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const statusCode = api.status

    if (statusCode === 200) {
      document.getElementById('submitSuccessMessage').classList.remove('d-none')
      wrapperButtonSubmit.classList.add('d-none')
    } else {
      document.getElementById('submitErrorMessage').classList.remove('d-none')
      button.disabled = false
    }
  } catch (error) {
    document.getElementById('submitErrorMessage').classList.remove('d-none')
    button.disabled = false
  }
}

form.addEventListener('submit', handleSubmit)

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});

function ocultaBotao() {
  document.getElementById('botaoEnviar').style.display = 'none';
  //document.getElementById("formEnviado").innerHTML = '<div class="fw-bolder">Compra realizada com sucesso!</div>'
  alert("Compra realizada com sucesso!")
}
/*
Até 20 ingressos - R$50
De 21 a 40 - R$48
41 a 100 - R$45
Acima de 100 - R$40
*/
/*
Até 20 ingressos: R$65,00 (cada)
De 21 a 40 ingressos: R$63,00 (cada)
De 41 a 100 ingressos: R$60,00 (cada)
*/
function calculaTotal() {
  precoIngresso = 65;
  frete = 0;
  quantidade = parseInt(campoQuantidade.value);
  if (quantidade <= 20) { // PREÇO 65
    precoIngresso = 65;
    document.getElementById("valorIngressos").value = "R$ " + (quantidade * precoIngresso) + ",00";
    document.getElementById("valorFrete").value = "GRÁTIS!";
    document.getElementById("valorTotal").value = "R$ " + (quantidade * precoIngresso) + ",00";
    document.getElementById("valorTotal2").value = "R$ " + (quantidade * precoIngresso) + ",00";
  }  
  else if (quantidade > 20 && quantidade <= 40){ // PREÇO 63
    precoIngresso = 63;
    document.getElementById("valorIngressos").value = "R$ " + (quantidade * precoIngresso) + ",00";
    document.getElementById("valorFrete").value = "GRÁTIS!";
    document.getElementById("valorTotal").value = "R$ " + ((quantidade * precoIngresso) + frete) + ",00";
    document.getElementById("valorTotal2").value = "R$ " + ((quantidade * precoIngresso) + frete) + ",00";
  }
  else if (quantidade > 40){ // PREÇO 60
    precoIngresso = 60;
    document.getElementById("valorIngressos").value = "R$ " + (quantidade * precoIngresso) + ",00";
    document.getElementById("valorFrete").value = "GRÁTIS!";
    document.getElementById("valorTotal").value = "R$ " + ((quantidade * precoIngresso) + frete) + ",00";
    document.getElementById("valorTotal2").value = "R$ " + ((quantidade * precoIngresso) + frete) + ",00";
  }/*
  else if (quantidade > 100){ // PREÇO 40
    precoIngresso = 40;
    document.getElementById("valorIngressos").value = "R$ " + (quantidade * precoIngresso) + ",00";
    document.getElementById("valorFrete").value = "GRÁTIS!";
    document.getElementById("valorTotal").value = "R$ " + ((quantidade * precoIngresso) + frete) + ",00";
    document.getElementById("valorTotal2").value = "R$ " + ((quantidade * precoIngresso) + frete) + ",00";
  }*/
}

function validaCheckbox() {
  var checkDados = document.getElementById('checkDados');
  var checkCompra = document.getElementById('checkCompra');
  if (checkDados.checked && checkCompra.checked) {
    document.getElementById("botaoEnviar").innerHTML = '<button class="btn btn-primary btn-xl text-uppercase" id="botao" type="submit">Realizar compra</button>';
  } else {
    document.getElementById("botaoEnviar").innerHTML = '<button class="btn btn-primary btn-xl text-uppercase disabled" id="botao" type="submit">Realizar compra</button>';
  }
}

