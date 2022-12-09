import {Layout} from "../../components/Layout";
import {useDay2} from "./d2";
import {TextArea} from "../../components";
import {ChangeEvent} from "react";

const initialValue = `A Y
B X
C Z`;

const Day2 = () => {
    const { setStrategyGuide, totalScore, predictionScore } = useDay2(initialValue);

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setStrategyGuide(event.target.value)
    }

    return <Layout title={"Rock Paper Scissors"}>
        <TextArea name="paragraph_text" onChange={onChangeTextArea} initialValue={initialValue}/>
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'start'
        }}>
            <p>Total score: <span>{totalScore ?? 0}</span></p>
            <p>Prediction score: <span>{predictionScore ?? 0}</span></p>
        </div>
    </Layout>
}

export default Day2;