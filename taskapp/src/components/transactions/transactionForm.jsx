import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput.js";
import SelectInput from "../SelectInput.js";
const TransactionForm = ({
  transaction,
  categories,
  transactionTypes,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{transaction.id ? "Edit" : "Add"} transaction</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={transaction.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="transactionType"
        label="Transaction Type"
        value={transaction.transactionType || ""}
        defaultOption="Select Transaction Type"
        options={transactionTypes.map(transactionType => ({
          value: transactionType.id,
          text: transactionType.name
        }))}
        onChange={onChange}
        error={errors.transactionType}
      />

      <TextInput 
        name = "amount"
        label = "Amount"
        value = {transaction.amount}
        onChange = {onChange}
        error = {errors.amount}
      />

      {/* <div className="mb-3">
        <label htmlFor="amount">Amount ($)</label>
        <div className="field">
          <input
            type="number"
            name="amount"
            className="form-control"
            value={transaction.amount || ''}
            onChange={onChange}
            step="0.01"
            min="0"
            placeholder="0.00"
          />
          {errors.amount && <div className="alert alert-danger">{errors.amount}</div>}
        </div>
      </div> */}


      <SelectInput
        name="categoryId"
        label="Categories"
        value={transaction.categoryId || ""}
        defaultOption="Select Category"
        options={categories.map(category => ({
          value: category.id,
          text: category.name
        }))}
        onChange={onChange}
        error={errors.category}
      />

      <TextInput
        name="description"
        label="Description"
        value={transaction.description}
        onChange={onChange}
        error={errors.description}
      />

      <div className="mb-3">
        <label htmlFor="date">Date</label>
        <div className="field">
          <input
            type="date"
            name="date"
            className="form-control"
            value={transaction.date ? new Date(transaction.date).toISOString().split('T')[0] : ''}
            onChange={onChange}
          />
          {errors.date && <div className="alert alert-danger">{errors.date}</div>}
        </div>
      </div>

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};
TransactionForm.propTypes = {
  categories: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  transaction: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default TransactionForm;
