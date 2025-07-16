"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Completely disable SSR for this component
const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);
  const [LottieComponent, setLottieComponent] = useState(null);

  useEffect(() => {
    // Only run on client side
    setIsClient(true);
    
    // Dynamically import lottie-react only after component mounts
    const loadLottie = async () => {
      try {
        const { default: Lottie } = await import('lottie-react');
        setLottieComponent(() => Lottie);
      } catch (error) {
        console.warn('Failed to load Lottie:', error);
      }
    };

    loadLottie();
  }, []);

  // Don't render anything during SSR
  if (!isClient || !LottieComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return <LottieComponent {...defaultOptions} />;
};

export default AnimationLottie;