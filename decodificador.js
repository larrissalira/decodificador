function confirmar () {
    var cifradecesar =  document.getElementById("cifradecesar");
    var base64 = document.getElementById("base64");
    var criptografar = document.getElementById("criptografar");
    var descriptografar = document.getElementById("descriptografar");

    if (cifradecesar.checked == true){
        //mostrar o campo senha aq
        var exibir = document.querySelector('#senhaBox');
        exibir.style.display= flex;
        if (criptografar.checked == true){
            let encryptBtn = document.getElementById ("executar");
            let eInput = document.getElementById("retorno");
            let pInput = document.getElementById("mensagem");
            let inputs = [eInput, pInput];

            inputs.forEach(input => {
                input.oninput = () => {
                    input.value = input.value.toUpperCase()
                }
            })

            function encrypt(){
                let pInput = document.getElementById("mensagem").value;
                let solved = "";
                let shiftInput = parseInt(document.getElementById("shiftInput").value);

                for(var i = 0; i < pInput.length; i++){
                    let ascii_num = pInput[i].charCodeAt()
                    let sum = ascii_num + shiftInput
                    sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i]
                }
                eInput.value = solved
            }

            encryptBtn.addEventListener("click", encrypt)

        } else if (descriptografar.checked == true){
            let encryptBtn = document.getElementById ("executar");
            let eInput = document.getElementById("retorno");
            let pInput = document.getElementById("mensagem");
            let inputs = [eInput, pInput];

            inputs.forEach(input => {
                input.oninput = () => {
                    input.value = input.value.toUpperCase()
                }
            })

            function encrypt(){
                let pInput = document.getElementById("mensagem").value;
                let solved = "";
                let shiftInput = - parseInt(document.getElementById("shiftInput").value);

                for(var i = 0; i < pInput.length; i++){
                    let ascii_num = pInput[i].charCodeAt()
                    let sum = ascii_num + shiftInput
                    sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i]
                }
                eInput.value = solved
            }

            encryptBtn.addEventListener("click", encrypt)
        }
        
    } else if (base64.checked == true){
        //esconder campo senha aq
        var exibir = document.querySelector('#senhaBox');
        exibir.style.display = "none";
        if (criptografar.checked == true){
            let encryptBtn = document.getElementById("executar");
            let eInput = document.getElementById("retorno");
            let pInput = document.getElementById("mensagem");

            function encrypt (){
                eInput.value = btoa(pInput.value);
            }

            encryptBtn.addEventListener("click", encrypt)
        } else if (descriptografar.checked == true){
            let encryptBtn = document.getElementById("executar");
            let eInput = document.getElementById("retorno");
            let pInput = document.getElementById("mensagem");

            function encrypt (){
                eInput.value = atob(pInput.value);
            }

            encryptBtn.addEventListener("click", encrypt)
        }
    }
}