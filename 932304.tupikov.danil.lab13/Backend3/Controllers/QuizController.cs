using Microsoft.AspNetCore.Mvc;
using Backend3.Models;
using Backend3.Extensions;
using System.Linq;
using System.Collections.Generic;

namespace Backend3.Controllers
{
    public class QuizController : Controller
    {
        private const string KEY = "QUIZ_STATE";

        public IActionResult Start()
        {
            var rand = Random.Shared; 

            var questions = new List<QuizQuestion>();
            for (int i = 0; i < 4; i++)
            {
                int a = rand.Next(1, 20);
                int b = rand.Next(1, 20);
                questions.Add(new QuizQuestion
                {
                    Id = i + 1,
                    Text = $"{a} + {b}",
                    CorrectAnswer = a + b
                });
            }

            var state = new QuizState
            {
                Questions = questions,
                UserAnswers = Enumerable.Repeat<int?>(null, questions.Count).ToList(),
                Current = 0
            };

            HttpContext.Session.Set(KEY, state);

            return RedirectToAction("Step");
        }

        public IActionResult Step()
        {
            var state = HttpContext.Session.Get<QuizState>(KEY);
            if (state == null)
                return RedirectToAction("Start");

            if (state.Current >= state.Questions.Count)
                return RedirectToAction("Result");

            var model = new AnswerModel
            {
                QuestionIndex = state.Current
            };

            ViewBag.QuestionText = state.Questions[state.Current].Text;

            return View(model);
        }

        [HttpPost]
        public IActionResult Step(AnswerModel model)
        {
            var state = HttpContext.Session.Get<QuizState>(KEY);
            if (state == null)
                return RedirectToAction("Start");

            if (!ModelState.IsValid)
            {
                ViewBag.QuestionText = state.Questions[state.Current].Text;
                return View(model);
            }

            state.UserAnswers[state.Current] = model.UserAnswer;
            state.Current++;

            HttpContext.Session.Set(KEY, state);

            if (state.Current >= state.Questions.Count)
                return RedirectToAction("Result");

            return RedirectToAction("Step");
        }

        public IActionResult Result()
        {
            var state = HttpContext.Session.Get<QuizState>(KEY);
            if (state == null)
                return RedirectToAction("Start");

            int correct = state.Questions
                .Select((q, i) => (q.CorrectAnswer == state.UserAnswers[i]) ? 1 : 0)
                .Sum();

            ViewBag.CorrectCount = correct;
            ViewBag.Total = state.Questions.Count;
            ViewBag.Questions = state.Questions;
            ViewBag.UserAnswers = state.UserAnswers;

            return View();
        }
    }
}
