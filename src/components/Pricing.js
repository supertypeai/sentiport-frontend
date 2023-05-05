import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { UserContext } from "@/contexts/UserContext";

const Pricing = () => {
  const { u, token } = useContext(UserContext);
  const [user] = u;
  const [loading, setLoading] = useState(false);

  const processPayment = () => {
    return fetch(`https://sentiport.de.r.appspot.com/api/stripe-config/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => result.json())
      .then(async (data) => {
        // Initialize Stripe.js
        const stripe = await loadStripe(data.publishable_key);
        fetch(
          `https://sentiport.de.r.appspot.com/api/create-checkout-session/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((result) => {
            return result.json();
          })
          .then((data) => {
            // Redirect to Stripe Checkout
            return stripe.redirectToCheckout({ sessionId: data.sessionId });
          });
      });
  };

  const FreeCard = () => {
    return (
      <div className="card w-5/6 xs:w-3/4 border-2 border-blue-500 place-self-center sm:place-self-end">
        <div className="card-body">
          <h2 className="card-title">🎉 Free</h2>
          <span className="text-sm text-slate-400">Perfect to get started</span>
          <p className="text-center text-6xl xs:text-7xl mt-8 font-bold">
            $0
            <span className="text-lg font-normal"> for 5 Credits</span>
          </p>
          <p className="text-sm text-slate-400 text-center mb-8">
            No credit card required
          </p>
          <div className="card-actions justify-center">
            <label
              htmlFor="auth"
              className="btn w-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300"
              disabled={user ? true : false}
            >
              {user ? "You have redeemed this plan" : "Sign up now!"}
            </label>
          </div>
        </div>
      </div>
    );
  };

  const PricingCard = () => {
    return (
      <div className="card glass w-5/6 xs:w-3/4 border-2 border-blue-500 place-self-center sm:place-self-start">
        <div className="card-body">
          <h2 className="card-title">🚀 Pay as You Go</h2>
          <span className="text-sm text-slate-400">Our most popular offer</span>
          <p className="text-center text-6xl xs:-7xl mt-8 font-bold">
            $10
            <span className="text-lg font-normal"> / 5 Credits</span>
          </p>
          <p className="text-sm text-slate-400 text-center mb-8">
            ~$2 per 1 credit
          </p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-blue-500 text-gray-200  border-blue-500 w-full"
              onClick={() => {
                processPayment();
                setLoading(true);
              }}
              disabled={!user || loading ? true : false}
            >
              {loading
                ? `Processing Your Request...`
                : user
                ? `Pay Now >`
                : "Log in to buy credits"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="my-12" id="pricing">
      <div className="mb-12 text-center font-bold">
        <h1 className="text-2xl sm:text-4xl">
          <span className="text-gradient">Pricing</span> Plans
        </h1>
        <p className="text-lg sm:text-xl mt-6 text-slate-400">
          1 CREDIT = 1 REPORT
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-12 mt-6">
        <FreeCard />
        <PricingCard />
      </div>
    </div>
  );
};
export default Pricing;
