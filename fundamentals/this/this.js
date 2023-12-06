/* GLOBAL */
function printThisGlobal() {
  console.log("printThisGlobal", this);
}

function printThisGlobalStrict() {
  "use strict";
  console.log("printThisGlobalStrict", this);
}

const printThisArrowGlobal = () => {
  console.log("printThisArrowGlobal", this);
};

const printThisArrowGlobalStrict = () => {
  "use strict";
  console.log("printThisArrowGlobalStrict", this);
};

/* CONSTRUCTOR FN  */
function ConstructorFnThis() {
  this.printThisConstructorFn = function () {
    console.log("printThisConstructorFn", this);
  };

  this.printThisArrowConstructorFn = () => {
    console.log("printThisArrowConstructorFn", this);
  };
}

/* CLASS  */
class ClassThis {
  constructor() {
    this.name = "ClassThis";
  }

  printThisClass() {
    console.log("printThisClass", this);
  }

  printThisClassArrow() {
    console.log("printThisClassArrow", this);
  }
}

/* LITERAL OBJECT */
const literalObject = {
  printThisLiteralObject() {
    console.log("printThisLiteralObject", this);
  },

  printThisArrowLiteralObject: () => {
    console.log("printThisArrowLiteralObject", this);
  },

  printThisLiteralObjectNested() {
    const print = () => console.log("printThisLiteralObjectNested", this);
    print();
  },
};

/* INITIALIZE AND EXECUTE  */
const constructorFnInstance = new ConstructorFnThis();
const classThisInstance = new ClassThis();

console.group("GLOBAL");
printThisGlobal(); // window
printThisGlobalStrict(); // undefined
printThisArrowGlobal(); // window
printThisArrowGlobalStrict(); // window
console.groupEnd();

console.group("CONSTRUCTOR FN");
constructorFnInstance.printThisConstructorFn(); // constructorFnInstance
constructorFnInstance.printThisArrowConstructorFn(); // constructorFnInstance
console.groupEnd();

console.group("CLASS");
classThisInstance.printThisClass(); // classThisInstance
classThisInstance.printThisClassArrow(); // classThisInstance
console.groupEnd();

console.group("LITERAL OBJECT");
literalObject.printThisLiteralObject(); // literalObject
literalObject.printThisArrowLiteralObject(); // window
literalObject.printThisLiteralObjectNested(); // literalObject
console.groupEnd();

console.group("BIND");
literalObject.printThisLiteralObject.call(literalObject); // literalObject instead window
constructorFnInstance.printThisConstructorFn.call(this); // window instead constructorFnInstance
literalObject.printThisLiteralObject.apply(classThisInstance); // classThisInstance instead literalObject
console.groupEnd();
