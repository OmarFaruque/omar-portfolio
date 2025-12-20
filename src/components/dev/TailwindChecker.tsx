'use client';

import { useEffect, useState } from 'react';

const classesToCheck = ['.text-white', '.text-gray-500', '.gap-2', '.px-8', '.mt-5'];

function unique<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

// Define a custom type for CSSRule to include the __origin property
interface CustomCSSRule extends CSSRule {
  selectorText?: string;
  cssRules?: CSSRuleList;
  __origin?: string;
}

export default function TailwindChecker() {
  const [report, setReport] = useState<Record<string, boolean>>({});
  const [samples, setSamples] = useState<Record<string, { selector: string; origin?: string }[]>>({});

  useEffect(() => {
    const sheets = Array.from(document.styleSheets) as CSSStyleSheet[];
    const uniqueClasses = unique(classesToCheck);
    const found: Record<string, boolean> = {};
    const example: Record<string, { selector: string; origin?: string }[]> = {}; // Explicitly type example

    uniqueClasses.forEach((cls) => {
      found[cls] = false;
      example[cls] = [];
    });

    function pushExample(cls: string, selector: string, origin?: string) {
      if (!selector) return;
      const list = example[cls] || [];
      // avoid identical selector+origin duplicates
      if (list.some((s) => s.selector === selector && s.origin === origin)) return;
      if (list.length >= 6) return;
      list.push({ selector, origin });
      example[cls] = list;
    }

    function walkRules(rules?: CSSRuleList) {
      if (!rules) return;
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i] as CustomCSSRule; // Use CustomCSSRule here
        // If this is a style rule with a selector
        if ('selectorText' in rule && rule.selectorText) {
          const selector = rule.selectorText.trim();
          if (!selector) continue;
          uniqueClasses.forEach((cls) => {
            if (selector.includes(cls)) {
              found[cls] = true;
              // try to capture stylesheet origin via ownerNode or sheet href passed in
              pushExample(cls, selector, rule.__origin); // Use __origin directly
            }
          });
        }
        // If rule contains nested rules (e.g., @media), recurse
        if ('cssRules' in rule && rule.cssRules) {
          walkRules(rule.cssRules);
        }
      }
    }

    sheets.forEach((sheet) => {
      let rules: CSSRuleList | undefined;
      let origin = '';
      try {
        rules = sheet.cssRules;
        // prefer href when available (external stylesheet), otherwise attempt to describe ownerNode
        origin = (sheet.href && sheet.href.length) ? sheet.href : (sheet.ownerNode ? String((sheet.ownerNode as Element).nodeName || (sheet.ownerNode as Element).id || '') : 'inline'); // Cast to Element
      } catch (_e) { // Changed 'e' to '_e'
        return; // cross-origin or inaccessible
      }
      // annotate each rule with origin so nested recursion can use it
      if (rules) {
        for (let i = 0; i < rules.length; i++) {
          try {
            (rules[i] as CustomCSSRule).__origin = origin; // Use CustomCSSRule here
          } catch (_er) { // Changed 'er' to '_er'
            // ignore
          }
        }
      }
      walkRules(rules);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    setReport(found);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setSamples(example);

    // also log a concise summary and samples with origin
    console.group('TailwindChecker');
    uniqueClasses.forEach((c) => console.log(`${c}: ${found[c] ? 'FOUND' : 'MISSING'}`));
    console.log('Samples (first few selectors for each pattern with origin):', example);
    console.groupEnd();
  }, []);

  return (
    <div style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 9999 }}>
      <div style={{ background: 'rgba(255,255,255,0.95)', color: '#0f1724', padding: '8px 12px', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontSize: 12 }}>
        <div style={{ fontWeight: 600, marginBottom: 6 }}>Tailwind Checker</div>
        {unique(classesToCheck).map((c) => (
          <div key={c} style={{ marginBottom: 6 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: report[c] ? '#16a34a' : '#ef4444' }} />
              <div style={{ fontWeight: 600 }}>{c}</div>
            </div>
            {samples[c] && samples[c].length > 0 && (
              <div style={{ marginTop: 6, fontSize: 11, color: '#475569' }}>
                {samples[c].slice(0, 4).map((s) => (
                  <div key={`${s.selector}-${s.origin || 'inline'}`} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 260 }}>
                    <span style={{ fontWeight: 600 }}>{s.selector}</span>
                    {s.origin ? <span style={{ marginLeft: 8, color: '#94a3b8', fontSize: 11 }}>({s.origin})</span> : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
