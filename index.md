<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>alura</title>
    <link rel="stylesheet" href="./estilo.css">
    <script src="./script.js" defer ></script>
</head>
<body>
    <div class="box">
        <img src="./lotus.png" alt="lotus" class="icon">

        <h1> Meu Segredo:</h1>

        <main class="central">
            <form action="">
                <input class ="textoinput" type ="text" name ="textoinput" 
                id ="textoinput" placeholder ="digite sua frase aqui">
              <p id="label">Apenas letras minúsculas, sem acentos.</p>
                <input class ="btn" type ="submit" value ="Codificar" 
                id ="btncrip">
                <input class ="btn" type ="submit" value ="Decodificar" 
                id = "btndecrip">
                <input class ="btn" type ="reset" value="Limpar" id="btnlimpar">
            </form>
            <div class="box2">
                <h2>Segredo Revelado:</h2>
                <input class ="mensagem" type ="text" id="msg" disabled>
                <input class = "btn" type="submit" value="Copiar" 
                id ="btncopiar">
            </div>
            
        </main>
        
    </div>
</body>
</html>
