module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry"
            }
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",{
                "corejs": 2
            }
           
        ],
        "@babel/plugin-transform-modules-systemjs"
    ]
}