import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function RequesterTask() {
    const [taskSelect, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.currentTarget.value);
    }

    function test() {
        if (taskSelect == 'choiceTask') {
            return (
                <div className={'selectTask'}>
                    <div className={'checkBoxes'}>
                        <div>
                            <h3>Choice Task:</h3>
                        </div>
                        <div>
                            <input type="checkbox" id="choiceTask1" name="task" value="choiceTask1"></input>
                            <label for="choiceTask"> Choice #1</label>
                        </div>
                        <div>
                            <input type="checkbox" id="choiceTask2" name="task" value="choiceTask2"></input>
                            <label for="choiceTask"> Choice #2</label>
                        </div>
                        <div>
                            <input type="checkbox" id="choiceTask3" name="task" value="choiceTask3"></input>
                            <label for="choiceTask"> Choice #3</label>
                        </div>
                    </div>
                </div>)
        }
        if (taskSelect == 'decisionTask') {
            return (
                <div className={'selectTask'}>
                    <div className={'checkBoxes'}>
                        <div>
                            <h3>Decision Task:</h3>
                        </div>
                        <div>
                            <label for="decisionTask"> Decision #1</label>
                            <label for="decisionTask"> True:</label>
                            <input type="radio" id="decisionTask1" name="decisionTask1" value="true"></input>
                            <label for="decisionTask">False:</label>
                            <input type="radio" id="decisionTask1" name="decisionTask1" value="false"></input>
                        </div>
                        <div>
                            <label for="decisionTask"> Decision #2</label>
                            <label for="decisionTask"> True:</label>
                            <input type="radio" id="decisionTask2" name="decisionTask2" value="true"></input>
                            <label for="decisionTask"> False:</label>
                            <input type="radio" id="decisionTask2" name="decisionTask2" value="false"></input>
                        </div>
                        <div>
                            <label for="decisionTask"> Decision #3</label>
                            <label for="decisionTask"> True:</label>
                            <input type="radio" id="decisionTask3" name="decisionTask3" value="true"></input>
                            <label for="decisionTask"> False:</label>
                            <input type="radio" id="decisionTask3" name="decisionTask3" value="false"></input>
                        </div>
                    </div>
                </div>)
        }
        if (taskSelect == 'setenceTask') {
            return (
                <div className={'selectTask'}>
                    <div className={'checkBoxes'}>
                        <div>
                            <h3>Sentence Task:</h3>
                        </div>
                        <div>
                            <label for="setenceTask"> Sentence Input:</label>
                            <input type="text" id="sentenceTask" name="sentenceTask"></input>
                        </div>
                    </div>
                </div>)
        }
    }

    return (
        <div className={'requesterTask'}>
            <div className={'selectTask'}>
                <div>
                    <h1>New Requester Task</h1>
                </div>
                <div className={'checkBoxes'}>
                    <div>
                        <h3>Select Task Type:</h3>
                    </div>
                    <div>
                        <input type="radio" id="choiceTask" name="task" value="choiceTask" onChange={handleChange}></input>
                        <label for="choiceTask"> Choice Task</label>
                    </div>
                    <div>
                        <input type="radio" id="decisionTask" name="task" value="decisionTask" onChange={handleChange}></input>
                        <label for="vehicle1"> Decision-Making Task</label>
                    </div>
                    <div>
                        <input type="radio" id="setenceTask" name="task" value="setenceTask" onChange={handleChange}></input>
                        <label for="vehicle1"> Sentence-Level Task</label>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1>Describe your task to Workers</h1>
                </div>
                <div className={'taskDesc'}>
                    <div>
                        <label for="titleTask"> Title</label>

                        <input type="text" id="titleTask" name="titleTask" placeholder="Enter Title Of Task"></input>
                    </div>
                    <div>
                        <label for="descriptionTask"> Description: </label>
                        <input type="text" id="descriptionTask" name="descriptionTask" placeholder="Enter Title Description"></input>
                    </div>
                    <div>
                        <label for="dateTask"> Expiry Date</label>
                        <input type="date" id="dateTask" name="titleTask"></input>
                    </div>
                </div>
            </div>
            <div>
                <h1>New Requester Task</h1>
            </div>
            {test()}
            <button>Submit</button>
        </div>
    )
}


