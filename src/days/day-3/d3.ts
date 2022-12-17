import {useEffect, useState} from "react";
import {sum} from "../../utils/math";

const priority = (letter: string | undefined) => letter ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter) + 1 : 0;

const useDay3 = (initialValue: string) => {
    const [unparsedRucksacks, setRucksacks] = useState<string>(initialValue)
    const [types, setTypes] = useState<(string | undefined)[]>()
    const [priorities, setPriorities] = useState<number[]>()
    const [threeElfGroupPriorities, setThreeElfGroup] = useState<number[]>()

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

    useEffect(() => {
        const group: string[][] = [];

        const lines = unparsedRucksacks.split(/\n/);

        for (let i = 0; i < lines.length; i += 3) {
            group.push(lines.slice(i, i + 3))
        }

        const commonLetter = group
            .map(([line1, line2, line3]) => {
                if (!line1 || !line2 || !line3) return ''
                return line1.split('')
                    .find((letter) => line2.includes(letter) && line3.includes(letter));
            });

        const p = commonLetter.map((letter) => priority(letter));
        setThreeElfGroup(p);
    }, [unparsedRucksacks])
    return {
        types,
        priorities,
        setRucksacks,
        threeElfGroup: (threeElfGroupPriorities || []).reduce(sum, 0),
        sumOfPriorities: (priorities || []).reduce(sum, 0)
    }
}

export {useDay3}