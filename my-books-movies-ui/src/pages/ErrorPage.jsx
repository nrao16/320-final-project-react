import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  let message;

  if (error?.status != 200) {
    message = <p>An unexpected error occurred.</p>;
  }

  return <div>
    Error {message} with status {error.status} </div>
}