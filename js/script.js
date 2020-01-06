function mostraimg(){
    var foto=["1","2","3","4"];
    var i;
    for(i=0;i<foto.length;i++){
        path="/resources/_gen/images/"+foto[i]+".jpg";
        document.write(`
                            <div class="singolaimg" id=${i}>
                                <a href="${path}">
                                    <img  src=${path} alt=${i}>
                                </a>
                            </div>
                        `);
        //TODO:Pagina personalizzata per le singole immagini
    }
}

