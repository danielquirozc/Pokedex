import firstLetterUppercase from '../utils/firstLetterUppercase'

const colors = {
  grass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  poison: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  fire: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  water: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  normal: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  electric: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  ground: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  flying: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  fairy: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  fighting: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  bug: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
}

function BadgeTypes ({ type, fontSize = '16px' }) {
  return (
    <span style={{ fontSize }} className={`${colors[type]} font-bahnschrift font-semibold me-2 px-2.5 py-0.5 rounded`}>
      {firstLetterUppercase(type)}
    </span>
  )
}

export default BadgeTypes
