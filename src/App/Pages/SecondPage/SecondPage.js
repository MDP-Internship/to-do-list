import {useState} from 'react'
import './secondPageStyle.css'

function SecondPage(){

    const [monday, setMonday]=useState(["a","b"]);
    const [tuesday, setTuesdayy]=useState([]);
    const [wednesday, setWednesday]=useState(["c"]);
    const [thursday, setThursday]=useState(["d", "e"]);
    const [friday, setFriday]=useState([]);
    const [weekdays, setWeekdays]=useState([]);

    setWeekdays(monday, tuesday, wednesday, thursday, friday);


    return(

    <div id='calendar' class="calendar">
        <p>helo</p>
        
       
    </div>

    )
}

export default SecondPage;