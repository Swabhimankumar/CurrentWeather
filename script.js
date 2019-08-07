var city="Kolkata";
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f273ae9097bcb0949ef6332d2eeee423",
function(data){
    
    console.log(data);

    var icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    var temp=Math.floor(data.main.temp);
    var weather=data.weather[0].main;
    console.log(icon);
    $(".icon").attr("src",icon);
    $('.temp').append(temp-273+" C");
    $('.weather').append(weather);
});