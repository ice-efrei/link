import project_list from '@/data/links.json';

const projects = project_list.links;

const colors = [
    'bg-pink-600',
    'bg-purple-600',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-red-500',
    'bg-gray-500',
    ]

function chooseRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
} 

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SimpleCards() {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Existing links</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
            <a href={project.href}
              className={classNames(
                chooseRandomColor(),
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {project.initials}
            </a>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">{project.description} Members</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
