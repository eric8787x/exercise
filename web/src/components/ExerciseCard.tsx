import { useEffect, useState } from 'react';
import { Skeleton, Tag } from 'antd';
import type { ExerciseViewModel } from '../types/exercise';

interface ExerciseCardProps {
  exercise: ExerciseViewModel;
  onOpen: (exercise: ExerciseViewModel) => void;
}

export function ExerciseCard({ exercise, onOpen }: ExerciseCardProps) {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error' | 'missing'>(
    exercise.gifUrl ? 'loading' : 'missing',
  );

  useEffect(() => {
    setImageState(exercise.gifUrl ? 'loading' : 'missing');
  }, [exercise.gifUrl, exercise.id]);

  const showPlaceholder = imageState !== 'loaded';

  return (
    <button className="exercise-card" type="button" onClick={() => onOpen(exercise)}>
      <div className="gif-frame">
        {showPlaceholder && (
          <div className="gif-placeholder">
            <Skeleton.Image active />
          </div>
        )}
        {exercise.gifUrl && (
          <img
            className={imageState === 'loaded' ? 'is-loaded' : ''}
            src={exercise.gifUrl}
            alt={exercise.displayName}
            loading="lazy"
            onLoad={() => setImageState('loaded')}
            onError={() => setImageState('error')}
          />
        )}
      </div>
      <div className="card-copy">
        <strong>{exercise.displayName}</strong>
        <div className="tag-row">
          <Tag>{exercise.displayTarget}</Tag>
          <Tag>{exercise.displayEquipment}</Tag>
        </div>
      </div>
    </button>
  );
}
