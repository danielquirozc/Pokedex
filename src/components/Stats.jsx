import firstLetterUppercase from '../utils/firstLetterUppercase.js'

function Stats ({ stats }) {
  return (
    <div className="w-[250px] font-bahnschrift">
      {stats.map((stat) => (
        <div className="stat" key={stat.stat.name}>
          <div className="stat-name text-left text-blue-300">
            {firstLetterUppercase(stat.stat.name)}
          </div>
          <div
            className='bg-purple-500 text-center rounded max-w-full'
            style={{ width: `${stat.base_stat}%` }}
          >
            {stat.base_stat}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats
