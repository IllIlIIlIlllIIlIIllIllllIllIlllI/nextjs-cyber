import Link from '@/components/Link';
import Twemoji from '@/components/Twemoji';
import Image from 'next/image';

const BlogLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <Link href="/blog" className="hover:underline">
          <Twemoji emoji="man-technologist" />
          <span data-umami-event="home-link-blog" className="ml-1.5">
            My writings
          </span>
        </Link>
        <Link href="/projects" className="hover:underline">
          <Twemoji emoji="hourglass-not-done" />
          <span data-umami-event="home-link-projects" className="ml-1.5">
            What have I built?
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Link href="/about" className="hover:underline">
          <Twemoji emoji="european-union-flag" />
          <span data-umami-event="home-link-about" className="ml-1.5">
            More about me and the blog
          </span>
        </Link>
        <Link href="/resume" className="hover:underline">
          <Twemoji emoji="briefcase" />
          <span data-umami-event="home-link-resume" className="ml-1.5">
            My career
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogLinks;
