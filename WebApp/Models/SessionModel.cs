using System;
using System.Collections.Generic;

namespace WebApp.Models
{
    // Models returned by AccountController actions.

    public class SessionModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int SessionCategory { get; set; }

        public Boolean Approved { get; set; }
    }

}
