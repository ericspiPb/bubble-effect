import React, { useEffect } from 'react';

import './bubble.css';

export default function BubbleEffect() {
  useEffect(() => {
    const createBubble = () => {
      const effect = document.getElementsByClassName('bubble-effect')[0];
      const bubble = document.createElement('span');
      const size = Math.random() * 60;
  
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      bubble.style.left = Math.random() * window.innerWidth + 'px';
      effect.appendChild(bubble);
  
      setTimeout(() => {
        bubble.remove();
      }, 4000);
    }

    setInterval(createBubble, 100);
  }, []);

  return (
    <div className="bubble-effect">
    </div>
  )
}
