using Microsoft.AspNetCore.Mvc;
using Backend2.Models;

namespace Backend2.Controllers
{
    public class CalcController : Controller
    {
        [HttpGet]
        public IActionResult Manual()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Manual(string a, string b, string operation)
        {
            double x = double.Parse(a);
            double y = double.Parse(b);

            if (operation == "/" && y == 0)
            {
                ViewBag.Result = "Ошибка: деление на ноль!";
                return View();
            }

            double res = Calculate(x, y, operation);
            ViewBag.Result = $"{x} {operation} {y} = {res}";
            return View();
        }
        [HttpGet]
        public IActionResult ManualWithSeparateHandlers()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ManualWithSeparateHandlers(string a, string b, string operation)
        {
            double x = double.Parse(a);
            double y = double.Parse(b);

            if (operation == "/" && y == 0)
            {
                ViewBag.Result = "Ошибка: деление на ноль!";
                return View();
            }

            ViewBag.Result = $"{x} {operation} {y} = {Calculate(x, y, operation)}";
            return View();
        }
        [HttpGet]
        public IActionResult ModelBindingInParameters()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ModelBindingInParameters(double a, double b, string operation)
        {
            if (operation == "/" && b == 0)
            {
                ViewData["Result"] = "Ошибка: деление на ноль!";
                return View();
            }

            ViewData["Result"] = Calculate(a, b, operation);
            return View();
        }
        [HttpGet]
        public IActionResult ModelBindingInSeparateModel()
        {
            return View(new CalcModel());
        }

        [HttpPost]
        public IActionResult ModelBindingInSeparateModel(CalcModel model)
        {
            if (model.Operation == "/" && model.B == 0)
            {
                model.Error = "Ошибка: деление на ноль!";
                return View(model);
            }

            model.Result = Calculate(model.A, model.B, model.Operation);
            return View(model);
        }
        private double Calculate(double a, double b, string op)
        {
            return op switch
            {
                "+" => a + b,
                "-" => a - b,
                "*" => a * b,
                "/" => a / b,
                _ => 0
            };
        }
    }
}
