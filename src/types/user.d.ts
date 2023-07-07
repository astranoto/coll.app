interface User {
    id: number;
    name: string;
    password: string;
    mail: string;
    role: string;
    questions: array<string>
  }

interface Question {
  id: number,
  question: string
}