// Checkout Component
'use client';

// toastify
import Image from 'next/image';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

// Context
import CartContext from '@/context/CartContext';

// Form links
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { client } from '@/sanity/lib/client';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { BreadcrumbCollapsed } from '@/components/breadcumb';

// Form schema with validations
const formSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  shippingAddress: z.string().min(1, 'Shipping address is required'),
  phoneNumber: z
    .string()
    .regex(/^\d{10,}$/, 'Phone number must be at least 10 digits'),
});
type FormdType = z.infer<typeof formSchema>;

function Checkout() {
  const router = useRouter();
  const {
    cart: { cartItems },
    clearCart,
  } = useContext(CartContext);

  // toastify
  const notifySuccess = () =>
    toast.success('Order placed successfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });

  const notifyError = (error: string) =>
    toast.error(error, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });

  const total = cartItems.reduce((total: number, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // form setup
  const form = useForm<FormdType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      shippingAddress: '',
      phoneNumber: '',
    },
  });

  // Submit handler
  async function onSubmit(values: FormdType) {
    try {
      // Create Shipping Form in Sanity
      const shippingForm = await client.create({
        _type: 'contactForm',
        fullName: values.fullName,
        email: values.email,
        shippingAddress: values.shippingAddress,
        phoneNumber: values.phoneNumber,
      });

      const order = await client.create({
        _type: 'orders',
        shippingForm: { _ref: shippingForm._id },
        products: cartItems.map((product) => ({
          TrackingId: `${values.fullName}-${Math.random()}`,
          name: product.name,
          price: product.price,
          qty: product.quantity,
        })),
      });

      // Show success toast
      notifySuccess();
      clearCart();
      form.reset();
      router.push('/payment');
    } catch (error) {
      console.error('Error submitting form:', error);
      notifyError('Failed to place the order. Please try again.');
    }
  }

  return (
    <main className="mt-28 lg:mt-36">
      <BreadcrumbCollapsed />
      <div className="flex flex-col md:flex-row space-y-5 sm:space-y-0 p-5 justify-center items-start lg:space-x-6">
        {cartItems.length <= 0 && (
          <div className="w-full lg:w-[600px] flex justify-center items-center pt-2">
            {/* Empty state */}
          </div>
        )}
        {cartItems.length >= 1 && (
          <div className="w-full lg:w-[600px] space-y-4 border rounded-[20px] pt-2">
            <h1 className="text-2xl font-bold px-5">Order Summary</h1>
            {cartItems.map((data, index) => (
              <div
                className="flex justify-between items-start px-5"
                key={index}
              >
                <div className="flex items-start space-x-2">
                  <Image
                    src={data.image}
                    alt={data.name}
                    className="w-[80px]"
                    width={100}
                    height={100}
                  />
                  <h1 className="sm:font-bold text-sm md:text-xl mt-3">
                    {data.name}
                  </h1>
                </div>
                <p className="font-bold mt-3">${data.price}</p>
              </div>
            ))}
            <div className="flex w-full justify-between p-5">
              <h1 className="font-bold">Total</h1>
              <h1 className="font-bold">${total}</h1>
            </div>
          </div>
        )}

        <div className="rounded-[20px] border p-5 w-full lg:w-[50%]">
          <h1 className="text-2xl font-bold mb-4">Shipping Details</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shippingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shipping Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {cartItems.length >= 1 && (
                <Button className="w-full" type="submit">
                  Place Order
                </Button>
              )}

              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
