import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { InputGroup, FormControl } from "react-bootstrap";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

export const Transaction = ({ transaction }) => {
  const { updateTransaction, deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <FormControl value={transaction.text} />
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>{sign}$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl value={Math.abs(transaction.amount)} />
      </InputGroup>
      {/* <span>
        {sign}${Math.abs(transaction.amount)}
      </span> */}
      <button
        className="transaction-btn delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        <FaTrashAlt />
      </button>
      <button
        className="transaction-btn edit-btn"
        onClick={() => updateTransaction(transaction.id, "updatedText", 1111)}
      >
        <FaEdit />
      </button>
    </li>
  );
};
