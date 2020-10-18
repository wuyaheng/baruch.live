import React, { Component } from 'react';
import Scheduler from '../../components/Scheduler';

 
const data = [
    { start_date:'2020-10-29 12:30', end_date:'2020-10-29 13:15', text:'Bloomberg Excel Add-In workshop (Register Link: https://www.baruch.cuny.edu/calendar/EventRegistration.aspx?Rid=3341&Iid=1121732&Frm=)', id: 1 },
    { start_date:'2020-10-20 15:30', end_date:'2020-10-20 17:00', text:'Tools for Clear Speech workshop - Describing Line Graphs (Register Link: https://tfcs.mywconline.com/schedule.php?scheduleid=sc5f16d957565b5)', id: 2 }
];
 
class Calendar extends Component {
    render() {
        return (
            <div>
            <div class="alert alert-primary" role="alert">
               <h4 className="text-center">Baruch.Live Calendar</h4>
                </div>
                <div className='scheduler-container'>
                    <Scheduler events={data}/>
                </div>
            </div>
        );
    }
 }
 export default Calendar; 