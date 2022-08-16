(function () {
  var memberContainer = $('#member > img');
  var memberName = $('#member-name');
  var major = $('#major');
  $('.team-member').on('click', function () {
    var $this = $(this),
      person = $this.data('person'),
      majorText = $this.data('major'),
      memberNumber = $this.data('member'),
      personImg = person.toLowerCase().replace(' ', '_'),
      knack = 'member' + memberNumber;
    memberContainer.attr(
      'src',
      '../img/photos/indiv_pics/' + personImg + '.jpg'
    );
    memberName.text(person);
    major.text(majorText);
    $('#' + knack)
      .show()
      .siblings('span')
      .hide();
  });

  $('#slider').nivoSlider({
    effect: 'fade',
    slices: 1,
    pauseTime: 4000,
    directionNav: false, // Next & Prev navigation
    controlNav: false, // 1,2,3... navigation
    controlNavThumbs: false, // Use thumbnails for Control Nav
    pauseOnHover: true, // Stop animation while hovering
    manualAdvance: false,
  });
})();
