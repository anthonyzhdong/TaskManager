import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/transactions/";

export function getTransactions() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveTransaction(transaction) {
  return fetch(baseUrl + (transaction.id || ""), {
    method: transaction.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(transaction)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTransaction(transactionId) {
  return fetch(baseUrl + transactionId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
