(function ($) {
  $.fn.parallax = function (options) {
    var defaults = {
      'coef': 0.7
    };

    var opt = $.extend(defaults, options);

    return this.each(function () {
      var $$ = $(this);

      $(window).bind('scroll', function () {
        var offset = $$.offset();
        var stop = offset.top + $$.height();
        var windowTop = $(this).scrollTop();

        if ((windowTop >= 0) && ((windowTop + $(this).height()) >= offset.top) && (windowTop <= stop)) {
          newCoord = (windowTop * opt.coef - 50) * -1;

          $$.css({
            'background-position': 'center ' + newCoord + 'px'
          });
        }
      });
    });
  }
})(jQuery);

function prompt(element, text) {
  var span = document.createElement('span');
  span.innerHTML = text;
  element.appendChild(span);
}

function type_writer() {
  var realisticTypewriter = new RealisticTypewriter(),
      typeWriterElement   = document.getElementById('typewriter');

  prompt(typeWriterElement, 'Hi !');

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
}

function set_percent(language, percent) {
  $({value: 0}).delay(1500).animate({value: percent}, {
    duration: 1500,
    easing: 'swing',
    step: function () {
      $(language).val(Math.ceil(this.value)).trigger('change');
    }
  });
}

$(document).ready(function() {
  $('.skill').knob({
    readOnly: true
  }).trigger(
    'configure', { 'fgColor': '#1abc9c', 'bgColor': '#FFFFFF' }
  );

  var flag = true;
  $('.l-skills').scrollspy({
    onEnter: function(element, position) {
      if (flag) {
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

  $('.me').parallax({coef: 0.4});

  $('.m-project').hover(function () {
    $(this).find('p').removeClass('animated fadeOutDown');
    $(this).find('p').addClass('animated fadeInDown');
  }, function () {
    $(this).find('p').removeClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeOutDown');
  });
});
