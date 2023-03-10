let a32: null | number | string | boolean = null;
a32 = 10;

a32 = "mitesh";
a32 = false;

const customerDetails: "ordered" | "shipped" | "cancelled" = "cancelled"


const customCustomerDetails: "ordered" | "shipped" | "cancelled" | number = 25;


type order = "ordered" | "shipped" | "delivered";

const newOrder: order = "shipped";



type details = string | number;


const newDetails: details = 20;

//falsy statement const newDetails:details=false;