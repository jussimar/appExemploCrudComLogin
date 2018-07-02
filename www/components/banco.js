// This is a JavaScript file

//entrando no sistema através de usuario e senha
$(document).on("click","#logar", function(evt){
    //parametros para serem usados no post
     var parametros = {
                "senha" : $("#senha").val(),
                "usuario" : $("#user").val()
    };
    //ajax para fazer a verificação do e-mail e senha.
    $.ajax({
      type:"post",
      url:"https://maquinamobile-jussimar.c9users.io/exercicio/conecta.php",
      data:parametros,
      success: function(data){
        if(data == "1"){
          $(location).attr('href','page1.html');
        }else{
          navigator.notification.alert("Usuário ou senha invalidos");
        }
        
      }
    });
} );

$(document).on("click","#salvar",function(evt){
    var parametros = {
      "titulo": $("#titulo").val(),
      "autor": $("#autor").val(),
      "isbn": $("#isbn").val(),
      "ano": $("#ano").val()
    };
    
    $.ajax({
        type:"post",
        url:"https://maquinamobile-jussimar.c9users.io/exercicio/cadastro.php",
        data: parametros,
        success: function(data){
            navigator.notification.alert(data);
            $("#titulo").val("");
            $("#autor").val("");
            $("#isbn").val("");
        },
        error:function(data){
            navigator.notification.alert("Erro: "+data);
        }
    });
});

function preencheAno(){
    var texto;
    for(x = 1900; x <= 2018; x++){
        texto += "<option value='"+x+"'>"+x+"</option>";
    }
    $("#ano").html(texto);
}

function preencheLivros(){
   $.ajax({
      type:"post",
      url:"https://maquinamobile-jussimar.c9users.io/exercicio/listarLivros.php",
      dataType:"json",
      success: function(data){
            var itemlista = "";
            $.each(data.livros, function(i, dados){
                itemlista += "<option value='"+dados.codigo+"'>"+dados.titulo+"</option>";
            });
            $("#listalivros").html(itemlista);
            
        },
       error:function(data){
           navigator.notification.alert("Erro: "+data);
       }
    });
}

$(document).on("click","#listar", function(evt){
   $(location).attr('href',"page2.html");
});

$(document).on("change","#listalivros", function(evt){
   
   var codigoSelecionado = $("option:selected", ("#listalivros")).val(); 
   $.ajax({
      type:"get",
      url:"https://maquinamobile-jussimar.c9users.io/exercicio/selecionaum.php",
      data: "codigo="+codigoSelecionado,
      dataType:"json",
      success: function(data){
            $.each(data.livros, function(i, dados){
                $("#titulo").val(dados.titulo);
                $("#autor").val(dados.autor);
                $("#isbn").val(dados.isbn);
                $("#ano option[value="+dados.ano+"]").attr('selected','selected');
            });
        },
       error:function(data){
           navigator.notification.alert("Erro: "+data);
       }
    });
});

$(document).on("click","#deletar", function(evt){
    var codigoSelecionado = $("option:selected", ("#listalivros")).val(); 
    $.ajax({
      type:"get",
      url:"https://maquinamobile-jussimar.c9users.io/exercicio/deletar.php",
      data: "codigo="+codigoSelecionado,
      success: function(data){
            navigator.notification.alert(data);
            location.reload();
        },
       error:function(data){
           navigator.notification.alert("Erro: "+data);
       }
    });
    
});

$(document).on("click","#salvaredit", function(evt){
      var parametros = {
          "codigo": $("option:selected", ("#listalivros")).val(),
          "titulo": $("#titulo").val(),
          "autor": $("#autor").val(),
          "isbn": $("#isbn").val(),
          "ano": $("#ano").val()
        };     
     $.ajax({
        type:"post",
        url:"https://maquinamobile-jussimar.c9users.io/exercicio/alterar.php",
        data:parametros,
        success: function(data){
            navigator.notification.alert(data);
            location.reload();
        },
       error:function(data){
           navigator.notification.alert("Erro: "+data);
       }
     });
});


$(document).on("click", "#editar", function(evt){
    habilita();
});

$(document).on("click", "#block", function(evt){
    desabilitar();
});


function habilita(){
    $("#titulo").prop('readonly', false);
    $("#autor").prop('readonly', false);
    $("#isbn").prop('readonly', false);
    $("#ano").prop('disabled', false);
}

function desabilitar(){
    $("#titulo").prop('readonly', true);
    $("#autor").prop('readonly', true);
    $("#isbn").prop('readonly', true);
    $("#ano").prop('disabled', true);
}
