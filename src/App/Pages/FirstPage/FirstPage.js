import {useState} from 'react'
import './firstPageStyle.css'
import {Color} from '../../Constants/Color.js';

function FirstPage(){

    const [list, setList]=useState([]);

    //setList(localStorage.getItem("list"));

    const [newTask, setNewTask]=useState("");
    const [borderColor, setBorderColor]=useState("blue");

    function addTask(event){
        event.preventDefault();
        list.push({task:newTask, done:false, color: borderColor});
        setNewTask("");
        console.log(list);
        //localStorage.setItem("list", list);
    }

    function colorChange(){
        setBorderColor(document.getElementById("color"));
        console.log(borderColor);
    }

    const check = index => event => {
        console.log('index: ' + index);
        console.log('property name: '+ event.target.task);
        let newArr = [...list]; 
        newArr[index] = {task: newArr[index].task, done: !(event.target.done) , color:newArr[index].color};       
        setList(newArr);
        console.log(list);
        //localStorage.setItem("list", list);
    }
    
    return(

    <div class='generalContainer'>
        <div >
            <h2>TO-DO LIST</h2>
                        
            <form id='form' onSubmit={addTask}>
                <div className='addTask'>
                    <label for="task"></label>
                    <input type="text" id="task" name="task" placeholder="Your new task.." 
                        onChange={event =>setNewTask(event.target.value)}
                    />
                    <input type="submit" value="+" class="button"/>
                    <br/>
                    <label for="cars">Choose a car:</label>                    
                    <select name="color" id="color" /*onChange={colorChange}*/>
                    {Color.map( (color)=>(
                      <option value={color}>{color}</option>                                        
                    ))}
                    </select>
                </div> 
            </form>            
        </div>       
        <div class='showList'>
          {list.map( (list,index)=>(
           <div key={index} class='listElement' style={{ borderColor: borderColor}}>                
                <div onClick={check(index)}>{list.task} </div>
           </div>
          ))}
        </div> 
        <br/>    

    </div>

    )
}

export default FirstPage;



/*


   <div class="calendarButton">
            <a href={"#calendar"}>
              calender
            </a>
        </div>

*/