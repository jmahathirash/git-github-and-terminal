$.ajax({
    url: " https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
    }
}).done(function(data) {
  //alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});


// $('form').on('submit', (event)=>{

//     event.preventDefault();
    
    
    
//     const promise = $.ajax({
//         url: " https://data.cityofnewyork.us/resource/erm2-nwe9.json"
//     })
    
//     promise.then(
//         (data)=>{
//             $('#descriptor').html(data.descriptor)
//             $('#agency').html(data.agency)
//             $('#resolutiondescription').html(data.resolution_decription)
    
//         }
//     )
    
//     })

   $button.click(function(){
    var url = $(this).attr('data-url');
        $.ajax({ url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX",
            
        
    });
        url.then(
                (data)=>{
                        $('#descriptor').html(data.descriptor)
                        $('#agency').html(data.agency)
                        $('#resolutiondescription').html(data.resolution_decription)
                
                    }
                )
    });
    

