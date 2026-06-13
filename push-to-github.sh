#!/bin/bash

cd "$(dirname "$0")"

echo "=== Git Status ==="
git status

echo ""
echo "=== Adding all changes ==="
git add .

echo ""
echo "=== Creating commit ==="
git commit -m "feat: Remove portfolio descriptions and enhance aesthetic colors

- Remove descriptions from all 21 portfolio items
- Increase opacity of section background colors for better visibility
- Add z-index to all pseudo-elements for proper layering
- Enhance visual hierarchy across all sections
- Improve overall premium agency aesthetic

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo ""
echo "=== Pushing to GitHub ==="
git push origin main

echo ""
echo "✅ All changes pushed to GitHub successfully!"
