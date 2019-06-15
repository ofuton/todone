import {extractScripts} from '../utils';

test('The resources contain scripts only.', () => {
    const resources = ['script1.js', 'script2.js'];
    const expected = ['script1.js', 'script2.js'];
    expect(extractScripts(resources)).toEqual(expected);
});

test('The resources contain resource other than script.', () => {
    const resources = ['script.js', 'image.png'];
    const expected = ['script.js'];
    expect(extractScripts(resources)).toEqual(expected);
});