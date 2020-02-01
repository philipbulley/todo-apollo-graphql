/**
 * Manually created type for Item
 */
export type Item = {
  id: number;
  list_id: number;
  name: string;
  done: boolean;
  created_at: string;
  updated_at: string;
};

export type Items = Item[];
