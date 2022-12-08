import {useEffect, useState} from "react";

const parseElves = (input: string) => {
    const elves = input.split(/\n\s*\n/)
    return elves
        .map((load) =>
            load.split('\n')
                .reduce((a, b) => b ? a + parseInt(b) : a, 0))
}

const d1part1 = (elvesCount: number[]): { position: number, calories: number } => {
    const maxCalories = Math.max(...elvesCount, 0)
    const indexCalories = elvesCount.indexOf(maxCalories);

    return {
        position: indexCalories + 1,
        calories: maxCalories
    }
}

const d1part2 = (elvesCount: number[], topX: number): { calories: number } => {
    const copy = [...elvesCount];
    const sorted = copy.sort((a, b) => b - a).slice(0, topX);
    const indexCalories = sorted.reduce((a, b) => b ? a + b : a, 0)
    return {
        calories: indexCalories
    }
}

const useDay1 = (initialValue: string) => {
    const [caloriesList, setCaloriesList] = useState<string>(initialValue);
    const [mostCalories, setMostCalories] = useState<{ position: number, calories: number }>();
    const [topX, setTopX] = useState<{ calories: number }>();

    useEffect(() => {
        const parsedElves = parseElves(caloriesList);
        setMostCalories(d1part1(parsedElves))
        setTopX(d1part2(parsedElves, 3))
    }, [caloriesList])

    return {setCaloriesList, mostCalories, top3: topX}
}

export {useDay1}