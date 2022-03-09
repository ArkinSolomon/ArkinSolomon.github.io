//All of the project card class instances
var projectCards = [];

//Wait for document load
$(document).ready(() => {

  //Get all classes and make class instances
  $('.project-card-cell').each((i, elem) => {
    projectCards.push(new ProjectCard(i, elem));
  });

  //Add a listener to each button
  $('.toggleable').click(function () {

    //Toggle the class
    $(this).toggleClass('button-toggle');

    //Set the tag enabled state
    var active = $(this).hasClass('button-toggle');
    var tagName = $(this).data('tag')
    $(this).prop('data-toggled', active);
    getTag(tagName).enabled = active;

    //True if all tags are enabled or all are disabled
    const allSame = Object.values(window.globalTags)
      .map(t => t.enabled)
      .every((v, i, arr) => v === arr[0]);

    //Check all cards
    projectCards.forEach(card => {
      $(card.elem).css('display', card.canShow() || allSame ? 'block' : 'none')
    });
  });
});
