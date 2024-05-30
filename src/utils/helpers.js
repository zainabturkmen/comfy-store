export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: 'USD',
    }).format()
    return 
}

export const getUniqueValues = () => {}
