import { DurationPipe } from './duration.pipe';

describe('Duration Pipe', () => {
    let pipe: DurationPipe;

    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it('should format input minutes correctly', () => {
        expect(pipe.transform(12)).toBe('12min');
        expect(pipe.transform(122)).toBe('2h 2min');
        expect(pipe.transform(63)).toBe('1h 3min');
        expect(pipe.transform(180)).toBe('3h 0min');
    });
});
