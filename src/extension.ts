// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as core from 'vscode-python-extension-core';
import { PackageInfo } from 'vscode-python-extension-core';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
  const packageInfo: PackageInfo = {
    packageName: 'black',
    packageDisplayName: 'black',
    extensionName: 'black-py',
    runCommandName: 'black-py.run',
    runForWorkspaceCommandName: 'black-py.runForWorkspace',
    packageConfigurationSection: 'black-py.settings',
    useIntegratedTerminalConfigurationSectionFullName:
      'black-py.useIntegratedTerminal',
  };
  const disp = new core.commandDispatcher.EasyCommandDispatcher(
    context,
    packageInfo,
    new core.packageRunner.EasyOptionsBuilder(
      packageInfo,
      [
        {
          name: 'line-length',
          type: 'number',
          description: 'How many characters per line to allow.',
        },
        {
          name: 'target-version',
          type: 'string',
          description: 'Python versions that should be supported by Black\'s output.',
        },
        {
          name: 'skip-string-normalization',
          type: 'boolean',
          description: 'Don\'t normalize string quotes or prefixes.',
        },
        {
          name: 'skip-magic-trailing-comma',
          type: 'boolean',
          description: 'Don\'t use trailing commas as a reason to split lines.',
        },
        {
          name: 'preview',
          type: 'boolean',
          description: 'Enable potentially disruptive style changes that may be added to Black\'s main functionality in the next major release.',
        },
      ],
      ['--line-length', '--target-version'],
      ['--skip-string-normalization', '--skip-magic-trailing-comma', '--preview'],
      ['--quiet']
    )
  );
  disp.activate();
}

// this method is called when your extension is deactivated
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate(): void {}
