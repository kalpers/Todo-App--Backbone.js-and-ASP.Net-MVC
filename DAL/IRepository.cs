using System.Linq;

namespace TodoWebApplication.DAL
{
    public interface IRepository<T>
    {
        IQueryable<T> FindAll();
        T Get(int id);
        void Save();
        T Add(T t);
        void Delete(T t);
        bool DatabaseExists();
        void DeleteDatabase();
        void CreateDatabase();
    }
}
