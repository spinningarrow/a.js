const button = (text, handler) =>
  a(
    "button",
    {
      onclick: handler
    },
    text
  );

const list = () =>
  a(
    "ul",
    a("li", "First"),
    a(
      "li",
      button('Click me', () => alert("Drink water"))
    ),
    a("li", button('No, click me')),
    a("li", "Last")
  );

const app = () =>
  a(
    "div",
    a(
      "form",
      a("input", { placeholder: "Type something", required: true }),
      a("button", "Submit", { type: "submit" })
    ),
    list()
  );

const render = (what, where) => document.querySelector(where).appendChild(what);

render(app(), "#app");
