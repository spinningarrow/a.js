const _ = (elementName, attributesMap, text, children) => {
  const element = document.createElement(elementName);
  Object.entries(attributesMap).forEach(([attr, value]) => {
    console.log(attr, value);
    element[attr] = value;
  });
  if (text) element.innerText = text;
  children.forEach((child) => element.appendChild(child));
  return element;
};

const a = (elementName, ...rest) => {
  const { attributesMap, text, children } = rest.reduce(
    (memo, next) => {
      if (typeof next === "string") memo.text = next;
      if (next instanceof HTMLElement) memo.children = [...memo.children, next];
      if (typeof next === "object") memo.attributesMap = next;

      return memo;
    },
    { attributesMap: {}, text: null, children: [] }
  );
  return _(elementName, attributesMap, text, children);
};