#!/bin/bash

# Script to replace all non-white backgrounds with #FFFFFF across all CSS files

echo "Replacing all gradient and colored backgrounds with pure white..."

# Find all .module.css files and replace gradients/colors with white
find src/app -name "*.module.css" -type f -exec sed -i '' \
  -e 's/background: linear-gradient([^;]*);/background: #FFFFFF;/g' \
  -e 's/background: var(--mca-gradient-[^)]*);/background: #FFFFFF;/g' \
  -e 's/background: var(--mca-cream);/background: #FFFFFF;/g' \
  -e 's/background: var(--mca-sage);/background: #FFFFFF;/g' \
  -e 's/background: var(--mca-mauve);/background: var(--mca-mauve);/g' \
  -e 's/background: rgba(var(--mca-cream-rgb)[^)]*);/background: #FFFFFF;/g' \
  -e 's/background: rgba(var(--mca-sage-rgb)[^)]*);/background: #FFFFFF;/g' \
  -e 's/background-color: var(--mca-cream);/background-color: #FFFFFF;/g' \
  -e 's/background-color: var(--mca-sage);/background-color: #FFFFFF;/g' \
  {} \;

echo "Done! All backgrounds should now be white."
