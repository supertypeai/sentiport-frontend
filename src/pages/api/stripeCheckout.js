import { loadStripe } from "@stripe/stripe-js";

// const PATH = 'http://localhost:8000'
const token = "";
const PATH = "https://sentiport.de.r.appspot.com";
export default class APIService {
  static checkoutUser() {
    return fetch(`${PATH}/api/stripe-config/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => result.json())
      .then(async (data) => {
        // Initialize Stripe.js
        console.log(data);
        const stripe = await loadStripe(data.publishable_key);
        console.log(stripe);
        fetch(`${PATH}/api/create-checkout-session/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((result) => {
            return result.json();
          })
          .then((data) => {
            console.log(data);
            // Redirect to Stripe Checkout
            return stripe.redirectToCheckout({ sessionId: data.sessionId });
          })
          .then((res) => {
            console.log(res);
          });
      });
  }

  static registerUser(body) {
    return fetch(`${PATH} / api / users / `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.status !== 201) {
        throw response;
      }
      return response.json();
    });
  }

  static loginUser(body) {
    return fetch(`${PATH} / api / token / `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.status !== 200) {
        throw response;
      }
      return response.json();
    });
  }

  static RequestPasswordEmail(body) {
    return fetch(`${PATH} / api / request - reset - email / `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.status !== 200) {
        throw response;
      }
      return response.json();
    });
  }

  static ResetPassword(body) {
    return fetch(`${PATH} / api / password - reset - complete / `, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.status !== 200) {
        throw response;
      }
      return response.json();
    });
  }

  static ChangePassword(body, token) {
    return fetch(`${PATH} / api / change - password / `, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.status !== 200) {
        throw response;
      }
      return response.json();
    });
  }
}
