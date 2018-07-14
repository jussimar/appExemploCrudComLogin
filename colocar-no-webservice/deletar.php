<?php
    
    try{
        $conexao = mysqli_connect("localhost", "jussimar", "", "jussimar_app_exercicio");
        
        $codigo = $_GET['codigo'];
        
        $query = "delete from livros where cd_livro = $codigo";
        
        mysqli_query($conexao,$query);
        
        echo "Registro removido com sucesso";
        
    }   catch(Exception $e){
        echo "falha na conexao";
    }
    
    