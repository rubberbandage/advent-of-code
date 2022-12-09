module.exports = {
    testEnvironment: 'jsdom',
    roots: [
        '<rootDir>/src',
    ],
    transform: {
        '^.+\\.ts?$': [
            'ts-jest',
            {
                isolatedModules: false, include: ['src/']
            },
        ],
    },
    transformIgnorePatterns: ["/node_modules"],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: [
        'js',
        'json',
        'jsx',
        'node',
        'ts',
        'tsx',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ]
}
