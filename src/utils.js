export const Utils = {

  isDescendant: function(parent, child) {

    let node = child.parentNode;
  
    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }
  
    return false;
  },

  isSameOrDescendant: function(parent, child) {
    return (child === parent) || this.isDescendant(parent, child);
  },

  scrollToTargetAdjusted: function(element, offset) {
    window.scrollTo({
      top: element.getBoundingClientRect().top - offset,
      behavior: "smooth"
    });
  }
};