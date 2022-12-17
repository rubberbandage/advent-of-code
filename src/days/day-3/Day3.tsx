import {Layout} from "../../components/Layout";
import {useDay3} from "./d3";
import {ChangeEvent} from "react";


const Day3 = () => {
    const { setRucksacks, types, sumOfPriorities } = useDay3('');

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setRucksacks(event.target.value)
    }

    return <Layout title={"Rucksack Reorganization"} onChange={onChangeTextArea} initialValue={''}>
        <p>{sumOfPriorities}</p>
    </Layout>
}

export default Day3;