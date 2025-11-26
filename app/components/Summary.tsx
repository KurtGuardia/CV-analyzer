import ScoreBadge from './ScoreBadge'
import ScoreGauge from './ScoreGauge'

const Category = ({
  title,
  score,
}: {
  title: string
  score: number
}) => {
  const textColor =
    score > 70
      ? 'text-green-600'
      : score > 49
        ? 'text-yellow-600'
        : 'text-red-600'

  return (
    <div className='resume-summary'>
      <div className='category'>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <p className='text-2xl'>{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className='text-2xl'>
          <span className={textColor}>{score}</span>
        </p>
      </div>
    </div>
  )
}

export default function Summary({
  feedback,
}: {
  feedback: Feedback
}) {
  return (
    <div className='bg-white rounded-e-2xl shadow-md w-full'>
      <div className='flex flex-row times-center p-4 gap-8'>
        <ScoreGauge score={feedback.overallScore} />

        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold'>
            Your Resume Score
          </h2>
          <p className='text-sm text-fray-500'>
            Thus socre is calcuelated vased on the variables
            listed below
          </p>
        </div>
      </div>

      <Category
        title='Tone & style'
        score={feedback.toneAndStyle.score}
      />
      <Category
        title='Content'
        score={feedback.content.score}
      />
      <Category
        title='Structure'
        score={feedback.structure.score}
      />
      <Category
        title='Skills'
        score={feedback.skills.score}
      />
    </div>
  )
}
