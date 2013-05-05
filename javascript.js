
$(document).ready(function() {

	var letterArray = ['A','A','B','B','C','C','D','D'];
  newArray = shuffle(letterArray);

  function shuffle(o){ //v1.0
    for( var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  var i = 0;
  while(i < newArray.length){
  	$('#t' + i).append($('<span>' + newArray[i] + '</span>'));
  	$('span').addClass('hidden');
  	i += 1;
  }

  $('#reset').on('click', function() {
    $('span').removeClass('match');
    $('span').addClass('hidden');
    $('#timer').css('color', 'green');
    timeStart.call();
    click.call();
  });

// ----------- timer -------------
  var counter = 0;

  function timeStart() {
    var count = 0;
    counter = setInterval(timer, 1000);
    function timer(){
    count = count + 1;

    if(count > 10){
      $('#timer').css('color', 'orange');
       }

    if($('span').hasClass('hidden') === false){
       clearInterval(counter);
       return;
    }
   document.getElementById("timer").innerHTML = "Time: " + count;
    }
  }
  // ------------- timer -------------

  var click1;
  var click2;

  function click () {
    $('td').on('click', function() {
      $(this).children('span').removeClass('hidden');
      $(this).children('span').addClass('active');
      click1 = $(this).children('span');
      $('td').off('click');
      clickTwo.call();
    });
  }

  function clickTwo () {
    $('.hidden').parent().on('click', function() {

      $(this).children('span').removeClass('hidden');
      click2 = $(this).children('span');

      if($(click1).text() != $(click2).text()){
        setTimeout(function(){
        $(click1).addClass('hidden');
        $(click2).addClass('hidden');
        }, 800);
        $('td').off('click');
        click.call();
      } else if ($(click1).text() === $(click2).text()){
          $(click1).addClass('match');
          $(click2).addClass('match');
          $('td').off('click');

          if($('span').hasClass('hidden') === false){
            $('td').off('click');
            $('#win').append($('<span>"YOU WON!!!"</span>').fadeIn(1000));
          } else {
            click.call();
        }}
    });
  }

});