
function getResults(){

    $.ajax({
     // url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+getSearchTerm()+"&prop=info&inprop=url&utf8=&format=json",
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+getSearchTerm()+"&limit=10&namespace=0&format=json",
       // action=opensearch&search=api&limit=10&namespace=0&format=jsonfm
        dataType: "jsonp",
        success: function (response) {
            console.log("success")
            console.log(response)
         if ($("#content-box").html() !== "") {
            /*if ($("#content-box").children().length > 0 ) {*/
            /*   var myNode = $("#content-box");*/
            /*    while (myNode.firstChild) {*/
            /*        myNode.removeChild(myNode.firstChild);*/

            $("#content-box").html("");
           } 
            
            response[1].forEach((item, i) => {
                let resultTitle = '<div class="result"><div class="resultContent align-middle"><h2>' + item + '</h2>';
                let resultSummary =  '<p class="resultText">' + response[2][i] + '</p></div>';
                let resultLink =  '<a class="resultLink" href="' + response[3][i] + '" target="_blank"></a></a></div>';
                let result = resultTitle + resultSummary + resultLink
                $("#content-box").append(result); 
            });
           
     /*       let article = data.parse.text["*"];
            let markup = $('<div></div>').html(article);

            // remove links as they will not work
            markup.find('a').each(function() { $(this).replaceWith($(this).html()); });
                    
            // remove any references
            markup.find('sup').remove();

             // remove cite error
            markup.find('.mw-ext-cite-error').remove();


            $('#content-box').html($(markup).find('p'));
 
        },*/
     
       }, error: function (errorMessage) {
        }
    });
    console.log("Searchterm : ",getSearchTerm())
};

// ---- Event listener - random search -----

document.getElementById("random-search").addEventListener("click", fireEvents);
document.getElementById("search-button").addEventListener("click", searchEvents);
function fireEvents() {
    getRandomArticle();
};
function searchEvents(){
    getSearchTerm();
    getResults();
}
function getRandomArticle() {
    $("#content-box").html('<object data="https://en.wikipedia.org/wiki/Special:Random" style="width:100%; height: 100%; min-height: 80vh;">');
};

function getSearchTerm() {
    return document.getElementById("search-input").value;
}

