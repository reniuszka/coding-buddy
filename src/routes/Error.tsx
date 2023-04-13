import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function MyErrorElement() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Navigation />
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {error.status} {error.statusText}
        </p>
      </>
    );
  }

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>"Unknown Error"</p>
    </>
  );
}
