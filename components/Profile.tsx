import * as React from 'react';
import Icon from '@/components/Icon';

export default function Profile() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row mt-6">
        <div className="flex gap-3 pb-4">
          <img className="w-20 md:w-25" src="/undraw_male_avatar_g98d.svg"></img>
          <div>
            <h1 className="text-4xl">David Waite</h1>
            <h2 className="text-2xl">Software Engineer</h2>
          </div>
        </div>
        <div className="flex flex-grow md:justify-end md:w-fit pb-5">
          <Icon imageHref="github.svg" link="https://github.com/d-waite/" />
          <Icon imageHref="linkedin.svg" link="https://www.linkedin.com/in/dgwcsm/" />
          <Icon imageHref="file-text.svg" link="DGW_Resume Summer 2023.pdf" />
        </div>
      </div>
      <p className="text-lg">
        I am a Summa Cum Laude graduate from Colorado School of Mines, and I have a passion for creating high-quality, extendable software. I also have experience in data science and machine learning, including several different types of neural networks. Check out some of my projects!
      </p>
    </div>
  );
};