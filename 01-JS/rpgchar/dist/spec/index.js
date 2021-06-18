"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./loadEnv");
const find_1 = __importDefault(require("find"));
const jasmine_1 = __importDefault(require("jasmine"));
const command_line_args_1 = __importDefault(require("command-line-args"));
const Logger_1 = __importDefault(require("@shared/Logger"));
// Setup command line options
const options = command_line_args_1.default([
    {
        name: 'testFile',
        alias: 'f',
        type: String,
    },
]);
// Init Jasmine
const jasmine = new jasmine_1.default(null);
// Set location of test files
jasmine.loadConfig({
    random: true,
    spec_dir: 'spec',
    spec_files: [
        './tests/**/*.spec.ts',
    ],
    stopSpecOnExpectationFailure: false,
});
// On complete callback function
jasmine.onComplete((passed) => {
    if (passed) {
        Logger_1.default.info('All tests have passed :)');
    }
    else {
        Logger_1.default.err('At least one test has failed :(');
    }
    jasmine.exitCodeCompletion(passed);
});
// Run all or a single unit-test
if (options.testFile) {
    const testFile = options.testFile;
    find_1.default.file(testFile + '.spec.ts', './spec', (files) => {
        if (files.length === 1) {
            jasmine.specFiles = [files[0]];
            jasmine.execute();
        }
        else {
            Logger_1.default.err('Test file not found!');
        }
    });
}
else {
    jasmine.execute();
}
