import React from 'react'
import Reader from '../../simple/userarea/Reader';
import StudentScheduleBody from '../../simple/userarea/StudentScheduleBody';

function Schedule(props) {
    return (
        <div>
            <Reader />
            <StudentScheduleBody/>
        </div>
    )
}

export default Schedule;