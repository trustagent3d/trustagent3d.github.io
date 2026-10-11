"""Synchronize shared fragments into both static pages. Run after editing a fragment."""
from pathlib import Path
import re
root = Path(__file__).resolve().parent
for name in ('index.html', 'cfp.html'):
    path = root / name
    content = path.read_text()
    for fragment in ('header', 'navbar', 'footer'):
        replacement = (root / f'{fragment}.html').read_text().strip()
        pattern = rf'(?s)(<!-- shared:{fragment} -->).*?(<!-- /shared:{fragment} -->)'
        content, count = re.subn(pattern, lambda m: m[1] + replacement + m[2], content)
        if count != 1:
            raise ValueError(f'{name}: expected one {fragment} slot, got {count}')
    path.write_text(content)
print('Shared fragments synchronized into index.html and cfp.html.')
