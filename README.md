# TrustAgent3D website

Static workshop homepage and call for papers, aligned with `../proposal/main.tex`.

## Preview

Run from this directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. Both pages also work directly from disk; navigation and essential content do not require JavaScript or a CDN.

## Edit

- `index.html`: workshop scope, research context, topics, program, organizers, and participation.
- `cfp.html`: submission policy, dates, review criteria, ethics, and contacts.
- `header.html`, `navbar.html`, `footer.html`: shared fragments. After editing, run `python3 sync_templates.py` to embed them in both pages.
- `style.css`, `custom.js`: responsive styles, mobile navigation, and back-to-top behavior.
- `images/`: organizer portraits.

Keep content and dates consistent with the proposal. Speakers remain empty. The workshop is proposed, dates are tentative, and the submission portal has not been announced. Keep this status accurate and retain `noindex, nofollow` until the workshop is ready for public launch. No hosting registration or deployment is configured here.
