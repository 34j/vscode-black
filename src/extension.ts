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
      [],
      [],
      [],
      ['--quiet']
    )
  );
  disp.activate();
}

// this method is called when your extension is deactivated
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate(): void {}
