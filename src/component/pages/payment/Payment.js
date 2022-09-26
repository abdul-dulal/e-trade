import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../shered/Loading";
const stripePromise = loadStripe(
  "pk_test_51L1b9uAW02sEs2eFqZYg1H3qKbEJVkPQC0P1uTbrFO3D8dUwxPCrAiVYHOZdBT26OMNq3envTLGVRCyx5qA75Br200PIJSjcIR"
);
const Payment = () => {
  const location = useLocation();

  const { id } = useParams();
  const {
    isLoading,
    error,
    data: payment,
  } = useQuery(["repoData", id], () =>
    fetch(`https://tools-shop.onrender.com/order/order_byId/${id}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(payment);

  return (
    <div>
      <div class="card max-w-lg bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{payment?.prodcutNmae}</h2>
          <p>Qauntity : {payment?.quantity}</p>
          <p> Total Price : $ {payment?.price}</p>
        </div>
        <div class="my-3  px-8">
          <Elements stripe={stripePromise}>
            <CheckoutForm payment={payment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
<h1>hello</h1>;
