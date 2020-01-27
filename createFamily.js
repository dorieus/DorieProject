function createFamily(mother, father) {
  if (typeof mother !== "string" || typeof father !== "string") {
    alert("Incorrect message");
    return;
  }
  let family = {
    wife: `${mother}`,
    husband: `${father}`,
    children: [],
    makeChild: name,
    parents: `${mother}` + " and " + `${father}`
  }
  return family;
}

function createFamily(mother, father) {
  if (typeof mother !== "string" || typeof father !== "string") {
    alert("Incorrect message");
    return;
  }
  let family = {
    wife: `${mother}`,
    husband: `${father}`,
    children: [],
    makeChild(name) {
      let child = {
        name: `${name}`,
        parents: this.wife + " and " + this.husband
      };
      this.children.push(child);
      return family;
    }
  }
}
