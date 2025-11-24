import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'

export default function ResumeCard({
  resume: {
    id,
    companyName,
    feedback,
    jobTitle,
    imagePath,
  },
}: {
  resume: Resume
}) {
  return (
    <Link
      to={`/resume/${id}`}
      className='resume-card animate-in duration-100'
    >
      <div className='resume-card-header'>
        <div className='flex flex-col-gap-2'>
          <h2 className='!text-black font-bold break-words'>
            {companyName}
          </h2>
          <h3 className='text-lg break-words text-greay-500'>
            {jobTitle}
          </h3>
        </div>

        <div className='flex-shrink-0'>
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>

      <div className='gradient-border animate-in fade-in duration-100'>
        <div className='w-full-h-full'>
          <img
            src={imagePath}
            alt={jobTitle}
            className='w-full h-[350px] max-sm:h-[200px] object-cover object-top'
          />
        </div>
      </div>
    </Link>
  )
}
