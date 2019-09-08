module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': ['react'],
  "rules":
  {
    "prefer-promise-reject-errors": 0,
    "no-await-in-loop": 0,
    "no-script-url": 0,
    "react/react-in-jsx-scope": 0,
    "react/destructuring-assignment": 0,
    "no-trailing-spaces": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "semi": 0,
    "no-bitwise": ["error", { "allow": ["^","&",">>","<<","|"] }],
    "linebreak-style": 0,
    "func-names": 0,
    "arrow-body-style": 0,
    "prefer-destructuring": 0,
    "max-len": 0,
    "consistent-return": 0,
    "comma-dangle": [
      0,
      "always-multiline"
    ],
    "no-new-func": 0,
    "function-paren-newline": 0,
    "class-methods-use-this": 0,
    "no-case-declarations" : 0,
    "react/sort-comp": 0,
    "react/prop-types": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/require-extension": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".md"
        ]
      }
    ],
    "arrow-parens": 0,
    "eol-last": 0,
    "import/extensions": 0,
    "no-unused-vars": 0,
    "import/no-unresolved": 0,
    "no-console": 0,
    "no-debugger": 0,
    "no-confusing-arrow": 0,
    "no-mixed-operators": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "no-prototype-builtins": 0,
    "no-lonely-if": 0,
    "import/no-dynamic-require": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "react/no-danger": 0,
    "react/jsx-no-bind": 0,
    "react/no-string-refs": 0,
    "react/forbid-prop-types": 0,
    "react/self-closing-comp": 0,
    "react/no-typos": 0,
    "react/require-default-props": 0,
    "react/no-did-mount-set-state": 0,
    "react/no-array-index-key": 0,
    "react/no-find-dom-node": 0,
    "react/no-unused-state": 0,
    "react/no-unused-prop-types": 0,
    "react/default-props-match-prop-types": 0,
    "react/jsx-curly-spacing": 0,
    "react/no-render-return-value": 0,
    "react/prefer-stateless-function": 0,
    "object-curly-newline": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    "no-redeclare": 0,
    "no-restricted-globals": 0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0
  }
}