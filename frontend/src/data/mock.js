export const portfolioData = {
  personal: {
    name: 'Oreoluwa Ifedinma Chiazor',
    title: 'Flutter Developer',
    tagline: 'Building beautiful mobile experiences with Flutter & Dart',
    about: 'Junior Flutter developer passionate about creating smooth, performant mobile applications. Focused on clean code architecture and intuitive user interfaces.',
    email: 'chiazor.oreoluwa17@gmail.com',
    github: 'https://github.com/SupremeAlpha',
    linkedin: 'https://linkedin.com/in/your-profile',
    location: 'Nigeria'
  },

  skills: [
    { name: 'Flutter', level: 85, category: 'framework' },
    { name: 'Dart', level: 80, category: 'language' },
    { name: 'Firebase', level: 70, category: 'backend' },
    { name: 'REST APIs', level: 75, category: 'integration' },
    { name: 'Git', level: 80, category: 'tools' },
    { name: 'State Management', level: 70, category: 'architecture' },
    { name: 'React', level: 65, category: 'framework' },
    { name: 'JavaScript', level: 70, category: 'language' }
  ],

  projects: [
    {
      id: 1,
      title: 'WeatherNow',
      category: 'Mobile App',
      description: 'A beautiful weather forecasting app built with Flutter. Features real-time weather data, 7-day forecast, and location-based weather updates.',
      technologies: ['Flutter', 'Dart', 'OpenWeather API', 'Geolocator', 'Provider'],
      image: 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHx3ZWF0aGVyJTIwYXBwJTIwbW9iaWxlfGVufDB8fHx8MTc2MDU0NDg1MHww&ixlib=rb-4.1.0&q=85',
      featured: true,
      year: '2024'
    },
    {
      id: 2,
      title: 'TaskFlow',
      category: 'Productivity',
      description: 'A task management application with smart prioritization and deadline tracking. Helps users organize daily tasks efficiently.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'BLoC Pattern', 'Local Notifications'],
      image: 'https://images.unsplash.com/photo-1649433391841-02a04e22ad50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx0YXNrJTIwbWFuYWdlciUyMGFwcHxlbnwwfHx8fDE3NjA1NDQ4NTd8MA&ixlib=rb-4.1.0&q=85',
      featured: true,
      year: '2024'
    },
    {
      id: 3,
      title: 'ShopEase',
      category: 'E-commerce',
      description: 'Mobile shopping app with seamless checkout experience. Features product browsing, cart management, and secure payment integration.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API', 'GetX'],
      image: 'https://images.unsplash.com/photo-1758524944006-ba8116008496?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBzaG9wcGluZyUyMGFwcHxlbnwwfHx8fDE3NjA1NDQ4NjN8MA&ixlib=rb-4.1.0&q=85',
      featured: true,
      year: '2024'
    },
    {
      id: 4,
      title: 'FitTracker',
      category: 'Health & Fitness',
      description: 'Fitness tracking app with workout plans and progress monitoring. Includes exercise library and personalized workout suggestions.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Charts', 'Provider'],
      image: 'https://images.pexels.com/photos/7222952/pexels-photo-7222952.jpeg',
      featured: false,
      year: '2024'
    }
  ],

  experience: [
    {
      id: 1,
      role: 'Flutter Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Developing mobile applications for various clients, focusing on Flutter and cross-platform solutions.'
    },
    {
      id: 2,
      role: 'Frontend Developer Intern',
      company: 'Tech Startup',
      period: '2023 - 2023',
      description: 'Contributed to web application development using React and collaborated with design team on UI/UX improvements.'
    }
  ]
};
