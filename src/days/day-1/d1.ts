import {useEffect, useState} from "react";

const placeholder = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

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

const d1part2 = (elvesCount: number[]): { calories: number } => {
    const top3 = elvesCount.sort().reverse().slice(0, 3);
    const indexCalories = top3
        .reduce((a, b) => b ? a + b : a, 0)

    return {
        calories: indexCalories
    }
}

const useDay1 = () => {
    const [caloriesList, setCaloriesList] = useState<string>(placeholder);
    const [mostCalories, setMostCalories] = useState<{ position: number, calories: number }>();
    const [top3, setTop3] = useState<{ calories: number }>();

    useEffect(() => {
        const parsedElves = parseElves(caloriesList);
        setMostCalories(d1part1(parsedElves))
        setTop3(d1part2(parsedElves))
    }, [caloriesList])

    return {setCaloriesList, mostCalories, top3}
}

export {useDay1}