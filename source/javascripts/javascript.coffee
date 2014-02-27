realisticTypewriter = new RealisticTypewriter()
typeWriterElement = document.getElementById('typewriter')
konami_keys = []
realisticTypewriter.minimumCharactersPerSecond = 15
realisticTypewriter.maximumCharactersPerSecond = 25

konami = (e) ->
  konami_keys.push e.keyCode
  if konami_keys.toString().indexOf('38,38,40,40,37,39,37,39,66,65') >= 0
    $(this).unbind 'keydown', konami
    matrix()
go_to = (anchor) ->
  $('html, body').animate
    scrollTop: $(anchor).offset().top
  , 500
prompt = (element, text) ->
  span = document.createElement('span')
  span.innerHTML = text
  element.appendChild span
type_writer = ->
  realisticTypewriter.type 'Hi !', typeWriterElement, ->
    setTimeout (->
      prompt typeWriterElement, '<br/>'
      realisticTypewriter.type "I'm Baptiste Lecocq.", typeWriterElement, ->
        setTimeout (->
          prompt typeWriterElement, '<br/>'
          realisticTypewriter.type 'A 20yo french student developer.', typeWriterElement, ->
            prompt typeWriterElement, '<br/>'
            setTimeout (->
              prompt typeWriterElement, '<br/>'
              realisticTypewriter.type 'Oh, I love web development.', typeWriterElement
            ), 1000
        ), 1000
    ), 1000
matrix = ->
  go_to '.l-home'
  $('.l-home').addClass 'matrix'
  $('#typewriter').empty()
  realisticTypewriter.type 'Follow the white rabbit.', typeWriterElement, ->
    setTimeout (->
      $('#typewriter').empty()
      realisticTypewriter.type 'Knock, knock, Neo.', typeWriterElement
    ), 1500
set_percent = (language, percent) ->
  $(value: 0).delay(700).animate
    value: percent
  ,
    duration: 1500
    easing: 'swing'
    step: ->
      $(language).val(Math.ceil(@value)).trigger 'change'

$ ->
  $('.navbar a').on 'click', ->
    anchor = $(this).attr('href')
    go_to anchor
    false

  $.parallaxify
    positionProperty: 'transform'
    responsive: true

  $('.to_top').to_top
    limit: 500

  $('.skill').knob(
    readOnly: true
    thickness: '.2'
    width: '150'
    height: '150'
  ).trigger 'configure',
    fgColor: '#FFFFFF'
    bgColor: '#78d1bb'

  flag = true
  $(window).scroll ->
    skills_top = $('#skills').position().top - 700
    if flag
      if $(window).scrollTop() > skills_top
        $('.skill').each ->
          skill = $(this)
          skill_value = $(this).data('value')
          set_percent skill, skill_value

        flag = false

  $(document).keydown konami

  window.scrollReveal = new scrollReveal()

$(window).load ->
  type_writer()
  for element in $('.m-project--content')
    $(element).hoverdir()

  $('.m-project--content').hover (->
    $(this).find('h3').removeClass 'animated fadeOutDown'
    $(this).find('h3').addClass 'animated fadeInDown'
  ), ->
    $(this).find('h3').removeClass 'animated fadeInDown'
    $(this).find('h3').addClass 'animated fadeOutDown'

