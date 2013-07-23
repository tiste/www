var realisticTypewriter = new RealisticTypewriter(),
    typeWriterElement   = document.getElementById('typewriter');
realisticTypewriter.minimumCharactersPerSecond = 15;
realisticTypewriter.maximumCharactersPerSecond = 25;

function go_to(anchor) {
  $('html, body').animate({
    scrollTop: $(anchor).offset().top - 90
  }, 500);
}

function prompt(element, text) {
  var span = document.createElement('span');
  span.innerHTML = text;
  element.appendChild(span);
}

function type_writer() {
  realisticTypewriter.type('Hi !', typeWriterElement, function () {
    setTimeout(function () {
      prompt(typeWriterElement, '<br/>');
      realisticTypewriter.type("I'm Baptiste Lecocq.", typeWriterElement, function () {
        setTimeout(function () {
          prompt(typeWriterElement, '<br/>');
          realisticTypewriter.type('A 20yo french student developer.', typeWriterElement, function () {
            prompt(typeWriterElement, '<br/>');
            setTimeout(function () {
              prompt(typeWriterElement, '<br/>');
              realisticTypewriter.type('Oh, I love web development.', typeWriterElement);
            }, 1000);
          });
        }, 1000);
      });
    }, 1000);
  });
}

function matrix() {
  go_to('.head');
  $('.head').addClass('matrix');
  $('#typewriter').empty();

  realisticTypewriter.type('Follow the white rabbit.', typeWriterElement, function () {
    setTimeout(function () {
      $('#typewriter').empty();
      realisticTypewriter.type('Knock, knock, Neo.', typeWriterElement);
    }, 1500);
  });
}

function set_percent(language, percent) {
  $({value: 0}).delay(700).animate({value: percent}, {
    duration: 1500,
    easing: 'swing',
    step: function () {
      $(language).val(Math.ceil(this.value)).trigger('change');
    }
  });
}

$(document).ready(function() {
  $('.navbar a').on('click', function () {
    var anchor = $(this).attr('href');
    go_to(anchor);

    return false;
  });

  $.stellar({
    horizontalScrolling: false
  });

  $('.skill').knob({
    readOnly: true,
    thickness: '.2',
    width: '150',
    height: '150'
  }).trigger(
    'configure', { 'fgColor': '#1abc9c', 'bgColor': '#FFFFFF' }
  );

  var flag = true;

  $(window).scroll(function () {
    var skills_top = $('#skills').position().top - 700;

    if (flag) {
      if ($(window).scrollTop() > skills_top) {
        $('.skill').each(function () {
          skill       = $(this);
          skill_value = $(this).data('value');

          set_percent(skill, skill_value);
        });
        flag = false;
      }
    }
  });
});

$(window).load(function () {
  type_writer();

  $('.m-project').hover(function () {
    $(this).find('p').removeClass('animated fadeOutDown');
    $(this).find('p').addClass('animated fadeInDown');
  }, function () {
    $(this).find('p').removeClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeOutDown');
  });
});
