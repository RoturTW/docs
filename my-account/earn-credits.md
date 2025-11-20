# Earning Rotur Credits

Rotur Credits are the virtual currency used across the Rotur platform powering purchases, apps, services, and premium features. As a developer, you can earn credits by creating **keys** that users can buy. Keys let you sell items, features, subscriptions, or anything else your service provides.

Users earn credits passively through daily rewards or client-specific systems, but the **largest and most consistent source of credits** in the economy comes from developers who create valuable things that users want to spend credits on.

---

## How Earning Credits Works

When a user purchases one of your keys:

1. Credits are transferred from the buyer to you.
2. A **10% fee** is automatically applied.
3. You receive **90% of the credits**.
4. If your key has a webhook, you’ll receive a real-time event for fulfillment.

Keys can be created through the Key Manager:

**[https://rotur.dev/key-manager](https://rotur.dev/key-manager)**

Each key includes:

* A unique ID
* A price (in credits)
* A type (one-time or subscription)
* An optional webhook URL

You can also **grant any of your keys for free** to users via the UI or APIs.

---

## Key Types

### One-Time Keys

A simple single purchase. The user pays once and you receive credits immediately.

### Subscription Keys

These keys charge the user automatically on a repeating schedule.
Supported cycles include:

* Every **X days**
* Every **X weeks**
* Every **X months**

Subscription keys are ideal for:

* Premium app features
* Server plans
* Memberships
* Recurring unlocks

---

## Webhooks

If a key has a webhook configured, Rotur sends a POST request every time it is purchased.

### Webhook Payload

```json
{
  "username": "buyer_username",  // purchaser's Rotur username
  "key": "KEY_ID",               // the key that was purchased
  "price": 100,                  // price in credits
  "content": "buyer_username purchased key KEY_ID for 100 credits",
  "timestamp": 1732118400        // Unix timestamp
}
```

This allows your backend to:

* Activate purchases
* Deliver digital items
* Unlock app features
* Grant user roles or perks
* Track purchase events

---

## Developer Limits

On the free plan, developers can create **up to 5 keys**.

To create additional keys, you can subscribe to a higher [Ko-fi](https://ko-fi.com/mistium) tier.

Developers can view all their key data using:

```
GET https://api.rotur.dev/keys/mine?auth=YOUR_ROTUR_AUTH_TOKEN
```

This endpoint returns every key you own, including prices, types, users, webhook configuration, and subscription settings.

---

## Refunds

Refunds are **not handled automatically** by the system.

If a user has been scammed or a mistake was made, they can contact:

* **@mistium** on Discord
* **@mist** on Rotur
* RMail or similar channels

Refunds and reversals can be processed manually when needed.

---

## How Users Earn Credits

Users can gain credits through multiple channels depending on their client:

### Daily Credits

Collected through the **Wallet app** on OriginOS.

### Client-Specific Systems

Some Rotur-connected clients (apps, OS environments, games, etc.) may offer their own earning mechanics.

---

## Economic Tracking

Rotur maintains full credit statistics internally, including:

* Total credit supply
* Circulation
* Transactions
* Developer earnings
* Platform fees

This ensures transparency and stability across the system.

---

## Summary

* Developers earn credits by selling keys.
* Keys charge a **10% fee**, with **90% going to the developer**.
* Keys can be one-time or subscription-based.
* Webhooks notify you instantly when purchases happen.
* Developers can grant keys for free to users.
* Free tier developers can create up to 5 keys.
* Refunds are manual and handled via contacting support.
