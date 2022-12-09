import {useDay1} from "./d1";
import {ChangeEvent} from "react";
import {TextArea} from "../../components";
import {Layout} from "../../components/Layout";

const initialValue = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const Day1 = () => {
    const {setCaloriesList, mostCalories, top3} = useDay1(initialValue);

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCaloriesList(event.target.value)
    }

    return <Layout title='Most Calories'>
        <TextArea name="paragraph_text" onChange={onChangeTextArea} initialValue={initialValue}/>
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'start'
        }}>
            <p>Part 1: Elf <span>{mostCalories?.position}</span> carries <span>{mostCalories?.calories}</span> calories
            </p>
            <p>Part 2: Top 3 Elves have <span>{top3?.calories}</span> calories</p>
        </div>
    </Layout>
}

export default Day1;