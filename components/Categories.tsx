import { Movie } from "@/tsdefination"

interface Props {
  title: string
  movies: Movie[]
}

const Categories = ({title, movies}:Props) => {
  return (
    <div>Categories</div>
  )
}

export default Categories