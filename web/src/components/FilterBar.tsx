import { Button, Input, Select } from 'antd';
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import type { ExerciseFilters } from '../types/exercise';
import { labelCategory, labelEquipment, labelTarget } from '../utils/format';

interface FilterBarProps {
  filters: ExerciseFilters;
  categories: string[];
  equipments: string[];
  targets: string[];
  onChange: (patch: Partial<ExerciseFilters>) => void;
  onReset: () => void;
}

export function FilterBar({ filters, categories, equipments, targets, onChange, onReset }: FilterBarProps) {
  const filterOption = (input: string, option?: { label?: string; value?: string }) => {
    const keyword = input.trim().toLowerCase();
    if (!keyword) return true;
    return `${option?.label ?? ''} ${option?.value ?? ''}`.toLowerCase().includes(keyword);
  };

  return (
    <section className="filter-bar">
      <label className="field field-search">
        <span>搜索动作</span>
        <Input
          allowClear
          prefix={<SearchOutlined />}
          value={filters.query}
          placeholder="例如 深蹲、引体向上、哑铃、有氧"
          onChange={(event) => onChange({ query: event.target.value })}
          onPressEnter={() => onChange({ query: filters.query.trim() })}
        />
      </label>
      <label className="field">
        <span>部位</span>
        <Select
          allowClear={filters.category !== 'all'}
          showSearch
          optionFilterProp="label"
          filterOption={filterOption}
          value={filters.category}
          onChange={(value) => onChange({ category: value ?? 'all' })}
          options={[
            { value: 'all', label: '全部部位' },
            ...categories.map((value) => ({ value, label: labelCategory(value) })),
          ]}
        />
      </label>
      <label className="field">
        <span>器械</span>
        <Select
          allowClear={filters.equipment !== 'all'}
          showSearch
          optionFilterProp="label"
          filterOption={filterOption}
          value={filters.equipment}
          onChange={(value) => onChange({ equipment: value ?? 'all' })}
          options={[
            { value: 'all', label: '全部器械' },
            ...equipments.map((value) => ({ value, label: labelEquipment(value) })),
          ]}
        />
      </label>
      <label className="field">
        <span>目标</span>
        <Select
          allowClear={filters.target !== 'all'}
          showSearch
          value={filters.target}
          optionFilterProp="label"
          filterOption={filterOption}
          onChange={(value) => onChange({ target: value ?? 'all' })}
          options={[
            { value: 'all', label: '全部目标' },
            ...targets.map((value) => ({ value, label: labelTarget(value) })),
          ]}
        />
      </label>
      <div className="filter-actions">
        <Button icon={<ReloadOutlined />} onClick={onReset}>
          重置
        </Button>
      </div>
    </section>
  );
}
