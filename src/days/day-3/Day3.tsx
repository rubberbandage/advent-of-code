import {Layout} from "../../components/Layout";
import {useDay3} from "./d3";
import {ChangeEvent} from "react";

const initialValue = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const Day3 = () => {
    const { setRucksacks, sumOfPriorities, threeElfGroup } = useDay3(initialValue);

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setRucksacks(event.target.value)
    }

    return <Layout title={"Rucksack Reorganization"} onChange={onChangeTextArea} initialValue={initialValue}>
        <p>{sumOfPriorities}</p>
        <p>{threeElfGroup}</p>
    </Layout>
}

export default Day3;