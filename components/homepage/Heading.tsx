import siteMetadata from '@/data/siteMetadata';

import { size } from 'lodash';

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      I'm Paul - a software engineer by trade
      <span className="absolute ml-1.5 inline-flex pt-[3px] emoji-size">
      🇪🇺
      </span>
    </h1>
  );
};

export default Heading;
