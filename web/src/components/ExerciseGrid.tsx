import { Empty, Skeleton } from 'antd';
import type { ExerciseViewModel } from '../types/exercise';
import { ExerciseCard } from './ExerciseCard';

interface ExerciseGridProps {
  items: ExerciseViewModel[];
  loading: boolean;
  onOpen: (exercise: ExerciseViewModel) => void;
}

export function ExerciseGrid({ items, loading, onOpen }: ExerciseGridProps) {
  if (loading) {
    return (
      <div className="exercise-grid">
        {Array.from({ length: 20 }).map((_, index) => (
          <div className="skeleton-card" key={index}>
            <Skeleton.Image active />
            <div className="skeleton-copy">
              <span className="skeleton-title-line" />
              <span className="skeleton-tag-line" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return <Empty className="empty-state" description="没有匹配动作" />;
  }

  return (
    <div className="exercise-grid">
      {items.map((item) => (
        <ExerciseCard key={item.id} exercise={item} onOpen={onOpen} />
      ))}
    </div>
  );
}
