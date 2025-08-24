import axios from 'axios';
import type { CreateNote, Note } from '@/types/note';

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
const baseUrl = 'https://notehub-public.goit.study/api/notes';

export interface FetchNotesRes {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  search: string,
  page: number,
  tag?: string,
): Promise<FetchNotesRes> {
  const response = await axios.get<FetchNotesRes>(`${baseUrl}`, {
    params: {
      page: page,
      perPage: 12,
      ...(search && { search }),
      ...(tag ? { tag } : {}),
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });

  return response.data;
}

export async function createNote(newNote: CreateNote): Promise<Note> {
  const response = await axios.post<Note>(`${baseUrl}`, newNote, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await axios.delete<Note>(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await axios.get<Note>(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
}

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const getCategories = async () => {
  const res = await axios<Category[]>('/categories');
  return res.data;
};
