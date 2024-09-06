import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Landing.module.css';

import samuraiInvite from '../public/samuraiInvite.jpeg'
import spiritInvite from '../public/spiritInvite.jpeg'
import { StyleRegistry } from 'styled-jsx';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className='hover:rotate-6'>
          <Link href="/samurai">
            <Image className='transition ease-in-out hover:rotate-3 duration-400' src={samuraiInvite} alt="samuraiInvite" style={{
                height: 'auto',
                width: '40vw',
              }}  />
          </Link>
        </div>
        <Link href="/spirit">
          <Image className='transition ease-in-out hover:rotate-3 duration-400' src={spiritInvite} alt="samuraiInvite" style={{
            height: 'auto',
            width: '40vw'
          }}  />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;