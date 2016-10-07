/**
 * Webpack declarations for TypeScript
 * Created by petr on 07.10.16.
 * TODO: you don't need to declare "require" anymore, you could use:
 *       import myLib = require('path/to/myLib');
 *       and typescript will translate previous line to:
 *       var myLib = require('path/to/myLib');
 */

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
