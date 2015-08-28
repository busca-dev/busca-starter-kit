$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

function ValidaForm() {

  if (document.form1.nome.value == ""  ) {

      window.alert("Campos * são Obrigatórios!");

      document.form1.nome.focus();

      return false;

  }

  if (document.form1.email.value == ""  ) {

      window.alert("Campos * são Obrigatórios!");

      document.form1.email.focus();

      return false;

  }

  if (document.form1.fone.value == ""  ) {

      window.alert("Campos * são Obrigatórios!");

      document.form1.fone.focus();

      return false;

  }
}
 


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
