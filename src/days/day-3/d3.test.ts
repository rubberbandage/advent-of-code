import {useDay3} from "./d3";
import {renderHook} from "@testing-library/react";

test.each([
    ['vJrwpWtwJgWrhcsFMMfFFhFp', 'p'],
    ['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 'L'],
    ['PmmdzqPrVvPwwTWBwg', 'P'],
    ['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 'v'],
    ['ttgJtRGJQctTZtZT', 't'],
    ['CrZsJsPPZsGzwwsLwLmpwMDw', 's']
])('should get the common type', (query, item) => {
    const rucksack = query;

    const {result} = renderHook(() => useDay3(rucksack));

    expect(result.current.types).toEqual([item])
})

test('should take in a list of rucksacks', () => {
    const initialValue = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

    const {result} = renderHook(() => useDay3(initialValue));

    expect(result.current.types).toEqual(['p', 'L', 'P', 'v', 't', 's']);
})

test.each([
    ['vJrwpWtwJgWrhcsFMMfFFhFp', 16],
    ['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 38],
    ['PmmdzqPrVvPwwTWBwg', 42],
    ['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', 22],
    ['ttgJtRGJQctTZtZT', 20],
    ['CrZsJsPPZsGzwwsLwLmpwMDw', 19]
])('should get the common type in priority value', (query, item) => {
    const rucksack = query;

    const {result} = renderHook(() => useDay3(rucksack));

    expect(result.current.priorities).toEqual([item])
})

test('should take in a list of rucksacks and return priorities', () => {
    const initialValue = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

    const {result} = renderHook(() => useDay3(initialValue));

    expect(result.current.priorities).toEqual([16, 38, 42, 22, 20, 19]);
})

test('total priority', () => {
    const initialValue = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

    const {result} = renderHook(() => useDay3(initialValue));

    expect(result.current.sumOfPriorities).toEqual(157);
})

test('item types for three elf group', () => {
    const initialValue = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

    const {result} = renderHook(() => useDay3(initialValue));

    expect(result.current.threeElfGroup).toEqual(70);
})