const VIDEO = {
    getVideos : (function(){ // function
        return $.ajax({
            type : 'get',
            url : 'https://pelec4.herokuapp.com/movies'// url to fetch
        })
    })
}