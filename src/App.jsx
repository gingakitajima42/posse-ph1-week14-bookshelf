import BookCard from './components/BookCard'

const books = [
  {
    id: 1,
    title: '嫌われる勇気',
    author: '岸見 一郎・古賀 史健',
    rating: '★★★★★',
    comment: '自分の考え方を見つめ直すきっかけになった一冊。',
  },
  {
    id: 2,
    title: 'コンビニ人間',
    author: '村田 沙耶香',
    rating: '★★★★☆',
    comment: '当たり前とは何かを考えながら一気に読める。',
  },
  {
    id: 3,
    title: '星の王子さま',
    author: 'サン＝テグジュペリ',
    rating: '★★★★★',
    comment: '読む年齢によって違う気づきがある大切な本。',
  },
  {
    id: 4,
    title: 'チーズはどこへ消えた？',
    author: 'スペンサー・ジョンソン',
    rating: '★★★★☆',
    comment: '変化を怖がらずに一歩進む勇気をもらえる。',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-teal-50 px-4 py-10 text-gray-900 sm:px-6">
      <header className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-widest text-teal-700">MY READING LIST</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">わたしの本棚</h1>
        <p className="mt-3 max-w-2xl text-gray-600">読んでよかった本を、次に読みたい人へ。</p>
      </header>

      <main className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            comment={book.comment}
          />
        ))}
      </main>
    </div>
  )
}

export default App
