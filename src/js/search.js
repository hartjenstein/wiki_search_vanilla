
// window.location.href = "http://localhost:3000/?#search";
window.location.href = "http://hartjenstein.github.io/wiki_search_vanilla?#search";
function getResults(){
  //  window.location.href = "http://localhost:3000/?#search";
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+getSearchTerm()+"&limit=10&namespace=0&format=json",
        dataType: "jsonp",
        success: function (response) {
            console.log("success")
            console.log(response)
         if ($("#content-box").html() !== "") {
            $("#content-box").html("");
           } 
            response[1].forEach((item, i) => {
                let resultTitle = '<div class="result"><div class="resultContent align-middle"><h2>' + item + '</h2>';
                let resultSummary =  '<p class="resultText">' + response[2][i] + '</p></div>';
                let resultLink =  '<a class="resultLink" href="' + response[3][i] + '" target="_blank"></a></a></div>';
                let result = resultTitle + resultSummary + resultLink
                $("#content-box").append(result); 
            });
      
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
    console.log(getResults())
    getResults();
}
function getRandomArticle() {
    $("#content-box").html('<object data="https://en.wikipedia.org/wiki/Special:Random" style="width:100%; height: 100%; min-height: 80vh;">');
};

function getSearchTerm() {
    console.log(document.getElementById("search-input").value)
    return document.getElementById("search-input").value;
}

