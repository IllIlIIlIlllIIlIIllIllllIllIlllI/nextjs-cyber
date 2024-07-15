import React from 'react';
import Typed from 'typed.js';

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
        <li>I like developing side projects and blogging.</li>
        <li>Professionally I work a lot with Cloud (AWS).</li>
        <li>Currently focusing on Cyber Security and OSCP.</li>
        <li>I'm a huge fan of motorsports (Isle of Man TT)</li>
        <li>I love Japanese 🇯🇵 and American culture 🇺🇸🦅</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
