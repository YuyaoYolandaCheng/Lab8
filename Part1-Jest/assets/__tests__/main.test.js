const formatVolumeIconPath = require('../assets/scripts/main');

describe("test formatVolumeIconPath", () => {
    test('level 3 test', () => {
        expect(formatVolumeIconPath(67)).toContain('3');
    });

    test('level 2 test', () => {
        expect(formatVolumeIconPath(34)).toContain('2');
    });

    test('level 1 test', () => {
        expect(formatVolumeIconPath(1)).toContain('1');
    });

    test('level 0 test', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});
