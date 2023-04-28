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
                    let result = territorios.find(terri => terri.id == e.target.id)
                        Swal.fire({
                            imageUrl: `${result.imgUrl}`,
                            imageWidth: 400,
                            imageHeight: 200,
                            showCloseButton: true,
                            showConfirmButton: false
                        })
                }

        }

    })
