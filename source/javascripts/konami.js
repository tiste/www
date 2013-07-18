$(function () {
  var konami_keys = [];
  function konami(e) {
    konami_keys.push(e.keyCode);
    if (konami_keys.toString().indexOf('38,38,40,40,37,39,37,39,66,65') >= 0) {
      $(this).unbind('keydown', konami);
      matrix();
    }
  }
  $(document).keydown(konami);
});
