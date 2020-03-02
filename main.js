function dd(){
    $.ajax({
        url: "data.php",
        type: 'POST',
        success: function(e){
          $(".eshop").empty();

          e = $.parseJSON(e)//Парсируем JSON
            for(var i=0; i<e.length; i++){//Вывести все массивы
              let html = '<div class="eshopItem"><p class="service">'+ e[i][0] +'</p><p class="service-dis">'+ e[i][1] +'</p><p class="price">'+ e[i][2] +'</p></div>';
            $(".eshop").append(html)//Добавить в мейн код HTML снизу
            };
          let htmlButton = '<button class="search1" type="submit" name="form_bth" onclick="clear_items()">Скрыть тайну</button>';
          $("#button1").append(htmlButton);
        }
     });          
}

var createItems = '<div class="eshopItem"><p class="service">Получив эту информацию вы соглошаетесь с неразглашением комерческой тайны  *УК РФ Статья 183*</p><button class="search1" type="submit" name="form_bth" onclick="dd()">Получить информацию об услугах</button></div> '


function clear_items(){
  $(".eshop").empty();
  $("#button1").empty();

  $(".eshop").append(createItems);
}


function mysql() {
  $.ajax({
    url: "db.php",
    type: 'POST',
    success: function(sql){
      $(".stuff").empty();

      sql = $.parseJSON(sql);

      for(var i=0; i<sql.length; i++){
        
        let html = '<div class="eshopItem"><p class="service">'+ sql[i]["name"] +'</p><p class="service-dis">'+ sql[i]["surname"] +'</p><p class="price">'+ sql[i]["brith"] +'</p></div>';
        $(".stuff").append(html)//Добавить в мейн код HTML снизу
      }
      let htmlButton = '<button class="search1" type="submit" name="form_bth" onclick="clear_stuff()">Скрыть тайну</button>';
          $("#button2").append(htmlButton);
    }
  });
}

var createStuff ='<div class="eshopItem"><p class="service">Получить информацию о сотрудниках</p><button class="search1" type="submit" name="form_bth" onclick="mysql()">Получить</button></div>' 

function clear_stuff(){
  $(".stuff").empty();
  $("#button2").empty();

  $(".stuff").append(createStuff);
}