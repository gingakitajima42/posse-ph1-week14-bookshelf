function BookCard({ title, author, rating, comment }) {
  return (
    <article className="group rounded-lg bg-white p-5 shadow transition hover:-translate-y-1 hover:shadow-lg">
      <p className="mb-3 text-sm font-bold tracking-widest text-teal-600">BOOK PICK</p>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">著者：{author}</p>
      <p className="mt-4 text-lg text-yellow-500">{rating}</p>
      <p className="mt-3 border-t border-gray-100 pt-3 text-gray-600">{comment}</p>
    </article>
  )
}

export default BookCard
