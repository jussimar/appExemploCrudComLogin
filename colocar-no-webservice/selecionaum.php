<?php
    
    try{
        $conexao = mysqli_connect("localhost", "jussimar", "", "jussimar_app_exercicio");
        
        $codigo = $_GET['codigo'];
        
        $query = "SELECT * FROM livros where cd_livro = $codigo";
        
        $result = mysqli_query($conexao,$query);
        
        $linha = mysqli_fetch_assoc($result);
        
        $registro = array(
            'livros' => array(
                 array(
                    'codigo' => $linha['cd_livro'],
                    'titulo' => $linha['ds_titulo'],
                    'autor' => $linha['nm_autor'],
                    'ano' => $linha['nr_ano'],
                    'isbn' => $linha['nr_isbn']
                )
            )    
        );

        echo json_encode($registro);
        
    }   catch(Exception $e){
        echo "falha na conexao";
    }
    
    