import {useDay1} from "./d1";
import {ChangeEvent} from "react";

const Day1 = () => {
    const {setCaloriesList, mostCalories, top3} = useDay1();

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCaloriesList(event.target.value)
    }

    return <>
        <h1>Most Calories</h1>
        <textarea name="paragraph_text"
                  cols={50}
                  rows={20}
                  onChange={onChangeTextArea}/>
        <p>Elf <span>{mostCalories?.position}</span> carries <span>{mostCalories?.calories}</span> calories</p>
        <p>Top 3 Elves have <span>{top3?.calories}</span> calories</p>
    </>
}

export default Day1;