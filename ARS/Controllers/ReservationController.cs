﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ARS.Models;
using ARS.Helpers;

namespace ARS.Controllers
{
    [Produces("application/json")]
    [Route("api/Reservation")]
    public class ReservationController : Controller
    {
        private readonly DatabaseContext Context;
        
        public ReservationController(DatabaseContext context)
        {
            this.Context = context;

            if (this.Context.Reservations.Count() == 0)
            {
                this.Context.Reservations.Add(new Reservation
                {
                    id = 1,
                    user_id = 1,
                    created_at = new DateTime(2018, 03, 18),
                    start_time = new DateTime(2018, 03, 19, 9, 0, 0),
                    end_time = new DateTime(2018, 03, 19, 11, 0, 0),
                });

                this.Context.SaveChanges();
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] Reservation reservation)
        {
            if (reservation == null)
            {
                return BadRequest();
            }

            this.Context.Reservations.Add(reservation);
            this.Context.SaveChanges();

            return CreatedAtRoute("GetReservation", new { id = reservation.id }, reservation);
        }

        [HttpGet("all")]
        public IEnumerable<Reservation> getAll()
        {
            return this.Context.Reservations.ToList();
        }
    }
}