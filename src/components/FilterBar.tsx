// One dropdown filter. "options" is the list of choices, and an empty
// string ("") always means "All" / no filter applied.
function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm font-bold text-[var(--color-navy)]">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border-4 border-black bg-white px-3 py-2 font-medium text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export type TrainingFilters = {
  competition: string;
  topic: string;
  difficulty: string;
  type: string;
};

// Renders all four dropdown filters in a row. The parent owns the filter
// state and passes down the current values plus the available options.
export default function FilterBar({
  filters,
  options,
  onChange,
}: {
  filters: TrainingFilters;
  options: {
    competitions: string[];
    topics: string[];
    difficulties: string[];
    types: string[];
  };
  onChange: (filters: TrainingFilters) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <FilterSelect
        label="Competition"
        value={filters.competition}
        options={options.competitions}
        onChange={(value) => onChange({ ...filters, competition: value })}
      />
      <FilterSelect
        label="Topic"
        value={filters.topic}
        options={options.topics}
        onChange={(value) => onChange({ ...filters, topic: value })}
      />
      <FilterSelect
        label="Difficulty"
        value={filters.difficulty}
        options={options.difficulties}
        onChange={(value) => onChange({ ...filters, difficulty: value })}
      />
      <FilterSelect
        label="Question Type"
        value={filters.type}
        options={options.types}
        onChange={(value) => onChange({ ...filters, type: value })}
      />
    </div>
  );
}
