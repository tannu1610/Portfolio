import React, { useEffect, useState } from 'react';

const DynamicName = () => {
  const names = ['Tannu Kumari', 'Tannu Singh', 'Tania'];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentName = names[index];
    let timeout;

    if (!deleting && displayedText.length < currentName.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentName.slice(0, displayedText.length + 1));
      }, 100);
    } else if (deleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentName.slice(0, displayedText.length - 1));
      }, 60);
    } else if (!deleting && displayedText.length === currentName.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && displayedText.length === 0) {
      setDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, deleting, index, names]);

  const getColorClasses = (i) => {
    switch (i % names.length) {
      case 0:
        return 'text-red-600 dark:text-yellow-400';
      case 1:
        return 'text-blue-600 dark:text-blue-300';
      case 2:
        return 'text-green-600 dark:text-green-300';
      default:
        return 'text-gray-600 dark:text-gray-300';
    }
  };

  const colorClass = getColorClasses(index);

  return (
    <span
      className={`
        ${colorClass}
        border-r-2 border-current
        animate-pulse font-extrabold tracking-wide
        transition-colors duration-300
      `}
      style={{
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
      }}
    >
      {displayedText}
    </span>
  );
};

export default DynamicName;
