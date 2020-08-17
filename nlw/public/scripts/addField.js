document.querySelector("#add-time") //procura o botao
.addEventListener('click', cloneField) //ao clicar faz algo(continuação da linha superior)

function cloneField(){
    console.log("!bota he!")
    
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //copia mas ainda não cola
    //"Node" é a estrutura.

    const fields = newFieldContainer.querySelectorAll('input') 
    
    fields.forEach(function(field){
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

