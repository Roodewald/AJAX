function dd (){
    $.ajax({
        url: "data.php",
        type: 'POST',
        success: function(e){
          $("main").empty();

          e = jQuery.parseJSON(e)//Парсируем JSON
            for(i=0; i<e.length; i++){//Вывести все массивы
              var html = '<div>'+e[i]+'</div>';//Создаем код HTML
            $("main").append(html)//Добавить в мейн код HTML снизу
            };
        }
     });          
}