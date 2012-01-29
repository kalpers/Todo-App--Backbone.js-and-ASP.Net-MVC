using System;

namespace TodoWebApplication.ViewModels
{
    public class TodoViewModel
    {
        public int id { get; set; }
        public string text { get; set; }
        public bool done { get; set; }
        public int order { get; set; }

        public TodoViewModel() { }

        public TodoViewModel(Todo t)
        {
            this.id = t.Id;
            this.text = t.Text;
            this.done = t.Done;
            this.order = t.Order;
        }
    }
}