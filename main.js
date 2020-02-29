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
          var htmlButton = '<button class="search1" type="submit" name="form_bth" onclick="clear_items()">Скрыть тайну</button>';
          $(".buttonplace").append(htmlButton);
        }
     });          
}

var createItems = '<div class="eshopItem"><p class="service">Получив эту информацию вы соглошаетесь с неразглашением комерческой тайны  *УК РФ Статья 183*</p><button class="search1" type="submit" name="form_bth" onclick="dd()">Получить информацию об услугах</button></div> '


function clear_items(){
  $(".eshop").empty();
  $(".buttonplace").empty();

  $(".eshop").append(createItems);
}