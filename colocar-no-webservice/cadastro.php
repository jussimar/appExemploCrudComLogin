<?php
    
    try{
        $conexao = mysqli_connect("localhost", "jussimar", "", "jussimar_app_exercicio");
        
        $titulo = $_POST['titulo'];
        $autor = $_POST['autor'];
        $ano = $_POST['ano'];
        $isbn = $_POST['isbn'];
        
        $query = "insert into livros values(null, '$titulo', $ano, $isbn, '$autor');";
        
        mysqli_query($conexao,$query);
        
        echo "Cadastro Efetuado com sucesso!";
        
    }   catch(Exception $e){
        echo "falha na conexao";
    }
    
    