# a.js
Stupid extra-tiny frontend library

```javascript
const app = () =>
  a(
    "div",
    a(
      "form",
      an("input", { placeholder: "Type something", required: true }),
      a("button", "Submit", { type: "submit" })
    ),
    list()
  );
```
