import {renderHook} from "@testing-library/react";
import {useDay4} from "./d4";

describe('day 4', () => {
    it('does not have any overlap', () => {
        const initialValue = `1-3,4-5`
        const {result} = renderHook(() => useDay4(initialValue));
        expect(result.current.exclusivePairs).toEqual(0);
    })

    it('does have exclusive overlap', () => {
        const initialValue = `1-3,2-2`
        const {result} = renderHook(() => useDay4(initialValue));
        expect(result.current.exclusivePairs).toEqual(1);
    })
});
