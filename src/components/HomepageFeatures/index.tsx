import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Track what's relevant",
    Svg: require('@site/static/img/track.svg').default,
    description: (
      <>
        Don't waste time on vanity metrics. Torq helps you track the data you 
        need to categorize and identify channels that are worth keeping.
      </>
    ),
  },
  {
    title: 'Stop guessing',
    Svg: require('@site/static/img/see.svg').default,
    description: (
      <>
        Torq finds the relevant information and visualize it for you in an 
        interface optimized for routing nodes.
      </>
    ),
  },
  {
    title: 'Stay in control',
    Svg: require('@site/static/img/automate.svg').default,
    description: (
      <>
        Torq will give you a set of tools to control and automate your operation. 
        Help you stay in control and be alerted to potential issues. (coming soon)
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
