import React, { useEffect, useState } from 'react';
import TransactionForm from './transactionForm.jsx';
import { newTransaction } from "../../../tools/mockData.js"
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/actions/categoryActions.jsx";
import { loadTransactionTypes } from "../../redux/actions/transactionTypeActions.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { loadTransactions, saveTransaction } from "../../redux/actions/transactionActions.jsx";


export default function ManageTransactionPage() {
    const categories = useSelector(state => state.categories);
    const transactionTypes = useSelector(state => state.transactionTypes);
    const transactions = useSelector(state => state.transactions);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState(newTransaction);
    const { slug } = useParams();

    useEffect(() => {
        if (transactions.length === 0) {
            dispatch(loadTransactions()).catch(error => {
                alert("loading transactionks failed" + error);
            });
        } else if (slug) {
            setTransaction(transactions.find(transaction => transaction.slug === slug) || newTransaction);
        }
    }, [transactions, slug]);


    useEffect(() => {
        if (categories.length === 0) {
            dispatch(loadCategories()).catch(error => {
                alert("loading categories failed" + error);
            });
        }
    }, [categories]);

    useEffect(() => {
        if (transactionTypes.length === 0) {
            dispatch(loadTransactionTypes()).catch(error => {
                alert("loading transactionTypes failed" + error);
            });
        }
    }, [transactionTypes]);

    function handleChange(event) {
        const { name, value } = event.target;
        setTransaction(prevTransaction => ({
            // const updatedTask = { ...prevTask };
            // if(name === "authorId"){
            //     updatedTask[name] = parseInt(value,10);

            // // }else if (name === "amount") {
            // // // Handle amount as a floating-point number with 2 decimal places
            // //     updatedTask[name] = value === "" ? "" : value
            // }else if (name === "date"){
            //     updatedTask[name] = value;
            // }else{
            //     updatedTask[name] = value;
            // }
            ...prevTransaction,
            [name]: name === "categoryId" || name === "transactionType"
            ? parseInt(value, 10)
            : name === "date"
            ? value
            : value
        }));
    }

    function handleSave(event){
        event.preventDefault();
        dispatch(saveTransaction(transaction)).then(()=>{
            navigate("/transactionpage");
        });
    
    }


    return (<TransactionForm
        categories={categories}
        transactionTypes = {transactionTypes}
        transaction={transaction}
        onChange={handleChange}
        onSave={handleSave}
    />
    );
}