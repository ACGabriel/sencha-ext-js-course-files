using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class SessionController : ApiController
    {
        private readonly SeContext _db = new SeContext();

        // GET api/Session
        public IQueryable<SessionModel> GetSessions()
        {
            return _db.Sessions;
        }

        // GET api/Session/5
        [ResponseType(typeof(SessionModel))]
        public async Task<IHttpActionResult> GetSessionModel(int id)
        {
            SessionModel sessionmodel = await _db.Sessions.FindAsync(id);
            if (sessionmodel == null)
            {
                return NotFound();
            }

            return Ok(sessionmodel);
        }

        // PUT api/Session/5
        public async Task<IHttpActionResult> PutSessionModel(int id, SessionModel sessionmodel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sessionmodel.Id)
            {
                return BadRequest();
            }

            _db.Entry(sessionmodel).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SessionModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/Session
        [ResponseType(typeof(SessionModel))]
        public async Task<IHttpActionResult> PostSessionModel(SessionModel sessionmodel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Sessions.Add(sessionmodel);
            await _db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = sessionmodel.Id }, sessionmodel);
        }

        // DELETE api/Session/5
        [ResponseType(typeof(SessionModel))]
        public async Task<IHttpActionResult> DeleteSessionModel(int id)
        {
            SessionModel sessionmodel = await _db.Sessions.FindAsync(id);
            if (sessionmodel == null)
            {
                return NotFound();
            }

            _db.Sessions.Remove(sessionmodel);
            await _db.SaveChangesAsync();

            return Ok(sessionmodel);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SessionModelExists(int id)
        {
            return _db.Sessions.Count(e => e.Id == id) > 0;
        }
    }
}