import React, { useRef, useEffect, useState } from 'react';
import './Timeline.css';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateLine = () => {
      if (!containerRef.current) return;
      const markers = containerRef.current.querySelectorAll<HTMLElement>('.timeline-marker');
      if (markers.length < 2) return;

      const first = markers[0];
      const last = markers[markers.length - 1];
      const containerTop = containerRef.current.getBoundingClientRect().top;

      const firstCenter =
        first.getBoundingClientRect().top + first.offsetHeight / 2 - containerTop;
      const lastCenter =
        last.getBoundingClientRect().top + last.offsetHeight / 2 - containerTop;

      setLineStyle({
        top: `${firstCenter}px`,
        height: `${lastCenter - firstCenter}px`,
      });
    };

    updateLine();
    window.addEventListener('resize', updateLine);
    return () => window.removeEventListener('resize', updateLine);
  }, [events]);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="timeline-line" style={lineStyle} />
      <div className="timeline-events">
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-marker">
              <span className="timeline-year">{event.year}</span>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
