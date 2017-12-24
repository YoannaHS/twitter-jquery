$(document).ready(function() {
  $('#insertTwt').on('keydown', function() {
    $(this).val();
  });
  $('#button').on('click', function() {
    $('#insertTwt').val();
    $('.probart').append('<li>Este es un tweet</li>');
  });
});

// Algunos ejercicios prácticos
// $(document).ready(function() {
//   $('.info').css('color','red');
//   $('p').click(function() {
//     $(this).css('color','blue');
//   });
//   var $logo = $('.img-logo');
//   $('button').on('click', function() {
//     $('.img-logo').attr('src','assets/img/tres.jpg');
//   });
//   var $changeImg = $('#changlogo');;
//   $('.btnPrueba').on('click', function() {
//     $('#changlogo').insertAfter('.par');
//   });
// });





// window.addEventListener('load', function() {
//   var insertTwit = document.getElementById('insertTwt');
//   var twitbtn = document.getElementById('agregar');
//   var container = document.getElementById('containerTwit');
//   var countDinamic = document.getElementById('count');
//   var MAXCHARACTERS = 140;

//   insertTwit.addEventListener('keydown', function(event) {
//     console.log(event.target.value.trim().length);
//     if (event.target.value.trim().length) {
//       var total = MAXCHARACTERS - event.target.value.trim().length;
//       twitbtn.disabled = false;
//       countDinamic.textContent = MAXCHARACTERS - event.target.value.trim().length;
//       console.log(event.target.value.trim());
//       if (event.target.value.trim().length > MAXCHARACTERS) {
//         twitbtn.disabled = true;
//       }
//       countDinamic.classList.toggle('slateblue', 10 <= total && total < 20);
//       countDinamic.classList.toggle('olivedrab', total < 10);
//     } else {
//       twitbtn.disabled = true;
//       countDinamic.textContent = MAXCHARACTERS;
//     }
//     var text = event.target.value.split('');
//     var acum = 0;
//     for (var i = 0; i < text.length; i++) {
//       if (text[i] === '\n') {
//         acum++;
//       }
//       if (acum) {
//         event.target.rows = acum + 2;
//       }
//     }
//     if ((event.target.value.trim().length / event.target.cols) < event.target.rows) {
//       event.target.rows = (event.target.value.trim().length / event.target.cols) + 2;
//     }
//   });

//   twitbtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     var div = document.createElement('div');
//     var tweet = document.createElement('span');
//     var tweetText = document.createTextNode(insertTwit.value);
//     var hours = moment().format('LT');
//     var fulldata = document.createTextNode(hours);
//     var space = document.createTextNode(' ');

//     div.appendChild(tweet);
//     tweet.appendChild(tweetText);
//     tweet.appendChild(space);
//     tweet.appendChild(fulldata);
//     div.classList.add('new-tweet');
//     container.insertBefore(div, container.firstElementChild);

//     insertTwit.value = '';
//     insertTwit.focus();
//     twitbtn.disabled = true;
//     countDinamic.textContent = MAXCHARACTERS;
//   });
// });