using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class SeContext : DbContext
    {
        public DbSet<SessionModel> Sessions { get; set; } 
    }

    public class SeDbInitializer : DropCreateDatabaseAlways<SeContext>
    {
        protected override void Seed(SeContext context)
        {
            context.Sessions.Add(new SessionModel()
            {
                Approved = true,
                Title = "JavaScript",
                SessionCategory = 1
            });

            context.Sessions.Add(new SessionModel()
            {
                Approved = true,
                Title = "C#",
                SessionCategory = 2
            });

            context.Sessions.Add(new SessionModel()
            {
                Approved = true,
                Title = "Java",
                SessionCategory = 2
            });

            context.Sessions.Add(new SessionModel()
            {
                Approved = true,
                Title = "ExtJS",
                SessionCategory = 3
            });

            context.Sessions.Add(new SessionModel()
            {
                Approved = true,
                Title = "Sencha Touch",
                SessionCategory = 3
            });

            context.Sessions.Add(new SessionModel()
            {
                Approved = true,
                Title = "Sencha Architect",
                SessionCategory = 3
            });

            base.Seed(context);
        }
    }
}