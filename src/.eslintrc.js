module.exports = {
    "parser":"babel-eslint",
    "parserOptions": {
        "sourceType": "module"
      },
    "rules": {
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-undef": 2,
        "react/no-multi-comp": 2,
        "react/jsx-indent-props": [
            "error",
            2
          ],
        "react/jsx-pascal-case": 2,
        "react/prop-types": 2,
        "react/jsx-indent": [
            "error",
            2
        ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};