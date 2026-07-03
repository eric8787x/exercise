import { useState } from 'react';
import { Alert, Pagination } from 'antd';
import { AppHeader } from './components/AppHeader';
import { ExerciseDetailModal } from './components/ExerciseDetailModal';
import { ExerciseGrid } from './components/ExerciseGrid';
import { FilterBar } from './components/FilterBar';
import { useExerciseExplorer } from './hooks/useExerciseExplorer';
import type { ExerciseViewModel } from './types/exercise';

export default function App() {
  const explorer = useExerciseExplorer();
  const [activeExercise, setActiveExercise] = useState<ExerciseViewModel | null>(null);

  return (
    <main className="app-shell">
      <div className="bg-mesh" />
      <div className="page-panel">
        <AppHeader
          total={explorer.items.length}
          visible={explorer.filteredItems.length}
        />
        <FilterBar
          filters={explorer.filters}
          categories={explorer.filterOptions.categories}
          equipments={explorer.filterOptions.equipments}
          targets={explorer.filterOptions.targets}
          onChange={explorer.updateFilters}
          onReset={explorer.resetFilters}
        />
        {explorer.error && <Alert type="error" message={explorer.error} showIcon />}
        <ExerciseGrid items={explorer.pagedItems} loading={explorer.loading} onOpen={setActiveExercise} />
        <div className="pager-row">
          <Pagination
            current={explorer.page}
            pageSize={explorer.pageSize}
            total={explorer.filteredItems.length}
            showSizeChanger
            pageSizeOptions={[20, 30, 50]}
            onChange={(nextPage, nextPageSize) => {
              explorer.setPage(nextPage);
              explorer.setPageSize(nextPageSize);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      </div>
      <ExerciseDetailModal
        open={Boolean(activeExercise)}
        exercise={activeExercise}
        onClose={() => setActiveExercise(null)}
      />
    </main>
  );
}
