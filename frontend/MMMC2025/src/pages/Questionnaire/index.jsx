import { Input } from '../../components/Input/index.jsx';
import { Button } from '../../components/Button/index.jsx';

export function Questionnaire(){
    return (
        <div className="questionnaire-container">
            <h1>Questionnaire</h1>
            <p>To better get a grasp  of your personal<br/> 
            finances please finish this survey:</p>
            <form>
                <Input
                    id="question1"
                    type="text"
                    placeholder="Enter your answer here"
                    value=""
                    onChange={() => {}}
                />
                <Input
                    id="question2"
                    type="text"
                    placeholder="Enter your answer here"
                    value=""
                    onChange={() => {}}
                />
                <Button text="Submit"/>
            </form>
        </div>
    )
}