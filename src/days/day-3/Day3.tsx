import {Layout} from "../../components/Layout";
import {useDay3} from "./d3";
import {TextArea} from "../../components";
import {ChangeEvent} from "react";

const initialValue = `A Y
B X
C Z`;

const Day3 = () => {
    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    }

    return <Layout title={"Rucksack Reorganization"}>
        <TextArea name="paragraph_text" onChange={onChangeTextArea} initialValue={initialValue}/>
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'start'
        }}>
        </div>
    </Layout>
}

export default Day3;