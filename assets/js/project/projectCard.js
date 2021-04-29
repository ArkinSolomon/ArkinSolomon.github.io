class ProjectCard {
  constructor(index, elem){
    this._index = index;
    this.elem = elem;
    this.id = dataTagsString = $(elem).data('project-id')
    var dataTagsString = $(elem).data('tags');
    dataTagsString = dataTagsString.replace(/'/g, '"').replace(',]', ']');
    var tags = JSON.parse(dataTagsString);
    this.tags = {};
    for (let tag of tags) this.tags[tag] = getTag(tag);
  }

  canShow(){
    for (let tag of Object.values(this.tags)){
      if (tag.enabled){
        return true;
      }
    }
    return false;
  }
}
