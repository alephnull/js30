```css
    input:checked + label {
      background:#F9F9F9;
      text-decoration: line-through;
    }
```
does not make the label text strikethrough when clicked. Wrapping the label in a span and then changing the above label to span does.
