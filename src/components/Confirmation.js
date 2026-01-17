import { useLocation } from "react-router-dom";

export default function Confirmation() {
  // console.log(useLocation());
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>
      <p>You're now registered for Red30 Tech.</p>
      {state && (
        <>
          <p>
            {state.name}, you're now registered for Red30 Tech.
          </p>
          <p>
            We've sent an email to <strong>{state.email}</strong>
          </p>
        </>
        
      )}
    </div>
  );
}
