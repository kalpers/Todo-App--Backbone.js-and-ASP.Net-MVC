using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace TodoWebApplication
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            var url = "api/Todos";

            routes.MapRoute(
                "Todo_GET",
                url,
                new { controller = "Home", action = "Get", area = "" },
                new { httpMethod = new HttpMethodConstraint("GET") }
            );

            routes.MapRoute(
                "Todo_GET_ONE",
                url + "/{id}",
                new { controller = "Home", action = "GetOne" },
                new { httpMethod = new HttpMethodConstraint("GET") }
            );

            routes.MapRoute(
                "Todo_POST",
                url,
                new { controller = "Home", action = "Post" },
                new { httpMethod = new HttpMethodConstraint("POST") }
            );

            routes.MapRoute(
                "Todo_PUT",
                url + "/{id}",
                new { controller = "Home", action = "Put" },
                new { httpMethod = new HttpMethodConstraint("PUT") }
            );

            routes.MapRoute(
                "Todo_DELETE",
                url + "/{id}",
                new { controller = "Home", action = "Delete" },
                new { httpMethod = new HttpMethodConstraint("DELETE") }
            );

            routes.MapRoute(
                "Default", // Route name
                "{controller}/{action}/{id}", // URL with parameters
                new { controller = "Home", action = "Index", id = UrlParameter.Optional } // Parameter defaults
            );
            

        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);
        }
    }
}