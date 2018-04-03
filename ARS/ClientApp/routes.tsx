import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Classrooms } from './components//classroom/Classrooms';    
import { Users } from './components/user/Users';
import { Schedule } from './components/user/Schedule';
import  { Helpdesk } from './components/helpdesk/Helpdesk';
import {TicketForm} from './components/helpdesk/TicketForm';
import {TicketEdit} from './components/helpdesk/TicketEdit';
// import { Reservation } from './components/Reservation'

import { Reservations } from './components/Reservation/Reservations';
import { Login } from './components/user/Login';
import { ClassroomCreation } from './components/classroom/ClassroomCreation';
import { ClassroomEdit } from './components/classroom/ClassroomEdit';
import { ClassroomOverview } from './components/classroom/ClassroomOverview';


export const routes = <Layout>
    <Route exact path='/' component={ Login } />
    <Route path='/home' component={ Schedule } />
    <Route path='/classroom' component={ Classrooms } />
    <Route path='/user' component={ Users } />
    <Route path='/Helpdesk/Overview' component={ Helpdesk } />
    <Route path='/Helpdesk/Add/TicketForm' component={TicketForm} />
    <Route path='/Helpdesk/Tickets/:id/edit' component={ TicketEdit } />
    {/* <Route path='/reservation' component={ Reservation } /> */}
    <Route path='/reservation' component={ Reservations } />
    <Route path='/admin/classrooms/overview' component={ ClassroomOverview }/>
    <Route path='/admin/classrooms/create' component={ ClassroomCreation }/>
    <Route path='/admin/classrooms/:id/edit' component={ ClassroomEdit } />
</Layout>;

