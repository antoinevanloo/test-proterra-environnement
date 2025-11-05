interface StatsBlockProps {
  stats: Array<{
    value: string
    label: string
  }>
}

export function StatsBlock({ stats }: StatsBlockProps) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
    5: 'sm:grid-cols-2 lg:grid-cols-5',
    6: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }

  const colClass = gridCols[stats.length as keyof typeof gridCols] || gridCols[4]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid gap-8 ${colClass}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-extrabold text-proterra-navy-500 md:text-5xl">
                {stat.value}
              </div>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
