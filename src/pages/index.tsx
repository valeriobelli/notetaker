import { constVoid } from 'fp-ts/function'
import Head from 'next/head'
import type { Topic } from '../entities/topic'
import { Header } from '../ui/components/Header'
import { NoteCard } from '../ui/components/NoteCard'
import { NoteEditor } from '../ui/components/NoteEditor'

const Topics = () => {
	const topics: Topic[] = []

	if (!topics.length) {
		return <div>No topics available</div>
	}

	return (
		<>
			{topics.map((topic) => (
				<li key={topic.id}>
					<a href="#" onClick={constVoid}>
						{topic.title}
					</a>
				</li>
			))}
		</>
	)
}

const Notes = () => {
	const topic = undefined as Topic | undefined

	if (!topic?.notes.length) {
		return (
			<div className="flex flex-1 flex-row content-center">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					alt="confused john travolta"
					src="./4ea.gif"
					style={{ width: '100%' }}
				/>
			</div>
		)
	}

	return (
		<div className="flex flex-1 flex-col">
			<div className="flex flex-col">
				{topic.notes.map((note, index) => (
					<div key={note.id} className={!index ? '' : 'pt-4'}>
						<NoteCard note={note} onDelete={constVoid} />
					</div>
				))}
			</div>

			<NoteEditor onSave={constVoid} />
		</div>
	)
}

const Home = () => {
	return (
		<>
			<Head>
				<title>Notetaker</title>
			</Head>

			<Header />

			<div className="flex px-4 pt-5">
				<div className="flex flex-col px-2">
					<ul className="menu rounded-box w-56 bg-base-100 p-2">
						<Topics />
					</ul>

					<div className="divider" />

					<input
						type="text"
						placeholder="New Topic"
						className="input-bordered input input-sm w-full"
						onKeyDown={constVoid}
					/>
				</div>

				<div className="flex flex-1 px-4">
					<Notes />
				</div>
			</div>
		</>
	)
}

export default Home
