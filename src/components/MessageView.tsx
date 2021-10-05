interface Props {
  name?: string;
  opinion: string;
}

export function MessageView({ opinion, name }: Props): JSX.Element {
  // name ist entweder string oder undefined
  if (!name) {
    // name ist undefined oder leer
    return (
      <article>
        {opinion}
        <footer>Ein anonymer Mensch</footer>
      </article>
    );
  }

  // name ist definitiv ein string, weil es bei undefined vorher returned hätte

  return (
    <article>
      {opinion}
      <footer>{name.toUpperCase()}</footer>
    </article>
  );
}

export function MessageView2({ opinion, name }: Props): JSX.Element {
  return (
    <article>
      {opinion}
      {name && <footer>{name.toUpperCase()}</footer>}
    </article>
  );
}
