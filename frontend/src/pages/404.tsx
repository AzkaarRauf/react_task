import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="bg-base-100 flex content-center">
      <div className="card">
        <div className="card-body">
          404 Not Found
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
