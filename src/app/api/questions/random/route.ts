import { publicQuestionCatalog } from '@/data/mcq/catalog.server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const exclude = searchParams.get('exclude');

  // Filter out the excluded question ID
  const availableQuestions = exclude
    ? publicQuestionCatalog.filter((q) => q.id !== exclude)
    : publicQuestionCatalog;

  if (availableQuestions.length === 0) {
    return Response.json(
      { error: 'No questions available' },
      { status: 404 }
    );
  }

  // Select a random question
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomQuestion = availableQuestions[randomIndex];

  return Response.json({
    id: randomQuestion.id,
    competition: randomQuestion.competition,
    year: randomQuestion.year,
    questionNumber: randomQuestion.questionNumber,
  });
}
