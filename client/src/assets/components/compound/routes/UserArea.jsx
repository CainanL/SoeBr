import React from 'react';
import Reader from '../../simple/userarea/Reader';
import SchoolIdentification from '../../simple/userarea/SchoolIdentification';
import StudentArea from '../../simple/userarea/StudentArea';

function UserArea() {

    const urlLogoSchool = 'https://w7.pngwing.com/pngs/551/211/png-transparent-education-logo-pre-school-others-text-logo-business.png'

    return (
        <div>
            <Reader/>
            <SchoolIdentification urlImage={urlLogoSchool} />
            <StudentArea />
        </div>
    )
}

export default UserArea;