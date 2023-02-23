import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import type { Note } from '../../entities/note'

export const NoteCard = ({
	note,
	onDelete,
}: {
	note: Note
	onDelete: () => void
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true)

	return (
		<div className="card border border-gray-200 bg-base-100 pt-5 shadow-xl">
			<div className="card-body m-0 p-3">
				<div
					className={`collapse-arrow ${
						isExpanded ? 'collapse-open' : ''
					} collapse`}
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<div className="collapse-title text-xl font-bold">{note.title}</div>
					<div className="collapse-content">
						<article className="prose lg:prose-xl">
							<ReactMarkdown>{note.content}</ReactMarkdown>
						</article>
					</div>
				</div>
				<div className="card-actions flex justify-end px-2">
					<button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}
