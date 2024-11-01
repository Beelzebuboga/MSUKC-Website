const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ];
  
  const stats = [
    { name: 'For over five decades, we have been dedicated to the art of karate, preserving its traditions and promoting its values.', value: '52' },
    { name: 'We are a close-knit community of 45 dedicated and passionate members', value: '45+' },
    { name: 'With a commitment to sharing the art of karate, we have had the privilege of instructing over 2800 students throughout our history', value: '3000' },
    { name: 'Over the years, our club actively participates in tournaments, giving opportunity for more than 12 international competitions, showcasing our skills on the global image', value: '12' },
  ];
  
  export default function Example() {
    return (
      <div className="relative isolate overflow-hidden bg-headings py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl tracking-tight font-fantasy-bold text-white lg:text-5xl">BE ONE WITH US</h2>
            <p className="mt-8 text-pretty lg:text-xl text-base font-montserrat font-medium text-gray-300 sm:text-xl/8">
              The Mindanao State University Karate Club (MSUKC) has been a pillar of strength, discipline, and personal growth since 1972. Committed to nurturing the youth, MSUKC develops members physically, mentally, and morally, empowering them to face challenges with resilience and integrity. Through karate, we inspire personal excellence and uphold a tradition of honor and dedication that shapes future leaders.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-2 gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col items-center text-center">
                  <dd className="md:text-5xl text-4xl font-fantasy-bold tracking-tight text-white">{stat.value}</dd>
                  <dt className="mt-2 text-sm font-mono text-gray-300">{stat.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }