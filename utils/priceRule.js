/// function คำนวนราคา

export const priceRule = (distance = 0, constPrice = 0, qty = 1, qtyRate) => {
  const distanceKM = distance / 1000;
  console.log("qtyRate", qtyRate);
  if (qtyRate?.length !== 0) {
    if (distanceKM !== 0) {
      //QTY RATE
      const qtyArr = qtyRate?.map((qtyArr) => qtyArr); // map array
      const qtySort = qtyArr?.sort((a, b) => b.qtyCheck - a.qtyCheck); //sort array
      const findQty = qtySort
        ?.map((qtyArrSort) => qtyArrSort)
        ?.find((q) => qty >= q.qtyCheck);

      // ADD ON RATE
      const addOnArr = findQty?.addOnRate.map((addOnArr) => addOnArr); // map array
      const addSort = addOnArr?.sort((a, b) => a.length - b.length); //sort array
      const findDistance = addSort
        ?.map((lengthArr) => lengthArr.length)
        ?.find((length) => length > distanceKM);
      const findAddOn = addSort
        ?.map((lengthArr) => lengthArr)
        ?.find((lengthArr) => lengthArr.length === findDistance);

      // console.log("findAddOn", findAddOn);
      // console.log("findDistance", findDistance);

      if (findDistance !== undefined) {
        return (constPrice + findAddOn?.addOn) * qty;
      }
      return "ขออภัยไม่อยู่ในพื้นที่จัดส่ง";
    }
    return "กรุณาเลือกพื้นที่จัดส่ง";
  }
  return constPrice * qty;
};
