module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module",
    },
    "rules": {
    },
    "env": {
        "es6": true,
        "browser": true,
        "webextensions": true
    }
};
