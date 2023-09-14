console.log("Let's get this party started!");

function newGif(results) {
    let random = Math.floor(50*Math.random());
    $('#gif-output').append('<img src='+results.data.data[random].images.original.url+'>');
}

$('form').on('submit', async function(event) {
    event.preventDefault();
    let searchTerm = $('#search-term').val();
    const results = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {api_key: "qEBdJNq89v0a7nvwzMJv8P5BY4XpDfVt", q: searchTerm}});
    console.log(results.data.data);
    console.log(results.data.data[0]['url']);
    newGif(results);
})

$('#remove').on('click', function() {
    $('img').remove();
})