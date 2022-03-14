//An instance of this class represents a single tag, which can be enabled or disabled
class Tag {
  constructor(tag) {
    this.tag = tag;
    this.enabled = false;
  }
}

const globalTags = {};
window.globalTags = globalTags;

//Get a tag object that has the given tag, if it doesn't exist, make a new one
function getTag(tag) {
  if (!globalTags[tag])
    globalTags[tag] = new Tag(tag);
  return globalTags[tag];
}
