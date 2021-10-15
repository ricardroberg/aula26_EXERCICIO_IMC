
function salvarDados () {
    const form = document.querySelector('.imc-form');
    const resultado = document.querySelector('.imc-result');
    

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        const imcFinal = (peso.value / (Math.pow(altura.value, 2))).toFixed(1);
        
        
        if (peso.value == '' || altura.value == '') {
            resultado.setAttribute("class", "imc-resultnull");
            resultado.textContent = `VALORES INCORRETOS`;
            
        } else if (imcFinal >= 18.5 && imcFinal <= 24.9){
            resultado.setAttribute("class", "imc-resultok");
            resultado.textContent = `IMC = ${imcFinal}  -  PESO NORMAL`;
        
        } else if (imcFinal >= 25 && imcFinal <= 29.9){
            resultado.setAttribute("class", "imc-resultbad1");
            resultado.textContent = `IMC = ${imcFinal}  -  SOBREPESO`;
        
        } else if (imcFinal >= 30 && imcFinal <= 34.9){
            resultado.setAttribute("class", "imc-resultbad1");
            resultado.textContent = `IMC = ${imcFinal}  -  OBESIDADE GRAU 1`;
        
        } else if (imcFinal >= 35 && imcFinal <= 39.9){
            resultado.setAttribute("class", "imc-resultbad1");
            resultado.textContent = `IMC = ${imcFinal}  -  OBESIDADE GRAU 2`;
        
        } else if ( imcFinal >= 40){
            resultado.setAttribute("class", "imc-resultbad2");
            resultado.textContent = `IMC = ${imcFinal}  -  OBESIDADE GRAU 3`;
        } else {
            resultado.setAttribute("class", "imc-resultbad1");
            resultado.textContent = `IMC = ${imcFinal}  -  ABAIXO DO PESO`;
        }


        console.log(imcFinal);
        //resetaFormulario = document.getElementById('resetaFormulario');
        //resetaFormulario.reset()
    };
    form.addEventListener('submit', recebeEventoForm);
    
}
salvarDados();