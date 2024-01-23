const tree = {
  value: "TREE",
  a: {
    value: "a",
    a1: {
      value: "aa1",
      c1: {
        value: "aa1c1",
      },
    },
    b1: {
      value: "ab1",
      c2: {
        value: "ab1c2",
      },
    },
  },
  b: {
    value: "b",
    a2: {
      value: "ba2",
      c1: {
        value: "ba2c1",
      },
    },
    b2: {
      value: "bb2",
      c2: {
        value: "bb2c2",
      },
    },
  },
};

const search = (tree, target) => {
  let result = { tree: null };

  if (tree.value === target) {
    return { tree };
  }

  for (const key in tree) {
    if (key === "value") {
      continue;
    }

    result = search(tree[key], target);

    if (result.tree) {
      return result;
    }
  }

  return result;
};

console.log(search(tree, "ba2c1"));
