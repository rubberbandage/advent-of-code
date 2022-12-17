import {useEffect, useState} from "react";

const priority = (letter: string | undefined) => letter ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter) + 1 : 0;

const useDay3 = (initialValue: string) => {
    const [unparsedRucksacks, setRucksacks] = useState<string>(initialValue)
    const [types, setTypes] = useState<(string | undefined)[]>()
    const [priorities, setPriorities] = useState<number[]>()

    useEffect(() => {
        const commonLetter = unparsedRucksacks.split(/\n/)
            .map((s) => {
                const compartmentA = s.substring(0, s.length / 2).split('')
                const compartmentB = s.substring(s.length / 2).split('')
                return compartmentA.find((letter) => compartmentB.includes(letter));
            });

        setTypes(commonLetter);
        const p = commonLetter.map((letter) => priority(letter));
        setPriorities(p);
    }, [unparsedRucksacks]);

    return {
        types,
        priorities,
        setRucksacks,
        sumOfPriorities: (priorities || [])
            .reduce((a, b) => b ? a + b : a, 0),
    }
}

export {useDay3}