import React, {useState} from 'react';
import Reader from '../../../../simple/userarea/Reader';
import AddClass from '../../../../simple/classes/AddClass';
import ClassBody from '../../../../simple/classes/ClassBody';

export default function ClassesAdmin(props){

    const [reload, setReload] = useState(true);

    return (
        <div>
            <Reader/>
            <AddClass reload={reload} setReload={setReload}/>
            <ClassBody reload={reload} setReload={setReload}/>
        </div>
    )
}