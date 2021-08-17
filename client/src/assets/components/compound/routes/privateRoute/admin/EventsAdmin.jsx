import React, {useState} from 'react';
import Reader from '../../../../simple/userarea/Reader';
import EventsBody from '../../../../simple/userarea/EventsBody';
import AddEvent from '../../../../simple/userarea/AddEvent';

export default function EventsAdmin(props){

    const [reload, setReload] = useState(true);

    return(
        <div>
            <Reader/>
            <AddEvent reload={reload} setReload={setReload}/>
            <EventsBody reload={reload} setReload={setReload}/>
        </div>
    )
}