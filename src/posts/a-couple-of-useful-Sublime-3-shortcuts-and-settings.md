---
path: "/my-sublime-shortcuts-settings-and-packages/"
date: "2018-06-17"
title: "My Sublime shortcuts, settings and packages"
tags: ["Sublime"]
---

# Shortcuts

- Reveal in sidebar: **CTRL** + **SHIFT** + **R**
- Select one similar: **CMD** + **D** 
- Select all similar: **CMD** + **CTRL** + **G**
- Select line: **CMD** + **L**
- Select all child elements: **CMD** + **SHIFT** + **J**
- Copy line: **CMD** + **SHIFT** + **D**
- Switch line: **CMD** + **CTRL** + **↑** or **↓**
- Toggle sidebar: **CMD** + **K** + **B** 
- Close HTML tag *(useful for JSX when normal HTML autocomplete doesn't work)*: **alt** + **CMD** + **.**

# Configuration

```javascript
{
  // Hidden from search, but not sidebar
  "binary_file_patterns": [],
  // Hidden from search and sidebar
  "file_exclude_patterns": [ ".DS_store", "*.map", "*.min.js", "*.min.css" ],
  // Hidden from search and sidebar
  "folder_exclude_patterns":
  [
    ".svn",
    ".git",
    ".hg",
    "CVS",
    ".sass-cache",
    "__pycache__",
    ".tmp",
    "venv",
    "node_modules"
  ]
}
```

# Packages
I often work with ES6/React, Node and Python. I use these packages:

- [All Autocomplete](https://github.com/alienhard/SublimeAllAutocomplete)
- [BracketHighlighter](https://github.com/facelessuser/BracketHighlighter)
- [Color Highlighter](https://github.com/Monnoroch/ColorHighlighter)
- [DocBlockr](https://github.com/spadgos/sublime-jsdocs)
- [EditorConfig](https://github.com/sindresorhus/editorconfig-sublime)
- [SideBarEnhancements](https://github.com/SideBarEnhancements-org/SideBarEnhancements)
- [Babel & Babel snippets](https://github.com/babel/babel-sublime)
- [PrettierJS](https://github.com/jonlabelle/SublimeJsPrettier)
- [Dictionaries](https://github.com/titoBouzout/Dictionaries) *Many languages supported.*
- [Markdown preview](https://github.com/facelessuser/MarkdownPreview)

