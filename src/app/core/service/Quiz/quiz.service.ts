import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizzes: {
    [key: string]: { question: string; options: string[]; answer: string }[];
  } = {
    english: [
      {
        question: 'What is the capital of England?',
        options: ['London', 'Paris', 'Berlin'],
        answer: 'London',
      },
      {
        question: 'What is the plural of "child"?',
        options: ['childs', 'children', 'childes'],
        answer: 'children',
      },
      {
        question: 'What is the synonym of "happy"?',
        options: ['sad', 'joyful', 'angry'],
        answer: 'joyful',
      },
      {
        question: 'What color is the sky?',
        options: ['blue', 'green', 'red'],
        answer: 'blue',
      },
      {
        question: 'How many days are in a week?',
        options: ['5', '6', '7'],
        answer: '7',
      },
    ],
    spanish: [
      {
        question: '¿Cuál es la capital de España?',
        options: ['Madrid', 'Barcelona', 'Valencia'],
        answer: 'Madrid',
      },
      {
        question: '¿Cómo se dice "cat" en español?',
        options: ['perro', 'gato', 'ratón'],
        answer: 'gato',
      },
      {
        question: '¿Qué es el sinónimo de "feliz"?',
        options: ['triste', 'contento', 'enojado'],
        answer: 'contento',
      },
      {
        question: '¿De qué color es el cielo?',
        options: ['azul', 'verde', 'rojo'],
        answer: 'azul',
      },
      {
        question: '¿Cuántos días hay en una semana?',
        options: ['5', '6', '7'],
        answer: '7',
      },
    ],
    french: [
      {
        question: 'Quelle est la capitale de la France?',
        options: ['Paris', 'Lyon', 'Marseille'],
        answer: 'Paris',
      },
      {
        question: 'Comment dit-on "dog" en français?',
        options: ['chat', 'chien', 'souris'],
        answer: 'chien',
      },
      {
        question: 'Quel est le synonyme de "heureux"?',
        options: ['triste', 'joyeux', 'fâché'],
        answer: 'joyeux',
      },
      {
        question: 'De quelle couleur est le ciel?',
        options: ['bleu', 'vert', 'rouge'],
        answer: 'bleu',
      },
      {
        question: 'Combien de jours y a-t-il dans une semaine?',
        options: ['5', '6', '7'],
        answer: '7',
      },
    ],
    arabic: [
      {
        question: 'ما هي عاصمة مصر؟',
        options: ['القاهرة', 'الإسكندرية', 'الجيزة'],
        answer: 'القاهرة',
      },
      {
        question: 'ما هو جمع كلمة "كتاب"؟',
        options: ['كتب', 'كتابة', 'كتابين'],
        answer: 'كتب',
      },
      {
        question: 'ما هو مرادف كلمة "سعيد"؟',
        options: ['حزين', 'مسرور', 'غاضب'],
        answer: 'مسرور',
      },
      {
        question: 'ما لون السماء؟',
        options: ['أزرق', 'أخضر', 'أحمر'],
        answer: 'أزرق',
      },
      {
        question: 'كم عدد أيام الأسبوع؟',
        options: ['5', '6', '7'],
        answer: '7',
      },
    ],
    german: [
      {
        question: 'Was ist die Hauptstadt von Deutschland?',
        options: ['Berlin', 'München', 'Hamburg'],
        answer: 'Berlin',
      },
      {
        question: 'Wie sagt man "cat" auf Deutsch?',
        options: ['Hund', 'Katze', 'Maus'],
        answer: 'Katze',
      },
      {
        question: 'Was ist das Synonym für "glücklich"?',
        options: ['traurig', 'fröhlich', 'wütend'],
        answer: 'fröhlich',
      },
      {
        question: 'Welche Farbe hat der Himmel?',
        options: ['blau', 'grün', 'rot'],
        answer: 'blau',
      },
      {
        question: 'Wie viele Tage hat die Woche?',
        options: ['5', '6', '7'],
        answer: '7',
      },
    ],
  };

  constructor() {}

  // Get quiz questions based on selected language
  getQuizQuestions(language: string) {
    return this.quizzes[language.toLowerCase()] || [];
  }
}
