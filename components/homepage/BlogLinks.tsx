import Link from '@/components/Link';

const BlogLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <Link href="/blog" className="hover:underline">
          <span className="ml-1.5">✒️ My writings</span>
        </Link>
        <Link href="/projects" className="hover:underline">
          <span className="ml-1.5">🛠️ What have I built?</span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Link href="/about" className="hover:underline">
          <span className="ml-1.5">🇪🇺 More about me and the blog</span>
        </Link>
        <Link href="/resume" className="hover:underline">
          <span className="ml-1.5">💼 My career</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogLinks;
