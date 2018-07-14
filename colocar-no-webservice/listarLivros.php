<?php
    
    try{
        $conexao = mysqli_connect("localhost", "jussimar", "", "jussimar_app_exercicio");
        
        $query = "SELECT * FROM livros order by  ds_titulo asc";
        
        $result = mysqli_query($conexao,$query);
        
        $registro = array(
            'livros' => array()    
            
        );
        $i = 0;
        while($linha = mysqli_fetch_assoc($result)){
            $registro['livros'][$i] = array(
                'codigo' => $linha['cd_livro'],
                'titulo' => $linha['ds_titulo'],
                'autor' => $linha['nm_autor'],
                'ano' => $linha['nr_ano'],
                'isbn' => $linha['nr_isbn']
            );
            $i++;
            
        }
        
        echo json_encode($registro);
        
        
        
    }   catch(Exception $e){
        echo "falha na conexao";
    }
    
    