function dd (){
    $.ajax({
        url: "data.php",
        type: 'POST',
        success: function(e){
          $(".eshop").empty();

          e = jQuery.parseJSON(e)//Парсируем JSON
            for(var i=0; i<e.length; i++){//Вывести все массивы
              var html = '<div class="eshopItem"><p class="service">'+ e[i][0] +'</p><p class="service-dis">'+ e[i][1] +'</p><p class="price">'+ e[i][2] +'</p></div>';
            $(".eshop").append(html)//Добавить в мейн код HTML снизу
            };
        }
     });          
}

function google_analytics(){
          $(".eshop").empty();
}