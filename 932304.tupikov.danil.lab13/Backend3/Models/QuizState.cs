using System.Collections.Generic;

namespace Backend3.Models
{
    public class QuizState
    {
        public int Current { get; set; } = 0;
        public List<QuizQuestion> Questions { get; set; } = new List<QuizQuestion>();
        public List<int?> UserAnswers { get; set; } = new List<int?>();
    }
}
