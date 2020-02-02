import knex from '../db';

export type WhereIn<T> = {
  [P in keyof T]?: T[P][] | ReadonlyArray<T[P]>;
};

export type FindOptions<T> = {
  where?: Partial<T>;
  whereIn?: WhereIn<T>;
};

export async function findMany<T extends any[]>(
  table: string,
  options?: FindOptions<T[0]>
): Promise<T> {
  const query = knex(table).select('*');

  if (options) {
    applyOptions(query, options);
  }

  return query;
}

export async function findOne<T>(
  table: string,
  options: FindOptions<T>
): Promise<T | null> {
  const query = knex(table)
    .select('*')
    .limit(1);

  applyOptions(query, options);

  return query.then((rows: T[]) => (rows.length ? rows[0] : null));
}

function applyOptions<T>(
  query: ReturnType<typeof knex.select>,
  { where, whereIn }: FindOptions<T>
) {
  if (whereIn) {
    Object.entries(whereIn).forEach(([key, value]) =>
      query.whereIn(key, value)
    );
  }

  if (where) {
    Object.entries(where).forEach(([key, value]) => query.where(key, value));
  }
}
