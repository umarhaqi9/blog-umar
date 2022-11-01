import { Link } from "@remix-run/react";

export default function AdminIndex() {
  return (
    <p>
      <Link to="new" className="text-blue-600 hover:underline hover:font-medium">
        Create a New Post
      </Link>
    </p>
  );
}