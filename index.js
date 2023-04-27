fetch("./territorios.json")
    .then(respuesta => respuesta.json())
    .then(territorios => {
        let terriContainer = document.getElementById("terriContainer")
    
        terriRender(territorios);

        function terriRender (terrisArray) {
            terriContainer.innerHTML = " "
            for (const terri of terrisArray) {
                let cardTerri = document.createElement("button")
                cardTerri.className = "buttonTerri"
                cardTerri.innerHTML = `
                <h3 class= "buttonNumber" id=${terri.id}> ${terri.id} </3>
                `
                terriContainer.append(cardTerri)
            }
            let buttons = document.getElementsByClassName("buttonNumber")
                for (const button of buttons) {
                    button.addEventListener("click", showTerri)
                        
                }
                function showTerri (e) {
                    Toastify({
                        text: "AGREGADO AL CARRITO",
                        duration: 2000,
                        gravity: "bottom",
                        position: "right",
                        className: "styleToastify",
                        style: {
                            background: "#71A621"
                        }
                        }).showToast()
        
                }

        }

    })