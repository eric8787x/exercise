interface AppHeaderProps {
  total: number;
  visible: number;
}

export function AppHeader({ total, visible }: AppHeaderProps) {
  return (
    <header className="app-header">
      <h1>动作库</h1>
      <div className="result-count">{visible} / {total}</div>
    </header>
  );
}
