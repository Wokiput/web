using System.ComponentModel.DataAnnotations;

namespace Backend3.Models
{
    public class QuizQuestion
    {
        public int Id { get; set; }

        [Required]
        public string Text { get; set; } = string.Empty;

        [Required]
        public int CorrectAnswer { get; set; }
    }
}
