module.exports = {
    collectCoverage: true,
    moduleFileExtensions: [
        'js',
        'jsx',
    ],
    globals: {
        window: true,
    },
    collectCoverageFrom: ['**/*.jsx', '**/*.js'],
    moduleDirectories: ['node_modules', '.', 'src'],
    testMatch: [
        '**/*.(test|spec).(js)',
        '**/*.(test|spec).(jsx)',
        '**\\*.(test|spec).(js)',
        '**\\*.(test|spec).(jsx)',
    ],
    coverageReporters: [
        'json',
        'lcov',
    ],
    setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/public/',
        '/dist/',
        'jest.config.js',
        'package.json',
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom'
};
