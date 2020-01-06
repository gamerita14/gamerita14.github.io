function main(){
    var foto=["0","1","2","3","4","5","6","7","8","9","10"];
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
    }
}
main();