import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl my-3">Sorry not found this page</h2>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound