// setTimeout(() => console.log("1"), 0);
// Promise.resolve().then(() => console.log("2"));
// console.log("3");

// import { ChildProcess } from "child_process";



// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn = outer();
// fn();
// fn();
// fn();


// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count)
//     }
// }

// const fn = outer();


// function fetchData() {
//     return Promise.resolve("Done")
// }

// fetchData().then((res) => console.log(res))


// async function fetchData() {
//     return "Done"
// }


// async function main() {
//     const data = await fetchData();
//     console.log(data)
// }

// main()



// async function test() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// test();
// console.log("3");


// const obj1 = { 
//     a: 1,
//     b: { 
//         c: 2
//     }
// }

// const obj2 = obj1;

// const mat = obj2.b.c = 40;
// console.log(mat)


// const original = { x: 1, y: { z: 2 } };
// const copy = { ...original };

// copy.y.z = 100;

// console.log(original.y.z); // ??


// const deep = JSON.parse(JSON.stringify(original));



const arr = [2,3,4,5,6,7];

// console.log(arr.map(x => x * 2))

// const res = arr.filter(x => x > 5)
// console.log(res)

const sum = arr.reduce((acc,val) => acc + val, 0);
console.log(sum)





const paymentRazorpay = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const appointmentData = await appointmentModel.findById(appointmentId);

        if(!appointmentData || appointmentData.cancelled) {
            return res.json({
                success: false,
                message: "Appointment Cancelled or not found"
            })
        }

        const razorpayCurrency = process.env.RAZORPAY_CURRENCY || "INR";

        const options = {
            amount: appointmentData.amount * 100,
            currency: razorpayCurrency,
            receipt: appointmentId
        };

        const order =  await razorpayInstance.orders.create(options);

        res.json({
            success: true,
            order
        })
        
    } catch (error) {
        console.error("Razorpay Order Error", error);
        res.json({
            success: false,
            message: error.message
        })
    }
}



const verifyRazorpay = async (req, res) => {
    try {
        const { razorpay_order_id } = req.body;

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

        if(orderInfo.status === "paid"){
            await appointmentModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
            return res.json({
                success: true,
                message: "Payment succesful"
            })
        } else {
            return res.json({
                success: false,
                message: "Payment failed"
            })
        }
        
    } catch (error) {
        console.error("Razorpay Verification Error:", error);
        res.json({
            success: false,
            message: error.message
        })
    }
}





const doctors = [
    { name: "Dr. Shubhra Mishra", specialty: "Radiology and Imaging" },
    { name: "Dr. Archit Mangal", specialty: "Radiology and Imaging" }

]


const specialties = [
    "Dentist"
]

const extraSpeciality = () => {
    return specialties.find((specialty) => message.includes(specialty.toLowerCase()))
};

const findDoctors = (query) => {
    return doctors.filter((doctor) => doctor.specialty.toLowerCase() === query);
}


export const chatbotResponse = async (req, res) => {
    try {
        const message = String(req.body.message || "").trim().toLowerCase();
        if(!message) {
            return res.json({
                reply: "Please enter a valid query"
            })
        };

        console.log("User message", message);

        const specialty = extraSpeciality(message);

        if(specialty) {
            const matchedDoctors = findDoctors(specialty.toLowerCase());

            if(matchedDoctors.length > 0) {
                const doctorNames = matchedDoctors.map((doc) => `${doc.name} - ${doc.specialty}`).join("\n");
                return res.json({
                    reply: `I couldn't find a ${specialty} in my database. Please`
                })
            }
        }

        const response = await axios.post("http", {
            model: "command",
            prompt: message,
            max_token: 100
        }, 
        {
            headers: {
                Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
                "Content-Type": "application/json"
            }

        }
    )

    res.json({
        reply: response.data.generations[0].text
    })
        
    } catch (error) {
        
    }
}