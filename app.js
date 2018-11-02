/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value
*/

// to delete from local storage : localStorage.removeItem(key);

$(document).ready(function(){
  console.log('before\n', window.localStorage);

  ///////////////////////////////////////
  // BEARS
  ///////////////////////////////////////

  var createBear = function (name, food) {

    $('#' + name).css({height: '50%', width: '50%'});
    $('#' + name).css({transform: 'rotate(0deg)'}); 

    return {
      name: name,
      food: food,
      timesEaten: 0
    }

  };



  var paddington = localStorage.getItem('Paddington');

  if (!paddington) {
    paddington = createBear('Paddington', 'marmalade');
  } else {
    paddington = JSON.parse(paddington);
  }


  var pooh = localStorage.getItem('Pooh');

  if(!pooh) {
    pooh = createBear('Pooh', 'honey');
  } else {
    pooh = JSON.parse(pooh);
  }


  var volibear = localStorage.getItem('Volibear');

  if (!volibear) {
    volibear = createBear('Volibear', 'Teemo');
  } else {
    volibear = JSON.parse(volibear);
  }

  
  ///////////////////////////////////////
  // FUNCTIONS
  ///////////////////////////////////////

  var MAX = 5;
  var MIN = 0;

  var feed = function(bear) {

    if (bear.timesEaten < MAX) { 

      bear.timesEaten++;
      var h = 50 + (bear.timesEaten * 10);
      var w = 50 + (bear.timesEaten * 10);
      
      // add bear.food image

      $('#' + bear.name).css({height: h + '%', width: w + '%'});
      localStorage.setItem(bear.name, JSON.stringify(bear)); 

    } else if (bear.timesEaten === 5) {

      $('#' + bear.name).css({transform: 'rotate(90deg)'}); // degrees are not relative
      localStorage.setItem(bear.name, JSON.stringify(bear));
      console.log('FOOD COMA!!')
    }
    // how to stop bears from shrinking after they fall??
    // remove event listeners?

    console.log(bear);
  }



  var steal = function(bear) {

    if (bear.timesEaten > MIN) {

      bear.timesEaten--;
      var h = 100 - ((MAX - bear.timesEaten) * 10);
      var w = 100 - ((MAX - bear.timesEaten) * 10);

      $('#' + bear.name).css({height: h + '%', width: w + '%'});
      localStorage.setItem(bear.name, JSON.stringify(bear));

    } 

    console.log(bear);
  }



  // remove item from app

  ///////////////////////////////////////
  // EVENT LISTENERS
  ///////////////////////////////////////

  // listen for click event (del)

  /*


  $('#delete').on('click', function(){
    // clears local storage of saved info
    localStorage.clear();

    paddington = createBear('Paddington', 'marmalade');
    pooh = createBear('Pooh', 'honey');
    volibear = createBear('Volibear', 'Teemo');

    $('#Paddington').css({transform: 'rotate(0deg)'}); 
    $('#Pooh').css({transform: 'rotate(0deg)'});
    $('#Volibear').css({transform: 'rotate(0deg)'});

    //function to return default obj. func getDefaultPooh
    // bear -> deafult bear


    // bear size needs to be reset as well
    // createBear has them at 0
    // timesEaten === 0 needs to have a 
    
  });


  */

/*
  localStorage.removeItem(key);
*/  

  $('#delete-paddington').on('click', function(){

      localStorage.removeItem('Paddington');
      paddington = createBear('Paddington', 'marmalade');
    
  });

  $('#delete-pooh').on('click', function(){

      localStorage.removeItem('Pooh');
      pooh = createBear('Pooh', 'marmalade');
      
  });

  $('#delete-volibear').on('click', function(){

      localStorage.removeItem('Volibear');
      volibear = createBear('Volibear', 'marmalade');
 
  });





  $('#feed-paddington').on('click', function(){
    feed(paddington);
  }); 

  $('#feed-pooh').on('click', function(){
    feed(pooh);
  });

  $('#feed-volibear').on('click', function(){
    feed(volibear);
  });

  $('#steal-from-paddington').on('click', function(){
    steal(paddington);
  }); 

  $('#steal-from-pooh').on('click', function(){
    steal(pooh);
  });

  $('#ks-from-volibear').on('click', function(){
    steal(volibear);
  });

});


 ///////////////////////////////////////
 // JOHN + HREXT05's CODE
 ///////////////////////////////////////

/*
$(document).ready(function(){
  console.log("before\n", window.localStorage);

  // add event listener
  $(".add-text-btn").on("click", function(){
    $(".show-text").empty();
    var curTextValue = $("#theKey").val(); // reading from <input>
    var curKeyValue = "theKey"; // change to dynamic key?
    localStorage.setItem(curKeyValue, curTextValue);
    $(".show-text").append(curTextValue);
  });

  // remove item from app

  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    $(".show-text").empty();
  });

*/  
;