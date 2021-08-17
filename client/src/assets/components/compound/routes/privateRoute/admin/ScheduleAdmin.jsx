import React, { useState } from 'react';
import Reader from '../../../../simple/userarea/Reader';
import ScheduleBody from '../../../../simple/userarea/ScheduleBody';
import AddTaskSchedule from '../../../../simple/userarea/AddTaskSchedule';

export default function ScheduleAdmin(props){

    const [reload, setReload] = useState(true);

    return(
        <div>
            <Reader/>
            <AddTaskSchedule reload={reload} setReload={setReload}/>
            <ScheduleBody  reload={reload} setReload={setReload} />
        </div>
    )
}