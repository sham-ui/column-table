module.exports = {
    'projects': [
        {
            'displayName': 'test',
            'testEnvironment': 'jsdom',
            'moduleFileExtensions': [
                'js',
                'json',
                'sfc'
            ],
            'transform': {
                '^.+\\.sht$': 'sham-ui-templates-jest-preprocessor',
                '^.+\\.sfc$': 'sham-ui-templates-jest-preprocessor',
                '^.+\\.js$': 'sham-ui-macro-jest-preprocessor'
            },
            'transformIgnorePatterns': [],
            'collectCoverageFrom': [
                'src/**/*.js'
            ],
            'coveragePathIgnorePatterns': [
                '^.+\\.sht$',
                '<rootDir>/.babel-plugin-macrosrc.js'
            ],
            'testPathIgnorePatterns': [
                '<rootDir>/node_modules/',
                '<rootDir>/__tests__/setup-jest.js'
            ],
            'setupFilesAfterEnv': [ '<rootDir>/__tests__/setup-jest.js' ],
            'testURL': 'http://column-table.example.com'
        },
        {
            'runner': 'jest-runner-eslint',
            'displayName': 'eslint',
            'moduleFileExtensions': [
                'js',
                'json',
                'sfc'
            ],
            'testMatch': [
                '<rootDir>/src/**/*.*',
                '<rootDir>/__tests__/**/*.js',
                '<rootDir>/__mocks__/**/*.js',
                '<rootDir>/demo-app/**/*.js'
            ],
            'testPathIgnorePatterns': [
                '<rootDir>/demo-app/dist'
            ]
        },
        {
            'runner': 'jest-runner-stylelint',
            'displayName': 'stylelint',
            'moduleFileExtensions': [
                'scss'
            ],
            'testMatch': [
                '**/*.scss'
            ]
        }
    ]
};
