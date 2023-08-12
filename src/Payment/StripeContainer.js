import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Ne9qRSCI1QfUu15h9ZcNfoooAm7XwTzfSKg6tsoR1Xxg9SvhWITS4HNidhYE6zN7FmViKZm0kbL8F9LfnEXWLgF00k6oxnkEO"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm price={props.price} sucess={props.sucess}/>
		</Elements>
	)
}