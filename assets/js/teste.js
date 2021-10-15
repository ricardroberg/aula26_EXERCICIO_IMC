        
        if (peso.value == '' || altura.value == '') {
            resultado.setAttribute("class", "imc-resultnull");
            resultado.textContent = "VALORES INCORRETOS";
            
        } else if (resultado >= 18.5 && resultado <= 24.9){
            resultado.setAttribute("class", "imc-resultok");
            resultado.textContent = "PESO NORMAL";
        
        } else if (resultado >= 25 && resultado <= 29.9){
            resultado.setAttribute("class", "imc-resultbad1");
            resultado.textContent = "SOBREPESO";
        
        } else if (resultado >= 30 && resultado <= 34.9){
            resultado.setAttribute("class", "imc-resultbad1");
            resultado.textContent = "OBESIDADE GRAU 1";
        
        } else if (resultado >= 35 && resultado <= 39.9){
            resultado.setAttribute("class", "imc-resultbad1");
            resultado.textContent = "OBESIDADE GRAU 2";
        
        } else if ( resultado >= 40){
            resultado.setAttribute("class", "imc-resultbad2");
            resultado.textContent = "OBESIDADE GRAU 3";
        } else if (resultado < 18.5) {
            resultado.setAttribute("class", "imc-resultbad1");
            resultado.textContent = "ABAIXO DO PESO";
        }