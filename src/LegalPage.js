import React, { useEffect } from 'react';
import { SiteHeader, SiteFooter } from './LearnMore';
import './LearnMore.css';

function Block({ item }) {
  if (Array.isArray(item)) {
    return (
      <ul>
        {item.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    );
  }
  return <p>{item}</p>;
}

function LegalPage({ doc }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${doc.title} · drip..`;
  }, [doc]);

  return (
    <div className="dl">
      <SiteHeader />
      <main className="wrap legal-doc">
        <h1>{doc.title}</h1>
        <p className="updated">Last updated: {doc.updated}</p>
        {doc.intro && doc.intro.map((item, i) => <Block key={i} item={item} />)}
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((item, i) => (
              <Block key={i} item={item} />
            ))}
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}

export default LegalPage;
