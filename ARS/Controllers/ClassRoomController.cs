﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ARS.Models.Contexts;
using ARS.Models;

namespace ARS.Controllers
{
    [Produces("application/json")]
    [Route("api/classroom")]
    public class ClassRoomController : Controller
    {
        private readonly DatabaseContext Context;

        public ClassRoomController(DatabaseContext context)
        {
            this.Context = context;

            if(this.Context.Classrooms.Count() == 0)
            {
                this.Context.Classrooms.Add(new ClassRoom {
                    name = "WD1016"
                });

                this.Context.SaveChanges();
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] ClassRoom classRoom)
        {
            if(classRoom == null)
            {
                return BadRequest();
            }

            this.Context.Classrooms.Add(classRoom);
            this.Context.SaveChanges();

            return CreatedAtRoute("GetClassroom", new { id = classRoom.ClassRoomId}, classRoom);
        }

        [HttpGet]
        public IEnumerable<ClassRoom> GetAll()
        {
            return this.Context.Classrooms.ToList();
        }

        [HttpGet("{id}", Name = "GetClassroom")]
        public IActionResult GetById(long id)
        {
            ClassRoom item = this.Context.Classrooms.FirstOrDefault(c => c.ClassRoomId == id);

            if(item == null)
            {
                return NotFound();
            }

            return new ObjectResult(item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] ClassRoom classRoom)
        {
            if (classRoom == null || classRoom.ClassRoomId != id)
            {
            return BadRequest();
            }

            ClassRoom classroom = this.Context.Classrooms.FirstOrDefault(t => t.ClassRoomId == id);

            if (classroom == null)
            {
                return NotFound();
            }

            classroom.name = classRoom.name;

            this.Context.Classrooms.Update(classroom);
            this.Context.SaveChanges();

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            ClassRoom classroom = this.Context.Classrooms.FirstOrDefault(c => c.ClassRoomId == id);

            if(classroom == null)
            {
                return NotFound();
            }

            this.Context.Classrooms.Remove(classroom);
            this.Context.SaveChanges();

            return new NoContentResult();
        }
    }
}