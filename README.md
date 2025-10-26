# VSCode Extension for black

[![GitHub](https://img.shields.io/github/license/34j/vscode-black?logo=github&logoColor=%23181717)](https://github.com/34j/vscode-black)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/mikoz.black-py?logo=visual-studio-code&logoColor=%23007ACC)](https://marketplace.visualstudio.com/items?itemName=mikoz.black-py)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/mikoz.black-py)](https://marketplace.visualstudio.com/items?itemName=mikoz.black-py)

VSCode extension for formatting Python code with black. Maybe better, maybe not...

[![Install Now](https://img.shields.io/badge/-Install%20Now-107C10?style=for-the-badge&logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=mikoz.black-py)

If you like this extension, consider staring!

[![GitHub Repo stars](https://img.shields.io/github/stars/34j/vscode-black?style=social)](https://github.com/34j/vscode-black)

Consider using [Composite Formatter](https://marketplace.visualstudio.com/items?itemName=mikoz.composite-formatter) to run multiple formatters at once as a single formatter.

## Extension Settings

| Name | Description | Type | Default |
|----|-----------|------|---------|
| `black-py.useIntegratedTerminal` | Whether to use integrated terminal instead of hidden terminal. (Not recommended) | boolean | `false` |
| `black-py.settings.line-length` | How many characters per line to allow. | number | 88 |
| `black-py.settings.target-version` | Python versions that should be supported by Black's output. | string | - |
| `black-py.settings.skip-string-normalization` | Don't normalize string quotes or prefixes. | boolean | `false` |
| `black-py.settings.skip-magic-trailing-comma` | Don't use trailing commas as a reason to split lines. | boolean | `false` |
| `black-py.settings.preview` | Enable potentially disruptive style changes that may be added to Black's main functionality in the next major release. | boolean | `false` |

<!--## Known Issues-->