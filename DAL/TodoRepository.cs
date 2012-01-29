using System;
using System.Collections.Generic;
using System.Linq;

namespace TodoWebApplication.DAL
{
    public class TodoRepository : IRepository<Todo>
    {
        private TodoEntitiesContainer db = new TodoEntitiesContainer();

        public IQueryable<Todo> FindAll()
        {
            return db.TodoSet;
        }

        public Todo Get(int id)
        {
            return db.TodoSet.FirstOrDefault(c => c.Id == id);
        }

        public void Save()
        {
            db.SaveChanges();
        }

        public Todo Add(Todo todo)
        {
            db.TodoSet.AddObject(todo);
            return todo;
        }

        public void Delete(Todo todo)
        {
            db.TodoSet.DeleteObject(todo);
        }

        public bool DatabaseExists()
        {
            return db.DatabaseExists();
        }

        public void DeleteDatabase()
        {
            db.DeleteDatabase();
        }

        public void CreateDatabase()
        {
            db.CreateDatabase();
        }
    }
}