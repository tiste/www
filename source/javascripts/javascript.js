var realisticTypewriter = new RealisticTypewriter(),
    typeWriterElement   = document.getElementById('typewriter'),
    konami_keys         = [];
realisticTypewriter.minimumCharactersPerSecond = 15;
realisticTypewriter.maximumCharactersPerSecond = 25;

function konami(e) {
  konami_keys.push(e.keyCode);
  if (konami_keys.toString().indexOf('38,38,40,40,37,39,37,39,66,65') >= 0) {
    $(this).unbind('keydown', konami);
    matrix();
  }
}

function go_to(anchor) {
  $('html, body').animate({
    scrollTop: $(anchor).offset().top - 85
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
  go_to('.l-home');
  $('.l-home').addClass('matrix');
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

  $.parallaxify({
    positionProperty: 'transform',
    responsive: true
  });

  $('.skill').knob({
    readOnly: true,
    thickness: '.2',
    width: '150',
    height: '150'
  }).trigger(
    'configure', { 'fgColor': '#3498db', 'bgColor': '#FFFFFF' }
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

  $(document).keydown(konami);
});

$(window).load(function () {
  type_writer();

  $('.m-project--content').each(function () {
    $(this).hoverdir();
  }).hover(function () {
    $(this).find('h3').removeClass('animated fadeOutDown');
    $(this).find('h3').addClass('animated fadeInDown');
  }, function () {
    $(this).find('h3').removeClass('animated fadeInDown');
    $(this).find('h3').addClass('animated fadeOutDown');
  });
});
