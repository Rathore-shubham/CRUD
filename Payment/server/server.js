import express from "express";
import crypto from "crypto";
import cors from "cors";
import { razorpay } from "./razorpay";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // amount * 100 --> because razorpay uses paise not rupees , if someone enters 500 --> u send 50000paise
    currency: "INR",
    receipt: "receipt#1",
  };

  // its a SDK to creates a new order on razorpay servers
  const order = await razorpay.orders.create(options);
  res.json(order);
});

app.post("/verify", async (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  const body = order_id + "|" + payment_id;

  // "sha256" --> hashing algo
  //razorpay secret key -- only backend knows
  const expected = crypto
    .createHmac("sha256", razorpay.key_secret) // createHmac -- makes a hash
    .update(body) // hash the order + payment IDs
    .digest("hex"); //get hex string signature

  if (expected === signature) {
    res.json({
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }
});

// create plan
// You create the gym plan: “₹199/month Gold Membership”
// This is where you define what the subscription is.
// Think of it as creating the product
app.post("create-plan", async (req, res) => {
  const plan = await razorpay.plans.create({
    period: "monthly",
    interval: 1, // charges every 1 month
    item: {
      name: "FastSub",
      amount: 20000, //rs 200
      currency: "INR",
    },
  });
  res.json(plan);
});

//create subscription for user
// A new member buys that plan and gets charged every month
// This is where a specific customer starts using the plan.
// Think of it as joining the membership.
app.post("/create-subscription", async (req, res) => {
  const { plan_id } = req.body;

  const subscription = await razorpay.subscription.create({
    plan_id, // user selected the monthly gym plan
    customer_notify: 1, // razorpay sends the user payment emails
    total_count: 12, // charge for 12 months
  });

  res.json(subscription);
});



// This webhook code updates your backend automatically.
// E- commerce --> payment succeed --> marks order as "paid"

// 💳Subscription Billing
// payment.captured → monthly auto-charge successful
// payment.failed → subscription expired

// 🧧 Refunds
// refund.created → update UI to show refund initiated

// 🛒 Marketplace / Route
// transfer.created → update vendor balance

// 🏦 Settlement
// settlement.processed → update bank settlement dashboard

app.post("/webhook", async (req, res) => {
  const webhookSecret = "YOUR_WEBHOOK_SECRET";

  const receivedSignature = req.headers["x-razorpay-signature"];
  const body = JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(body)
    .digest("hex");

  //verify razorpay webhook signature
  if (receivedSignature !== expectedSignature) {
    return res.json(400).send("Invalid signature");
  }

  const event = req.body.event;

  switch (event) {
    case "payment.captured":
      console.log("Payment Successful:", req.body.payload.payment.entity);
      // update order status in DB
      break;

    case "payment.failed":
      console.log("Payment Failed:", req.body.payload.payment.entity);
      // update order as failed
      break;

    case "refund.created":
      console.log("↩Refund Initiated:", req.body.payload.refund.entity);
      // update refund status
      break;

    case "transfer.created":
      console.log("Transfer Sent:", req.body.payload.transfer.entity);
      // update vendor earnings
      break;

    case "settlement.processed":
      console.log("Settlement Done:", req.body.payload.settlement.entity);
      // show settlement in dashboard
      break;

    default:
      console.log("Unhandled Event:", event);
  }

  res.status(200).json({ status: "ok" });
});


app.post("/create-linked-account", async (req, res) => {
  try {
    const { name, email, contact } = req.body;

    const account = await razorpay.accounts.create({
      email,
      phone: contact,
      type: "managed",
      legal_business_name: name,
      business_type: "individual",
      contact_name: name
    });

    res.json(account)
    
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "order_rcpt_" + Date.now()
    });

    res.json(order)
    
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
})

app.post("/create-transfer", async (req, res) => {
  try {
    const { payment_id, amount, account_id } = req.body;

    const transfer = await razorpay.payments.transfer(payment_id,
      {
        transfer: [
          {
            account: account_id,
            amount: amount * 100,
            currency: "INR",
            on_hold: false,
          }
        ]
      }
    );

    res.json(transfer)
    
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
})

app.listen(5000, () => {
  console.log("server running on port 5000");
});
