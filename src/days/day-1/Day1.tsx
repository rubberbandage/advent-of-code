import {useDay1} from "./d1";
import d1Markdown from "./d1.md";
import React, {ChangeEvent} from "react";
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

    return <Layout
        title='Most Calories'
        onChange={onChangeTextArea}
        initialValue={initialValue}
        markdown={d1Markdown}
    >
        <p>Part 1: Elf <span>{mostCalories?.position}</span> carries <span>{mostCalories?.calories}</span> calories
        </p>
        <p>Part 2: Top 3 Elves have <span>{top3?.calories}</span> calories</p>
    </Layout>
}

export default Day1;