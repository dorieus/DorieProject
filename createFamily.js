/*Создаем функцию createFamily которая принимает 2 аргумента (отец и мать) и возвращает семью без детей.
Но если нужно, в уже созданную семью можно добавлять детей по имени.
Обратите внимание на количество полей у детей.*/

function createFamily(mother, father) {
  if (typeof mother !== "string" || typeof father !== "string") {
    alert("Incorrect message");
    return;
  }
  let family = {
    wife: `${mother}`,
    husband: `${father}`,
    children: [],
    makeChild: (name),
    parents: `${mother}` + " and " + `${father}`
  };
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
  };
}
