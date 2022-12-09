import {useDay1} from './d1';
import {renderHook} from "@testing-library/react";

describe('A', () => {
    it('calculates a grouping of numbers', () => {
        const initialValue = `
12
16
30
14`
        const {result} = renderHook(() => useDay1(initialValue));
        expect(result.current.mostCalories).toEqual({
            calories: 72,
            position: 1
        });

    })

    it('calculates the elf with the most calories', () => {
        const initialValue = `
12
16

30
14`
        const {result} = renderHook(() => useDay1(initialValue));
        expect(result.current.mostCalories).toEqual({
            calories: 44,
            position: 2
        });

    })
})