using Microsoft.AspNetCore.Mvc;
using Backend1.Models;
using Backend1.Services;

namespace Backend1.Controllers;

public class CalcServiceController : Controller
{
    private readonly CalcService _calc;

    public CalcServiceController(CalcService calc)
    {
        _calc = calc;
    }

    public IActionResult PassUsingModel()
    {
        double a = new Random().Next(0, 11);
        double b = new Random().Next(0, 11);

        var model = new CalcViewModel
        {
            A = a,
            B = b,
            Add = _calc.Add(a, b),
            Sub = _calc.Sub(a, b),
            Mult = _calc.Mult(a, b),
            Div = (b == 0) ? "деление на 0" : _calc.Div(a, b).ToString()
        };

        return View(model);
    }

    public IActionResult PassUsingViewData()
    {
        double a = new Random().Next(0, 11);
        double b = new Random().Next(0, 11);

        ViewData["A"] = a;
        ViewData["B"] = b;
        ViewData["Add"] = a + b;
        ViewData["Sub"] = a - b;
        ViewData["Mult"] = a * b;
        ViewData["Div"] = b == 0 ? "деление на 0" : (a / b).ToString();

        return View();
    }

    public IActionResult PassUsingViewBag()
    {
        double a = new Random().Next(0, 11);
        double b = new Random().Next(0, 11);

        ViewBag.A = a;
        ViewBag.B = b;
        ViewBag.Add = a + b;
        ViewBag.Sub = a - b;
        ViewBag.Mult = a * b;
        ViewBag.Div = b == 0 ? "деление на 0" : (a / b).ToString();

        return View();
    }

    public IActionResult PassUsingServiceInjection([FromServices] CalcService calc)
    {
        double a = new Random().Next(0, 11);
        double b = new Random().Next(0, 11);

        var model = new CalcViewModel
        {
            A = a,
            B = b,
            Add = calc.Add(a, b),
            Sub = calc.Sub(a, b),
            Mult = calc.Mult(a, b),
            Div = b == 0 ? "деление на 0" : calc.Div(a, b).ToString()
        };

        return View(model);
    }
}
