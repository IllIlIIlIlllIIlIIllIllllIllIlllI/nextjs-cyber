import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div className="Oxanium">
      <ul id="bios" className="Oxanium hidden">
        <li>I like developing side projects and blogging about them.</li>
        <li>Professionally I heavily work with AWS and backend services.</li>
        <li>Currently focusing on Cyber Security and passing the OSCP.</li>
        <li>My passion is solving complex problems with simple solutions.</li>
        <li>I'm a huge fan of motorsports (Isle of Man TT) and Japanese culture</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
