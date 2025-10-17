import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema as any),
  });

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="cardHolder">
          Name on card
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="1234567812345678"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="expirationDate">
          Expiration Date
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="expirationDate"
          placeholder="01/28"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-sm text-red-500">{errors.expirationDate.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="cvv">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-sm text-red-500">{errors.cvv.message}</p>
        )}
      </div>
      
      <div className="flex items-center gap-2 mt-4">
        <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
        <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
        <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
      </div>
      
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Checkout
        <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
