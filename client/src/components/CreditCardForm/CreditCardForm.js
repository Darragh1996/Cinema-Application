import React, { useState } from 'react';
import styles from './CreditCardForm.module.css';

const CreditCardForm = ({ handleSubmit, setDisplayCreditCardForm }) => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [csv, setCsv] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [fullName, setFullName] = useState('');

  const handleClose = () => {
    setDisplayCreditCardForm(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.closeButton} onClick={handleClose}>
        &times;
      </button>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="creditCardNumber">Credit Card Number:</label>
          <input
            type="text"
            id="creditCardNumber"
            placeholder="0000 0000 0000 0000"
            maxLength="16"
            pattern="\d{16}"
            required
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="csv">CSV:</label>
          <input
            type="text"
            id="csv"
            maxLength="3"
            placeholder="000"
            pattern="\d{3}"
            required
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            maxLength="5"
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            placeholder="MM/YY"
            required
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <button
          className={styles.submitButton}
          onClick={(event) => {
            handleSubmit(event)
            handleClose()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;