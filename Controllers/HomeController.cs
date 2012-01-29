using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TodoWebApplication.DAL;
using TodoWebApplication.ViewModels;

namespace TodoWebApplication.Controllers
{
    public class HomeController : Controller
    {
        private IRepository<Todo> repository = null;

        public HomeController()
        {
            repository = new TodoRepository();
        }

        public HomeController(IRepository<Todo> repository)
        {
            this.repository = repository;
        }

        public ActionResult Index()
        {
            var todos = repository.FindAll();

            var list = new List<TodoViewModel>();
            foreach (Todo t in todos)
                list.Add(new TodoViewModel(t));

            return View(list);
        }

        [HttpGet]
        public ActionResult Get()
        {
            var todos = repository.FindAll();
            var list = new List<TodoViewModel>();
            foreach (Todo t in todos)
                list.Add(new TodoViewModel(t));

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Post(TodoViewModel newTodo)
        {
            Todo todo = new Todo();
            UpdateModel(todo, new[] { "Text", "Done", "Order" });
            ValidateModel(todo);
            repository.Add(todo);
            repository.Save();
            return Json(new TodoViewModel(todo));
        }

        [HttpPut]
        public ActionResult Put(int id, TodoViewModel newTodo)
        {
            Todo todo = repository.Get(id);
            UpdateModel(todo, new[] { "Text", "Done", "Order" });
            ValidateModel(todo);
            repository.Save();
            return Json(new TodoViewModel(todo));
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            Todo todo = repository.Get(id);
            if (todo != null)
            {
                repository.Delete(todo);
                repository.Save();
            }
            return Json(new { });
        }

    }
}
