import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ChoiceTask from './choiceTask';
import DecisionTask from './decisionTask';
import SentenceTask from './sentenceTask'

export default function RequesterTask() {
    const [taskSelect, setTask] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [value, setValue] = useState();
    const [workerReq, setWorkerReq] = useState();
    const [rewardRes, setRewardRes] = useState();
    const [workerRes, setWorkerRes] = useState();

    const handleChange = (e) => {
        setTask(e.currentTarget.value);
    }

    const handleChangeTitle = (e) => {
        setTitle(e.currentTarget.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.currentTarget.value);
    }

    const handleChangeDate = (e) => {
        setDate(e.currentTarget.value);
    }

    const handleAnswer = (e) => {
        setValue(e.currentTarget.value);
    }

    const handleAnswerWorker = (e) => {
        setWorkerReq(e.currentTarget.value);
    }

    const handleRewardRes = (e) => {
        setRewardRes(e.currentTarget.value);
    }

    const handleWorkerRes = (e) => {
        setWorkerRes(e.currentTarget.value);
    }

    const handleAnswerCheck = (e) => {
        if (e.currentTarget.checked == true) {
            setValue(value + e.currentTarget.value);
        } else {
            setValue(value.replace(e.currentTarget.value, ""));
        }
    }

    const handleAnswerRadio = (e) => {
        if (e.currentTarget.checked == true) {
            setValue(value + e.currentTarget.value);
        }
    }

    function test() {
        if (taskSelect == 'choiceTask') {
            return (
                <ChoiceTask onChangeValue={handleAnswerCheck} />)
        }
        if (taskSelect == 'decisionTask') {
            return (
                <DecisionTask onChangeValue={handleAnswerRadio} />)
        }
        if (taskSelect == 'setenceTask') {
            return (
                <SentenceTask onChangeValue={handleAnswer} />)
        }
    }

    const handleTask = () => {
        fetch('http://localhost:3000/task', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                task:  taskSelect,
                taskTitle: title,
                taskDesc: description,
                taskDate: date,
                value: value,
                workerDetails: workerReq  + rewardRes + workerRes 
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log("Errors:" + err);
        })
    }

    return (
        <div className={'requesterTask'}>
            <div className={'selectTask'}>
                <div>
                    <h1>New Requester Task</h1>
                    <h1></h1>
                </div>
                <div className={'checkBoxes'}>
                    <div>
                        <h3>Select Task Type:</h3>
                    </div>
                    <div>
                        <input type="radio" id="choiceTask" name="task" value="choiceTask" onClick={handleChange}></input>
                        <label for="choiceTask"> Choice Task</label>
                    </div>
                    <div>
                        <input type="radio" id="decisionTask" name="task" value="decisionTask" onClick={handleChange}></input>
                        <label for="decisionTask"> Decision-Making Task</label>
                    </div>
                    <div>
                        <input type="radio" id="setenceTask" name="task" value="setenceTask" onClick={handleChange}></input>
                        <label for="sentenceTask"> Sentence-Level Task</label>
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

                        <input type="text" id="titleTask" name="titleTask" placeholder="Enter Title Of Task" onChange={handleChangeTitle}></input>
                    </div>
                    <div>
                        <label for="descriptionTask"> Description: </label>
                        <input type="text" id="descriptionTask" name="descriptionTask" placeholder="Enter Title Description" onChange={handleChangeDescription}></input>
                    </div>
                    <div>
                        <label for="dateTask"> Expiry Date</label>
                        <input type="text" id="dateTask" name="titleTask" onChange={handleChangeDate}></input>
                    </div>
                </div>
            </div>
            <div>
                <h1>New Requester Task</h1>
            </div>
            {test()}
            <div>
                <h1>Worker Requirement</h1>
            </div>
            <div className={'taskDesc'}>
                <div>
                    <label for="requireWorkers"> Require Master Works: </label>
                    <label for="requireWorkers"> Yes:</label>
                    <input type="radio" id="requireWorkersTrue" name="requireWorkers" value="Yes" onChange={handleAnswerWorker}></input>
                    <label for="requireWorkers">No:</label>
                    <input type="radio" id="requireWorkersFalse" name="requireWorkers" value="No" onChange={handleAnswerWorker}></input>
                </div>
                <div>
                    <label for="reward"> Reward Per Response: </label>
                    <input type="text" id="reward" name="reward" onChange={handleRewardRes}></input>
                </div>
                <div>
                    <label for="number"> Number Of Workers: </label>
                    <input type="text" id="number" name="number" onChange={handleWorkerRes}></input>
                </div>
            </div>
            <button onClick={handleTask}>Submit</button>
        </div>
    )
}


