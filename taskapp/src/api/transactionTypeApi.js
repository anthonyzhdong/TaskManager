import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/transactionTypes/";

export function getTransactionTypes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}