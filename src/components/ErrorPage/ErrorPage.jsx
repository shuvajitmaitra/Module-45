import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Here... Something is wrong</h1>

      {error.status === 404 && (
        <div>
          <h2>Data not found</h2>
        </div>
      )}
      <h2>{error.message || error.statusText}</h2>
      <Link to="/posts">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
