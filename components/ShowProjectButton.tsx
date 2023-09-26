import React, { useState } from 'react';
import { gsap } from 'gsap';

type Props = {
  children: React.ReactNode;
  imageHref: string;
  name: string;
}

const ShowProjectButton = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  React.useEffect(() => {
    if (!contentRef.current) return;

    const el = contentRef.current;
    const height = el.getBoundingClientRect().height;

    if (isVisible) {
      gsap.fromTo(el, {
        opacity: 0,
        height: 0,
        display: 'block'
      }, {
        opacity: 1,
        height: 'auto'
      });
    } else {
      gsap.fromTo(el, {
        height,
        opacity: 1,
      }, {
        opacity: 0,
        height: 0,
        display: 'none'
      });
    }
  }, [isVisible])

  return (
    <li className="flex w-100 flex-col gap-2">
      <div className="flex w-full rounded-md bg-slate-800 p-3">
        <h2 className="text-lg flex-grow">{props.name}</h2>
        <button className="flex items-center" onClick={toggleVisibility}>{isVisible ? 'Hide' : 'See More'}
          {isVisible ? <img src="corner-right-up.svg" className="ml-2" /> : <img src="corner-right-down.svg" className="ml-2" />}</button>
      </div>
      <div ref={contentRef} className="hidden">
        <img className="pb-3" src={props.imageHref}></img>
        {props.children}
      </div>
    </li >
  );
};

export default ShowProjectButton;