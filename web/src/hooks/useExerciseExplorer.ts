import { useEffect, useMemo, useState } from 'react';
import type { ExerciseFilters, ExerciseViewModel } from '../types/exercise';
import { getExercisesWithGifs } from '../api/exerciseApi';

const DEFAULT_FILTERS: ExerciseFilters = {
  query: '',
  category: 'all',
  equipment: 'all',
  target: 'all',
};

export function useExerciseExplorer() {
  const [items, setItems] = useState<ExerciseViewModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ExerciseFilters>(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getExercisesWithGifs()
      .then((data) => {
        if (!mounted) return;
        setItems(data);
        setError(null);
      })
      .catch(() => {
        if (!mounted) return;
        setError('动作数据加载失败');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const filterOptions = useMemo(() => {
    const unique = (values: string[]) => Array.from(new Set(values)).sort();
    return {
      categories: unique(items.filter((item) => item.category !== 'cardio').map((item) => item.category)),
      equipments: unique(items.map((item) => item.equipment)),
      targets: unique(items.map((item) => item.target)),
    };
  }, [items]);

  const filteredItems = useMemo(() => {
    const terms = filters.query
      .trim()
      .toLowerCase()
      .split(/[\s,，、]+/)
      .filter(Boolean);

    return items.filter((item) => {
      const searchable = [
        item.name,
        item.displayName,
        item.displayCategory,
        item.displayEquipment,
        item.displayTarget,
        item.instructions.zh,
        item.category === 'cardio' ? '有氧' : '',
        item.category,
        item.equipment,
        item.target,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const queryMatched = terms.length === 0 || terms.every((term) => searchable.includes(term));

      return (
        queryMatched &&
        (filters.category === 'all' || item.category === filters.category) &&
        (filters.equipment === 'all' || item.equipment === filters.equipment) &&
        (filters.target === 'all' || item.target === filters.target)
      );
    });
  }, [filters, items]);

  const pagedItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredItems.slice(start, start + pageSize);
  }, [filteredItems, page, pageSize]);

  const updateFilters = (patch: Partial<ExerciseFilters>) => {
    setFilters((current) => ({ ...current, ...patch }));
    setPage(1);
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setPage(1);
  };

  return {
    items,
    filteredItems,
    pagedItems,
    filterOptions,
    filters,
    loading,
    error,
    page,
    pageSize,
    setPage,
    setPageSize,
    updateFilters,
    resetFilters,
  };
}
