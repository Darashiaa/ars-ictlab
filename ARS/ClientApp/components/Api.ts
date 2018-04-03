import * as Immutable from "immutable"

import { User, Role, Classroom, Location, Reservation, Problem, Ticket } from './Model'
import { UserComponent } from "./user/User";

export async function get_users() : Promise<Immutable.List<User>> {
    let res = await fetch(`/api/User/all`, 
      { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
    if (!res.ok) throw Error(res.statusText)
    let json = await res.json()
    console.log(json)
    return json as Immutable.List<User>
}
 
export async function set_user(user) {
  console.log("user to add: " + JSON.stringify(user))
  let res = await fetch(`/api/User/add`, 
      { method: 'post',
        body: JSON.stringify(user), 
        credentials: 'include', 
        headers:{'content-type': 'application/json'
      } 
    })
  if (!res.ok) throw Error(res.statusText)
  return "Registered"
}

export async function delete_user(id:number){
    let res = await fetch('/api/User/'+id,
        {
            method:'delete',
            credentials: 'include',
            headers:{'content-type': 'application/json'}
        }
    )
}

export async function update_user(u:User){
    let res = await fetch('/api/User/'+u.id,
        {
            method:'put',
            body: JSON.stringify(u),
            credentials: 'include',
            headers:{'content-type': 'application/json'}
        }
    )
}

export async function set_reservation(reservation: Object) {
    let res = await fetch(`/api/Reservation/add`,
    {
        method: 'post',
        body: JSON.stringify(reservation),
        credentials: 'include',
        headers: { 'content-type': 'application/json' }
        })
    if (!res.ok) throw Error(res.statusText)
    return "Reservation made"
}

export async function get_reservations(): Promise<Immutable.List<Reservation>>  {
    let res = await fetch(`/api/Reservation/all`,
        {
            method: 'get',
            credentials: 'include',
            headers: { 'content-type': 'application/json' }
        })
    if (!res.ok) throw Error(res.statusText)
    let json = await res.json()
    return json as Immutable.List<Reservation>
}


export async function getUser(userId:Number) : Promise<User> {
  let res = await fetch(`/api/user/` + userId, 
      { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
    if (!res.ok) throw Error(res.statusText)
    let json = await res.json()
    return json as User;
}

export async function getTickets() : Promise<Immutable.List<Ticket>>{
    let res = await fetch(`/api/Ticket/all`, 
    { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
    if (!res.ok) throw Error(res.statusText)
    let json = await res.json()
    return json as Immutable.List<Ticket>
}

export async function getTicket(id: number) : Promise<Ticket>{
    let res = await fetch(`/api/Ticket/` + id, 
    { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
    if (!res.ok) throw Error(res.statusText)
    let json = await res.json()
    return json as Ticket
}

export async function createTicket(ticket: Object) {
    let res = await fetch(`/api/Ticket/create`,
    {
        method: 'post',
        body: JSON.stringify(ticket),
        credentials: 'include',
        headers: { 'content-type': 'application/json' }
        })
    if (!res.ok) throw Error(res.statusText)
    return "Ticket submitted"
}

export async function updateTicket(ticket_id, ticket){
    let res = await fetch(`api/Ticket/` + ticket_id, {
        method: 'put',
        body: JSON.stringify(ticket), 
        credentials: 'include', 
        headers:{'content-type': 'application/json'}
    });

    if (!res.ok) throw Error(res.statusText)
    return "Updated ticket";
}

export async function deleteTicket(ticket_id){
    let res = await fetch('/api/Ticket/'+ticket_id,
        {
            method:'delete',
            credentials: 'include',
            headers:{'content-type': 'application/json'}
        }
    )
    if (!res.ok) return false;
    return true;
}

export async function getProblems() : Promise<Immutable.List<Problem>>{
    let res = await fetch(`/api/Problem/all`, 
        { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
    if (!res.ok) throw Error(res.statusText)
    let json = await res.json()
    return json as Immutable.List<Problem>
}

export async function getProblem(problem_id: Number) : Promise<Problem>{
    let res = await fetch(`/api/Problem/` + problem_id, 
        { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
    if (!res.ok) throw Error(res.statusText)
    let json = await res.json()
    return json as Problem
}

export async function getLocationClassrooms(location_id:Number) : Promise<Immutable.List<Classroom>> {
    let res = await fetch(`/api/classroom/location/` + location_id, 
        { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
      if (!res.ok) throw Error(res.statusText)
      let json = await res.json()
      return json as Immutable.List<Classroom>;
}

export async function createClassroom(classroom){
    let res = await fetch(`api/Classroom`, {
        method: 'post',
        body: JSON.stringify(classroom), 
        credentials: 'include', 
        headers:{'content-type': 'application/json'}
    });

    if (!res.ok) throw Error(res.statusText)
    return "Created classroom";
}

export async function getLocations() : Promise<Immutable.List<Location>> {
    let res = await fetch(`/api/Location/all`, 
    { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json as Immutable.List<Location>
}


export async function getLocation(location_id: Number) : Promise<Location> {
    let res = await fetch(`/api/Location/` + location_id, 
    { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
  if (!res.ok) throw Error(res.statusText)
  let json = await res.json()
  return json as Location
}

export async function getClassrooms() : Promise<Immutable.List<Classroom>> {
    let res = await fetch(`/api/classroom/all`, 
        { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
      if (!res.ok) throw Error(res.statusText)
      let json = await res.json()
      return json as Immutable.List<Classroom>;
}

export async function getClassroom(classroomId:Number) : Promise<Classroom> {
    let res = await fetch(`/api/classroom/` + classroomId, 
        { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
      if (!res.ok) throw Error(res.statusText)
      let json = await res.json()
      return json as Classroom;
}

export async function updateClassroom(classroomId, classroom){
    let res = await fetch(`api/classroom/` + classroomId, {
        method: 'put',
        body: JSON.stringify(classroom), 
        credentials: 'include', 
        headers:{'content-type': 'application/json'}
    });

    if (!res.ok) throw Error(res.statusText)
    return "Updated classroom";
}


export async function deleteClassroom(classroomId){
    let res = await fetch(`api/classroom/` + classroomId, {
        method: 'delete',
        credentials: 'include', 
        headers:{'content-type': 'application/json'}
    });

    if (!res.ok) return false;
    return true;
}
