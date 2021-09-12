import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Loading.scss';
import { loadingSelector } from 'features/layout/layoutSlice';

export default function Loading() {
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }
  }, [isLoading]);
  return (
    <div className="loading-container">
      <div className="spin"></div>
      <span>Loading</span>
    </div>
  );
}
