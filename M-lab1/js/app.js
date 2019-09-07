// Whatever you want here...

$(function(){
    var Result = $(".container"); // from the index html container
 const retrieveVideos = async () => {
        try{ 
                          const getVideos = await VIDEO.getVideos(); // getting video from services
                        await getVideos.forEach(function(res) {
                            console.log(res); // to see on the console
                        ListVideos(res.title, res.poster, res.plot, res.genres); // function get
            });

        }               // handle by error
                         catch(error){
                             console.log(error);
        }
    }          // function List of Videos
                 function ListVideos(title, poster, plot, genres){
                      if(poster) {
                              var movieDesc = `<li>
                                        <a href="">
                                            <img src="${poster}"></img>
                                        </a>
                                    <h3>${title}</h3>
                                    <h3>${plot}</h3>
                                    <h3>${genres}</h3>
                                    </li>
                                `
        }
                Result.append(movieDesc);// to display the image
    }
            retrieveVideos(); // handle by function Videos
})

