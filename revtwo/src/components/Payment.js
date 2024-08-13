import React from 'react';
import { useForm } from 'react-hook-form';
import "./Card.css"
import { Link } from 'react-router-dom';

const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert('Payment Successful!');
  };

  return (
    <body className='paybody'>
    <div className="payment-form-container">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input id="cardNumber" {...register('cardNumber', { required: true })} />
          {errors.cardNumber && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="expiryDate">Expiry Date</label>
          <input id="expiryDate" type="month" {...register('expiryDate', { required: true })} />
          {errors.expiryDate && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" {...register('cvv', { required: true })} />
          {errors.cvv && <span>This field is required</span>}
        </div>

        <button type="submit">Pay Now</button>
      </form>
    </div>
    </body>
  );
};

export default PaymentForm;
