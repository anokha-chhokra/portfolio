import { useEffect, useRef } from 'react';

export default function Reveal({ as: Tag = 'div', className = '', id, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add('show');
        });
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const combinedClassName = className ? `reveal ${className}` : 'reveal';

  return (
    <Tag ref={ref} id={id} className={combinedClassName} {...rest}>
      {children}
    </Tag>
  );
}