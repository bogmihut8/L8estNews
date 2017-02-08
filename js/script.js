$(document).ready(
    function(){
        $.ajax({url: "https://newsapi.org/v1/articles?source="+location.hash.substring(1)+"&sortBy=top&apiKey=9470285a9b034567b2a8bfc5a859edb8", success: function(result){
            for(var i in result.articles){
                $("#freewall").append("<a href='"+result.articles[i].url+"' class='brick' target='_blank'><div class='well'><img src='"+result.articles[i].urlToImage+"'><h4>"+result.articles[i].title+"</h4><p>"+result.articles[i].description+"</p></div></a>")
                //console.log(result.articles[i])
            }
        }});
        
        $.ajax({url: "https://newsapi.org/v1/sources?apiKey=9470285a9b034567b2a8bfc5a859edb8", success: function(result){
            for(var i in result.sources){
                $("#"+result.sources[i].category).append('<a href="#'+result.sources[i].id+'" class="list-group-item" data-link="'+result.sources[i].id+'"><p style="text-align: center;">'+result.sources[i].name+'</p></a>')
            }
        }});
         $(document.body).on("click", ".list-group-item", function(){
                    $.ajax({url: "https://newsapi.org/v1/articles?source="+$(this).attr('data-link')+"&sortBy=top&apiKey=9470285a9b034567b2a8bfc5a859edb8", success: function(result){
                        $("#freewall").animate({
                          opacity: 0
                        }, 300, "linear", function() {
                          $(this).empty();
                          for(var i in result.articles){
                            $(this).append("<a href='"+result.articles[i].url+"' class='brick' target='_blank'><div class='well'><img src='"+result.articles[i].urlToImage+"'><h4>"+result.articles[i].title+"</h4><p>"+result.articles[i].description+"</p></div></a>")
                            //console.log(result.articles[i])
                        }
                        });
                        $("#freewall").animate({
                          opacity: 1
                        }, 300, "linear");
                    }});    
                });
    }
);
    
    