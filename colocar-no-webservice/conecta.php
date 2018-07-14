<?php
    
    try{
        $conexao = mysqli_connect("localhost", "jussimar", "", "jussimar_app_exercicio");
        
        $usuario = $_POST['usuario'];
        $senha = $_POST['senha'];
    
        $query = "select nm_usuario, ds_senha from usuario where nm_usuario = '$usuario' and ds_senha = '$senha'";
    
        $result = mysqli_query($conexao, $query);
    
        if(empty(mysqli_fetch_assoc($result))){
            echo "0";
        }else{
            echo "1";
        }
    } catch(Exception $e){
        echo "falha na conexao";
    }
    
    