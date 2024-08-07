import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';

import ProjectCard from '@/components/ProjectCard';
import { PageSEO } from '@/components/SEO';

export default function Projects() {
  const { title, headerTitle } = siteMetadata;

  const description = 'My open source projects as I am not allowed to share most of my professional work projects';

  const workProjects = projectsData.filter(({ type }) => type === 'work');
  const sideProjects = projectsData.filter(({ type }) => type === 'self');

  return (
    <>
      <PageSEO title={`Projects - ${headerTitle} - ${title}`} description={description} />

      <div className="dark:divide-gray divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="mt-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
        </div>

        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Work
          </h3>
          <div className="-m-4 flex flex-wrap">
            {workProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Side projects
          </h3>
          <div className="-m-4 flex flex-wrap">
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
