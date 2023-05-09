const terriContainer = document.getElementById("terriContainer");
const territories = {};

fetch("./territorios.json")
    .then(respuesta => respuesta.json())
    .then(territorios => {
        terriRender(territorios);
        territories.data = territorios;
    });

    function terriRender(terrisArray) {
        terriContainer.innerHTML = "";
        terrisArray.forEach(terri => {
            const cardTerri = document.createElement("button");
            cardTerri.className = "buttonTerri";
            cardTerri.innerHTML = ` <h3 class="buttonNumber" id=${terri.id}> ${terri.id} </h3> `;
            terriContainer.append(cardTerri);
        });
        terriContainer.addEventListener("click", showTerri);
    }

    function showTerri(e) {
        if (e.target.classList.contains("buttonNumber")) {
            const result = territories.data.find(terri => terri.id == e.target.id);
            Swal.fire({
                imageUrl: `${result.imgUrl}`,
                imageWidth: 400,
                imageHeight: 200,
                showCloseButton: true,
                showConfirmButton: true,
                idConfirmButton: "rutaBtn",
                confirmButtonText: `<a href="${result.ruta}">¿Como llegar? </a>`,
                customClass: "alertStyle"
            });
        }
    }