//An instance of this class represents a singular project card.
class ProjectCard {

  //Class constructor
  constructor(index, elem){

    //Set object properties
    this._index = index;
    this.elem = elem;
    this.id = dataTagsString = $(elem).data('project-id');

    //Get array of tag names
    var dataTagsString = $(elem).data('tags');
    dataTagsString = dataTagsString.replace(/'/g, '"').replace(',]', ']');
    var tags = JSON.parse(dataTagsString);

    //Get references to tag objects
    this.tags = {};
    for (let tag of tags) this.tags[tag] = getTag(tag);
  }

  //Returns true if one or more tags that this card has are displayed
  canShow(){
    for (let tag of Object.values(this.tags)){
      if (tag.enabled) return true;
    }
    return false;
  }
}
