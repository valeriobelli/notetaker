import type { Note } from '../note'

export type Topic = {
	id: number
	title: string
	notes: Note[]
}
