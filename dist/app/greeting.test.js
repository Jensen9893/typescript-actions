"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeting_1 = require("./greeting");
describe('greet function', () => {
    test('greets with name', () => {
        expect((0, greeting_1.greet)('Alice')).toBe('Hello, Alice! Welcome to our app!');
    });
    test('greets with empty name', () => {
        expect((0, greeting_1.greet)('')).toBe('Hello, ! Welcome to our app!');
    });
});
