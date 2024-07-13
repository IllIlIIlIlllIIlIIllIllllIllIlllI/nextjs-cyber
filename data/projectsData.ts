import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'work',
    title: 'Automated Test Strategies For Deep Neural Networks (DNN)',
    description:
      'Explored different testing methods for deep neural networks due to their increasing usage in the industry and the need for robust testing, especially in safety-critical systems.',
    imgSrc: '/static/images/ai.jpg',
    builtWith: ['High Performance Computers', 'Python', 'SciPy', 'Pandas', 'TensorFlow'],
  },
  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/blog-screenshot.png',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma'],
  },
];

export default projectsData;
