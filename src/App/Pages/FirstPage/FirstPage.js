import {useState} from 'react'
import './firstPageStyle.css'

function FirstPage(){

    const [list, setList]=useState([]);

    //setList(localStorage.getItem("list"));

    const [newTask, setNewTask]=useState("");

    function addTask(event){
        event.preventDefault();
        list.push({task:newTask, done:false});
        setNewTask("");
        console.log(list);
        //localStorage.setItem("list", list);
    }

    const check = index => event => {
        console.log('index: ' + index);
        console.log('property name: '+ event.target.task);
        let newArr = [...list]; 
        newArr[index] = {task: newArr[index].task, done: !(event.target.done)};       
        setList(newArr);
        console.log(list);
        //localStorage.setItem("list", list);
    }
    
    return(

    <div class='generalContainer'>
        <div>
            <h2>TO-DO LIST</h2>
            
            <form id='form' onSubmit={addTask}>
                <div className='addTask'>
                    <label for="task"></label>
                    <input type="text" id="task" name="task" placeholder="Your new task.." 
                        onChange={event =>setNewTask(event.target.value)}
                    />
                    <input type="submit" value="+" class="button"/>
                </div> 
            </form>            
        </div>       
        <div class='showList'>
          {list.map( (list,index)=>(
           <div key={index} class='listElement'>                
                <div onClick={check(index)}>{list.task} </div>
           </div>
          ))}
        </div> 
       
    </div>

    )
}

export default FirstPage;