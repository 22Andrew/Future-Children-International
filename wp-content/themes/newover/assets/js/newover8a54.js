;(function () {
  var $ = window.$ || window.jQuery

  if (typeof $ !== 'function') {
    return
  }

  $(function () {
    $('.js-matchheight').matchHeight()
  })
})()
