'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {

  const [productPrice, setProductPrice] = useState(0);
  const [profitAmount, setProfitAmount] = useState(0);
  const [profitPercentage, setProfitPercentage] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateProfitAmount = (percentage: number) => {
    return (productPrice * percentage) / 100;
  };

  const calculateProfitPercentage = (amount: number) => {
    return (amount / productPrice) * 100;
  };

  const calculateTotal = () => {
    const totalProfit = productPrice + profitAmount;
    const taxAmount = (taxPercentage / 100) * totalProfit;
    const totalAmount = totalProfit + taxAmount;
    setTotal(totalAmount);
  };

  useEffect(() => {
    calculateTotal();
  }, [productPrice, profitAmount, taxPercentage]);

  const handleProfitAmountChange = (e: any) => {
    const amount = parseFloat(e.target.value);
    setProfitAmount(amount);
    setProfitPercentage(calculateProfitPercentage(amount));
  };

  const handleProfitPercentageChange = (e: any) => {
    const percentage = parseFloat(e.target.value);
    setProfitPercentage(percentage);
    setProfitAmount(calculateProfitAmount(percentage));
  };

  const handleTaxChange = (e: any) => {
    const tax = parseFloat(e.target.value);
    setTaxPercentage(tax);
  };
  
  return (
    <main className='flex justify-center items-center w-full h-screen'>
      
      <div className='w-11/12 sm:w-8/12 md:w-7/12 lg:w-4/12 xl:w-3/12 mx-auto border rounded-lg p-10'>
        <h1 className='font-bold text-xl'>Tax Calculation</h1>
        <div className='flex flex-col gap-y-1 mt-5'>
          <label className='text-sm'>Product Price: </label>
        <input 
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(parseFloat(e.target.value))}
          className='text-sm focus:outline-second pl-4 pr-4 py-2 border-2 border-gray-200 rounded w-full'
        />
        </div>
      
      

      <div className='flex flex-col md:flex-row gap-x-5'>
        <div className='flex flex-col gap-y-1 mt-5'>
          <label className='text-sm'>Profit Amount: </label>
          <input 
            type="number" 
            value={profitAmount} 
            onChange={handleProfitAmountChange}
            className='text-sm focus:outline-second pl-4 pr-4 py-2 border-2 border-gray-200 rounded w-full'
          />
        </div>
        
        <div className='flex flex-col gap-y-1 mt-5'>
          <label className='text-sm'>Profit Percentage: </label>
          <input 
            type="number" 
            value={profitPercentage} 
            onChange={handleProfitPercentageChange}
            className='text-sm focus:outline-second pl-4 pr-4 py-2 border-2 border-gray-200 rounded w-full'
          />
        
        </div>
        
      </div>
      <div className='flex flex-col gap-y-1 mt-5'>
        <label className='text-sm'>Tax Percentage: </label>
        <input 
          type="number" 
          value={taxPercentage} 
          onChange={handleTaxChange}
          className='text-sm focus:outline-second pl-4 pr-4 py-2 border-2 border-gray-200 rounded w-full'
        />
      </div>
      
      
      <div className='flex flex-col gap-y-1 mt-5'>
        <label className='text-sm'>Total (with Tax if provided): </label>
        <input 
          type="number" 
          value={total} 
          readOnly
          className='text-sm focus:outline-second pl-4 pr-4 py-2 border-2 border-gray-200 rounded w-full'
        />
      </div>
      
      
    </div>
    </main>
  )
}
