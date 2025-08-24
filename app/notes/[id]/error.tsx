'use client';

import type { Props } from '@/app/notes/error';

export default function Error({ error }: Props) {
  return <p>Could not fetch note details. {error.message}</p>;
}
