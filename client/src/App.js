import './App.css';
import Homepage from './assets/components/compound/routes/Homepage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InexistentRouter from './assets/components/compound/routes/InexistentRouter';
import UserArea from './assets/components/compound/routes/UserArea';
import Schedule from './assets/components/compound/routes/Schedule';
import { Provider } from 'react-redux';
import SchoolReport from './assets/components/compound/routes/SchoolReport';
import Events from './assets/components/compound/routes/Events';
import Curriculum from './assets/components/compound/routes/Curriculum'
import WeekySchedule from './assets/components/compound/routes/WeeklySchedule';
import PrivateRoute from './assets/components/compound/routes/privateRoute/PrivateRouter'
import Negado from './assets/components/compound/routes/privateRoute/Negado';
import UserAreaAdmin from './assets/components/compound/routes/privateRoute/admin/UserAreaAdmin';
import Students from './assets/components/compound/routes/privateRoute/admin/Students';
import ScheduleAdmin from './assets/components/compound/routes/privateRoute/admin/ScheduleAdmin';
import SchoolReportAdmin from './assets/components/compound/routes/privateRoute/admin/SchoolReportAdmin';
import EventsAdmin from './assets/components/compound/routes/privateRoute/admin/EventsAdmin';
import FinancesAdmin from './assets/components/compound/routes/privateRoute/admin/FinancesAdmin';
import Employees from './assets/components/compound/routes/privateRoute/admin/Employees';
import ClassesAdmin from './assets/components/compound/routes/privateRoute/admin/Classes';
import UserAreaTeacter from './assets/components/compound/routes/privateRoute/teacher/UserAreaTeacher';
import StudentTeacher from './assets/components/compound/routes/privateRoute/teacher/StudentsTeacher';
import WeeklyscheduleTeacher from './assets/components/compound/routes/privateRoute/teacher/WeeklyScheduleTeacher';
import ClassesTeacher from './assets/components/compound/routes/privateRoute/teacher/ClasseTeacher';
import TeacherRouter from './assets/components/compound/routes/privateRoute/teacher/TeacherRouter';
import {store} from '../src/reducers/allReducers'
import AdminRouter from './assets/components/compound/routes/privateRoute/admin/AdminRouter';
import RedirectUserRouter from './assets/components/compound/routes/RedirectUserRouter';
import AddStudent from './assets/components/compound/routes/privateRoute/admin/AddStudent';
import AddEmployeer from './assets/components/compound/routes/privateRoute/admin/AddEmployeer';
import UserAreaCoordinator from './assets/components/compound/routes/privateRoute/coordinator/UserAreaCoordinator';
import CordinatorRouter from './assets/components/compound/routes/privateRoute/coordinator/CoordinatorRouter';
import CoordinatorEmployees from './assets/components/compound/routes/privateRoute/coordinator/CoordinatorEmployees'
import Content from './assets/components/compound/Content';
import AddContent from './assets/components/simple/teacher/AddContent';
import AboutContent from './assets/components/simple/userarea/AboutContent';
import TeacherActivicties from './assets/components/compound/routes/privateRoute/teacher/TeacherActivicties';

function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'><Homepage/></Route>

            {/* Student area */}
            <PrivateRoute exact path='/userarea/schedule'><Schedule /></PrivateRoute>
            <PrivateRoute exact path='/userarea/schoolreport'><SchoolReport/></PrivateRoute>
            <PrivateRoute exact path='/userarea/curriculum'><Curriculum/></PrivateRoute>            
            <PrivateRoute exact path='/userarea/events'><Events/></PrivateRoute>            
            <PrivateRoute exact path='/userarea/weeklyschedule'><WeekySchedule/></PrivateRoute>
            <PrivateRoute exact path='/userarea'><UserArea /></PrivateRoute>


            {/* Director area */}
            <AdminRouter exact path='/admin/students'><Students/></AdminRouter>
            <AdminRouter exact path='/admin/students/addStudent'><AddStudent/></AdminRouter>
            <AdminRouter exact path='/admin/schedule'><ScheduleAdmin /></AdminRouter>
            <AdminRouter exact path='/admin/schoolreport'><SchoolReportAdmin/></AdminRouter>
            <AdminRouter exact path='/admin/finances'><FinancesAdmin/></AdminRouter>
            <AdminRouter exact path='/admin/employees'><Employees/></AdminRouter>   
            <AdminRouter exact path='/admin/employees/addEmployeer'><AddEmployeer/></AdminRouter>       
            <AdminRouter exact path='/admin/events'><EventsAdmin/></AdminRouter>            
            <AdminRouter exact path='/admin/weeklyschedule'><WeekySchedule/></AdminRouter>
            <AdminRouter exact path='/admin/classes'><ClassesAdmin/></AdminRouter>
            <AdminRouter exact path='/admin'><UserAreaAdmin/></AdminRouter>


            {/* Teacher area */}
            <TeacherRouter exact path='/userarea/teacher/students'><StudentTeacher/></TeacherRouter>
            <TeacherRouter exact path='/userarea/teacher/schedule'><ScheduleAdmin/></TeacherRouter>
            <TeacherRouter exact path='/userarea/teacher/schoolreport'><SchoolReportAdmin/></TeacherRouter>
            <TeacherRouter exact path='/userarea/teacher/events'><Events/></TeacherRouter>            
            <TeacherRouter exact path='/userarea/teacher/weeklyschedule'><WeeklyscheduleTeacher/></TeacherRouter>
            <TeacherRouter exact path='/userarea/teacher/classes'><ClassesTeacher/></TeacherRouter>
            <TeacherRouter exact path='/userarea/teacher/content'><Content/></TeacherRouter>
            <TeacherRouter path='/userarea/teacher/content/aboutcontent/:id'><AboutContent/></TeacherRouter>
            <TeacherRouter exact path='/userarea/teacher/activicties'><TeacherActivicties/></TeacherRouter>
            <TeacherRouter exact path='/userarea/teacher/addActivicties'><AddContent/></TeacherRouter>
            <TeacherRouter exact path='/userarea/teacher'><UserAreaTeacter/></TeacherRouter>
            


            {/* Coordinator area*/}
            <CordinatorRouter exact path='/coordinator/students'><Students/></CordinatorRouter>
            <CordinatorRouter exact path='/coordinator/students/addStudent'><AddStudent/></CordinatorRouter>
            <CordinatorRouter exact path='/coordinator/schedule'><ScheduleAdmin /></CordinatorRouter>
            <CordinatorRouter exact path='/coordinator/schoolreport'><SchoolReportAdmin/></CordinatorRouter>
            <CordinatorRouter exact path='/coordinator/employees'><CoordinatorEmployees/></CordinatorRouter>    
            <CordinatorRouter exact path='/coordinator/events'><EventsAdmin/></CordinatorRouter>            
            <CordinatorRouter exact path='/coordinator/weeklyschedule'><WeekySchedule/></CordinatorRouter>
            <CordinatorRouter exact path='/coordinator/classes'><ClassesAdmin/></CordinatorRouter>
            <CordinatorRouter exact path='/coordinator'><UserAreaCoordinator/></CordinatorRouter>




            <Route path='/set' >
              <RedirectUserRouter/>
            </Route>

            {/* Rotas alternativas de erro */}
            <Route path='/negado'>
              <Negado />
            </Route>
            <Route path="*">
              <InexistentRouter />
            </Route>



          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
