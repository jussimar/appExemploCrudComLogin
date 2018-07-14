<?php
    
    try{
        $conexao = mysqli_connect("localhost", "jussimar", "", "jussimar_app_exercicio");
        
        $codigo = $_POST['codigo'];
        $titulo = $_POST['titulo'];
        $autor = $_POST['autor'];
        $ano = $_POST['ano'];
        $isbn = $_POST['isbn'];
        
        $query = "update livros set ds_titulo = '$titulo',nm_autor = '$autor', nr_ano = $ano, nr_isbn = $isbn where cd_livro = $codigo";
        
        mysqli_query($conexao,$query);
        
        echo "Cadastro alterado com sucesso! ";
        
    }   catch(Exception $e){
        echo "falha na conexao";
    }
    
    