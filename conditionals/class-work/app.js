// DOM
function getWeather(e) {
  const weather = e.target.value;
  
  switch(weather){

    case "cool":
      console.log("it is a cold day ");
      break ;
      ;

      case "sun":
      console.log("it is a sunny day ");
      break ;
      ;

      case "rain":
      console.log("it is a rainy day ");
      break ;
      ;

      case "snow":
      console.log("it is a snowy day ");
      break ;
      ;

      default :
      console.log("please choose an option");
      break ;
      ;
      
  }
}
