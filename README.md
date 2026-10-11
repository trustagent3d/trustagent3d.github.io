# TrustAgent3D website

Uses the HTML layout, Bootstrap dependencies, stylesheet, and scripts from the
3D Geometry Generation for Scientific Computing `website_cvpr` template.
Workshop content is adapted from `../proposal/main.tex`.

## Local preview

Run from this directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. Use HTTP because `load-templates.js` fetches the shared
header, navigation, and footer. Bootstrap and jQuery load from the template's CDNs.

## Editing

- `index.html`: description, topics, speakers, call for papers, schedule, organizers.
- `cfp.html`: submission information and contacts.
- `header.html`, `navbar.html`, `footer.html`: shared fragments loaded at runtime.
- `style.css`, `custom.js`, `load-templates.js`: unchanged from the reference template.

Keep HTML indented and readable. Speakers remain empty. The workshop is proposed;
dates are tentative and no submission portal has been announced. The reference
workshop's analytics property and past-edition links are not reused.
