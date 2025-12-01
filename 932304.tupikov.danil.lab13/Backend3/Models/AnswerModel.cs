using System.ComponentModel.DataAnnotations;

namespace Backend3.Models
{
    public class AnswerModel
    {
        public int QuestionIndex { get; set; }

        [Required(ErrorMessage = "Введите число")]
        public int? UserAnswer { get; set; }
    }
}
