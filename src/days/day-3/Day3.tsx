import {Layout} from "../../components/Layout";
import {useDay3} from "./d3";
import {TextArea} from "../../components";
import {ChangeEvent} from "react";
import {useDay2} from "../day-2/d2";


const Day3 = () => {
    const { setRucksacks, types, sumOfPriorities } = useDay3('');

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setRucksacks(event.target.value)
    }

    return <Layout title={"Rucksack Reorganization"}>
        <TextArea name="paragraph_text" onChange={onChangeTextArea} initialValue={''}/>
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'start'
        }}>
        </div>
        <p>{sumOfPriorities}</p>
    </Layout>
}

export default Day3;