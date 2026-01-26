// blogData.ts

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishDate: string;
  category: string;
  readTime: string;
  tags: string[];
  content: string; // Full Markdown content
}

export const blogData: BlogPost[] = [
  // ------------------------------------------------------------------
  // 1. BPRS (Bakery Products Recognition System)
  // Source: BLOG_POST_BPRS.md.pdf
  // ------------------------------------------------------------------
  {
    id: "001",
    slug: "bprs-bakery-recognition-system",
    title:
      "The End of Bakery Queues: How AI-Powered Vision Technology is Revolutionizing Cafeteria Billing",
    excerpt:
      "BPRS uses AI-powered computer vision to instantly recognize bakery items and generate bills in 2-3 seconds, reducing billing queues by 80% during peak hours.",
    coverImage: "/images/blog/bprs-hero.jpg",
    author: "Lumora Ventures Team",
    publishDate: "January 26, 2025",
    category: "AI / Retail Technology",
    readTime: "11 min",
    tags: [
      "AI",
      "Computer Vision",
      "RetailTech",
      "EdgeComputing",
      "Automation",
    ],
    content: `
## The Problem: Peak Hour Chaos

It's 8:30 AM at a busy downtown bakery. The morning rush is in full swing. Twenty customers wait impatiently in line, clutching trays filled with croissants, pastries, sandwiches, and coffee. At the counter, a stressed cashier squints at each tray, mentally tallying items and punching numbers into a register. Each transaction takes 45-60 seconds. Mistakes happen. Customers get frustrated. Some give up and leave.

### The Real Cost of Slow Billing
Traditional billing is too slow for peak-hour crowds. Here is the math on lost revenue:
* **Peak hours:** 7:00 AM - 9:00 AM (Breakfast) & 12:00 PM - 1:30 PM (Lunch).
* **Current capacity:** 180 customers/day (at 60 sec/transaction).
* **Potential demand:** 600 customers/day.
* **Lost customers:** 420/day (70%!).
* **Financial Impact:** With an average purchase of $6, the daily lost revenue is **$2,520**. This amounts to **$907,200 in annual lost revenue**.

## The Solution: BPRS (Bakery Products Recognition System)

BPRS is an AI-powered computer vision edge device that recognizes bakery items in 2-3 seconds and generates bills automatically.

### How It Works: The Magic in 3 Seconds
1.  **Place Tray (1 second):** Customer puts tray under the camera. System detects tray placement.
2.  **Recognition (1-2 seconds):** AI identifies all items, counts quantities, and calculates the total.
3.  **Payment (0-10 seconds):** Display shows itemized bill. Customer pays via card/cash/mobile. Receipt prints automatically.

### Technical Specifications
* **Camera:** High-Resolution 4K (3840 x 2160), Sony IMX477 Sensor, 12 MP.
* **Lighting:** Built-in LED ring light (5000K daylight temperature) to handle shadows.
* **Processor:** NVIDIA Jetson Nano 4GB (Edge Computing) or Google Coral Dev Board.
* **Connectivity:** Ethernet (Gigabit), WiFi (Dual-band), 4G LTE (Optional).
* **Display:** 10-15 inch touchscreen (1920x1080) for customer interaction.

### The AI Model
The system uses a sophisticated Computer Vision Pipeline:
1.  **Preprocessing:** White balance correction, noise reduction, and contrast enhancement.
2.  **Object Detection:** YOLO v8 model identifies bounding boxes around items (e.g., Croissant, Coffee).
3.  **Classification:** ResNet/EfficientNet models analyze shape, color, and texture to assign specific Product IDs.
4.  **Spatial Analysis:** Handles overlapping or stacked items using depth estimation and shadow analysis.

## Real-World Performance
In a 3-month pilot at a busy university cafeteria, BPRS achieved:
* **Speed:** Average transaction reduced from 52 seconds to **12 seconds** (77% faster).
* **Throughput:** Peak capacity increased from 69 to **300 customers/hour**.
* **Accuracy:** 98.2% item detection accuracy.
* **Financials:** Daily revenue increased by **$2,146** due to queue reduction.

## ROI Analysis
* **Total Investment:** ~$4,300 (Hardware + Installation + Training).
* **Payback Period:** **2 days** of additional revenue.
* **Annual Return:** 17,966%.

## Conclusion
BPRS represents the future of quick-service billing. By combining computer vision AI with edge computing, we have created a system that reduces queues by 80%, works 24/7, and pays for itself in days.
`,
  },

  // ------------------------------------------------------------------
  // 2. LumoraOS
  // Source: BLOG_POSTS_PART2.md.pdf
  // ------------------------------------------------------------------
  {
    id: "002",
    slug: "lumora-os-business-operations",
    title:
      "From Production Floor to Point of Sale: How LumoraOS Transformed Complete Business Operations",
    excerpt:
      "LumoraOS is a comprehensive management system that tracks everything from production to delivery, guaranteeing 0% market returns via offline-capable mobile apps.",
    coverImage: "/images/blog/lumoraos-hero.jpg",
    author: "Lumora Ventures Team",
    publishDate: "January 26, 2025",
    category: "Enterprise Software",
    readTime: "14 min",
    tags: ["ERP", "Business Management", "Logistics", "OfflineFirst", "FMCG"],
    content: `
## Introduction
Most businesses run on a patchwork of Excel spreadsheets, WhatsApp messages, and paper logbooks. The result is chaos: lost sales, overstocking, theft, and a massive 30% rate of market returns.

**LumoraOS** was built to solve this. It is a complete business management system connecting:
**Production → Inventory → Sales → Delivery → Returns → Accounting**

## Core Features

### 1. Item Tracking (Cradle to Grave)
Traditional systems lose track of items. LumoraOS tracks every batch:
* **Lifecycle:** From Raw Material Receipt → Production (Batch #12345) → Finished Goods → Warehouse → Delivery.
* **Granular Logs:** Who moved it, when, why, and condition (good/damaged/expired).
* **Example:** A query for "Batch #12345" instantly shows: 650 units in Warehouse A, 400 sold to Customer X, 200 sold to Customer Y, and 50 used for QC.

### 2. Smart Attendance System
We eliminated "buddy punching" and time theft using:
* **GPS Geofencing:** Clock-in is only allowed within a 50m radius of the facility.
* **Photo Verification:** Selfie capture required on check-in.
* **Auto-Break Tracking:** Monitors activity to automatically deduct break times, reducing payroll costs by 15-25%.

### 3. The Sales Rep Mobile App (Offline First)
Sales reps often work in remote areas without internet. The LumoraOS app:
* **Works Offline:** Reps can check inventory and place orders without signal. Data syncs automatically when online.
* **GPS Outlet Management:** Navigates reps to stores and verifies visits.
* **Mark as Sold (The Killer Feature):** Reps mark items as "sold" *before* handing them to the customer. These items are locked and cannot be returned to inventory without manager approval. This prevents the common fraud where reps resell "returned" goods.

## Case Study: Food Distribution Company
A client with 45 employees and 8 trucks implemented LumoraOS.
* **Before:** 30% market return rate (unaccounted), $8,000/month shrinkage (theft), 4 hours/day of paperwork.
* **After (6 Months):** * **Returns:** Dropped to **0.5%** (legitimate returns only).
    * **Shrinkage:** Reduced to **$400/month** (95% reduction).
    * **Efficiency:** Paperwork reduced to 15 mins/day.
* **Financial Impact:** Total monthly savings of **$19,600** plus a **$126,000** monthly revenue increase.

## Pricing
* **Starter:** $500/month (Up to 50 products, 5 users).
* **Professional:** $1,200/month (Up to 500 products, 20 users).
* **Enterprise:** Custom (Unlimited).

## Conclusion
LumoraOS isn't just software; it's a transformation platform. By guaranteeing 0% market returns and enabling full offline capability, it empowers businesses to stop losing money to inefficiency and theft.
`,
  },

  // ------------------------------------------------------------------
  // 3. Curl Cipher
  // Source: BLOG_POSTS_PART2.md.pdf
  // ------------------------------------------------------------------
  {
    id: "003",
    slug: "curl-cipher-beauty-tech",
    title:
      "Beauty Business Reinvented: How Curl Cipher Connects Salons, Stylists, and Customers",
    excerpt:
      "A comprehensive beauty ecosystem with separate apps for owners (multi-branch management) and customers (booking & discovery), plus an integrated marketplace.",
    coverImage: "/images/blog/curlcipher-hero.jpg",
    author: "Lumora Ventures Team",
    publishDate: "January 26, 2025",
    category: "Beauty Tech / Product",
    readTime: "13 min",
    tags: ["BeautyTech", "SaaS", "Marketplace", "MobileApp", "BookingSystem"],
    content: `
## The Modern Salon Paradox
Salon owners struggle to fill slots, while customers struggle to find appointments. The industry is stuck in 2010. Curl Cipher changes everything with a three-app ecosystem:
1.  **Curl Cipher Owner:** For salon management (Operations, HR, Inventory).
2.  **Curl Cipher Customer:** For discovery, booking, and reviews.
3.  **Marketplace:** Integrated shopping for beauty products.

## Feature Deep Dive

### For Salon Owners
* **Multi-Branch Management:** View all locations (e.g., Kandy Main, Colombo 7) in one dashboard. Transfer staff and inventory seamlessly.
* **Smart Scheduling:** Drag-and-drop scheduling with auto-conflict detection.
* **Inventory Intelligence:** Tracks usage per service (e.g., 18 bottles of shampoo used for 142 appointments). Auto-generates purchase orders when stock is low.
* **CRM:** Detailed profiles (e.g., "Emma Watson: VIP, Allergic to ammonia, Prefers Sarah").

### For Customers
* **3-Tap Booking:** Select Service → Choose Stylist → Confirm Time.
* **Last-Minute Deals:** Salons can push "30% off" deals for empty slots in the next 2 hours. This fills gaps and gives customers great value.
* **Beauty Marketplace:** Buy professional products (shampoos, serums) directly from the app.
* **Rewards:** Earn points for reviews (e.g., 50 points per review) redeemable for discounts.

## Real-World Success: Beauty Lounge Chain
A premium chain with 4 branches and 18 stylists implemented Curl Cipher.
* **Before:** 40% missed calls, 25% no-show rate, manual inventory.
* **After (8 Months):**
    * **Bookings:** 100% captured online.
    * **No-Shows:** Reduced to **5%** via automated SMS/Push reminders.
    * **Revenue:** Up **35%** ($14,700/month additional).
    * **ROI:** **1,125%**.

## Pricing
* **Solo Stylist:** $29/month.
* **Small Salon:** $99/month.
* **Multi-Branch:** $199/month.
* **Launch Offer:** First 100 salons get 50% off for 6 months.

## Conclusion
Curl Cipher creates a seamless loop where owners operate efficiently, stylists build clientele, and customers enjoy a frictionless experience. It turns a traditional service business into a tech-enabled growth engine.
`,
  },

  // ------------------------------------------------------------------
  // 4. VoxWel
  // Source: BLOG_POSTS_PART1.md.pdf
  // ------------------------------------------------------------------
  {
    id: "004",
    slug: "voxwel-workplace-transparency",
    title:
      "Building Trust Through Transparency: How VoxWel is Revolutionizing Workplace Communication",
    excerpt:
      "VoxWel is an anonymous workplace reporting platform that enables employees to speak up safely about concerns, harassment, and compliance issues.",
    coverImage: "/images/blog/voxwel-hero.jpg",
    author: "Lumora Ventures Team",
    publishDate: "January 26, 2025",
    category: "Corporate Technology",
    readTime: "8 min",
    tags: [
      "HR Tech",
      "Whistleblower",
      "Compliance",
      "Security",
      "WorkplaceCulture",
    ],
    content: `
## The Cost of Silence
According to workplace studies, **75% of employees** witness misconduct but don't report it. Organizations lose an average of **$1.4 million** per unreported compliance violation. The fear of retaliation creates toxic environments and legal liabilities.

## What is VoxWel?
VoxWel is a secure, anonymous workplace reporting system. It enables employees to report harassment, safety violations, and ethical concerns without revealing their identity, while still allowing for a two-way dialogue with investigators.

### Key Features
1.  **Military-Grade Security:** End-to-end encryption with a zero-knowledge architecture—even we cannot see reporter identities.
2.  **Smart Case Management:** Automated routing, priority flagging, and audit trails for compliance.
3.  **Intelligent Analytics:** Detects trends (e.g., recurring safety issues in "Warehouse B") before they escalate.
4.  **Compliance:** Ready for SOX, GDPR, HIPAA, and ISO 27001.

## Real-World Impact

### Case Study 1: Manufacturing Company
* **Challenge:** Safety violations went unreported, leading to 3 serious accidents.
* **Solution:** Implemented VoxWel for anonymous safety reporting.
* **Results:** 152 reports in 6 months, **87% reduction** in workplace accidents, and **$890,000 saved** in workers' compensation costs.

### Case Study 2: Tech Startup
* **Challenge:** Harassment complaints were ignored; toxic culture.
* **Results:** 100% of cases investigated. Zero lawsuits since implementation. Glassdoor rating improved from 2.8 to 4.2 stars.

## Technology Stack
* **Frontend:** React (Mobile-first).
* **Backend:** Firebase (Scalable, secure).
* **Security:** Multi-factor authentication, Role-based access control, Ephemeral keys for messaging.

## Conclusion
VoxWel is more than a reporting platform; it's a catalyst for organizational change. It proves that transparency and anonymity can coexist to build safer, more trustworthy workplaces.
`,
  },

  // ------------------------------------------------------------------
  // 5. VerseWing
  // Source: BLOG_POSTS_PART1.md.pdf
  // ------------------------------------------------------------------
  {
    id: "005",
    slug: "versewing-creative-writing",
    title:
      "From Writer’s Block to Published Author: Building the Future of Creative Writing",
    excerpt:
      "VerseWing is a community platform connecting writers with readers, providing AI tools for improvement, and offering monetization through subscriptions and sales.",
    coverImage: "/images/blog/versewing-hero.jpg",
    author: "Lumora Ventures Team",
    publishDate: "January 26, 2025",
    category: "Creative Technology",
    readTime: "10 min",
    tags: [
      "CreativeWriting",
      "Publishing",
      "AI",
      "CreatorEconomy",
      "Community",
    ],
    content: `
## The Writer's Dilemma
Traditional publishing has a <1% acceptance rate and takes 18-24 months. Self-publishing offers zero visibility. VerseWing solves this by combining a publishing platform, a reader community, and monetization tools.

### Key Features for Writers
* **Smart Discovery:** Algorithms recommend stories based on reader genre preferences, not just social clout.
* **Feedback System:** Structured critiques help writers improve. Writers who engage with feedback improve their ratings by **34%** in 3 months.
* **Monetization:**
    * **Subscriptions:** Writers keep **70%** of monthly reader subscriptions ($3-$15/month).
    * **Story Sales:** Sell individual stories ($0.99-$9.99); writers keep **80%**.
    * **Tips:** Writers keep **90%** of direct support.
* **AI Writing Assistant:** Detects plot holes, analyzes tone, and checks character consistency.

### Success Stories
* **Emma (Romance):** Went from 0 readers to earning **$4,200/month** after 18 months.
* **David (Sci-Fi):** Built a following of 1,500 readers, serialized a novel, and landed a traditional book deal.

## By The Numbers (18 Months)
* **Writers:** 45,000+
* **Readers:** 250,000+
* **Stories Published:** 2.5 million
* **Paid to Writers:** **$1.2 million**

## Roadmap (2025)
* **Q2:** Audio stories and collaborative writing tools.
* **Q3:** Native mobile apps (iOS/Android) and AI story illustrations.
* **Q4:** NFT publishing and VerseWing Press (Traditional publishing arm).

## Conclusion
VerseWing democratizes publishing. Whether you are a writer seeking an audience or a reader seeking new voices, VerseWing provides the community and tools to succeed.
`,
  },

  // ------------------------------------------------------------------
  // 6. Jackfruit Cutting Machine
  // Source: BLOG_POSTS_PART1.md.pdf
  // ------------------------------------------------------------------
  {
    id: "006",
    slug: "jackfruit-processing-automation",
    title:
      "Innovating Agriculture: Designing an Industrial Jackfruit Processing Machine",
    excerpt:
      "A case study on combining mechanical engineering and computer vision to automate the processing of irregular, sticky jackfruit, increasing productivity by 1,600%.",
    coverImage: "/images/blog/jackfruit-hero.jpg",
    author: "Lumora Ventures Team",
    publishDate: "January 26, 2025",
    category: "Industrial Automation",
    readTime: "12 min",
    tags: [
      "AgTech",
      "Robotics",
      "Computer Vision",
      "Engineering",
      "FoodProcessing",
    ],
    content: `
## The Challenge: Jackfruit is Difficult
Baby jackfruit is irregular (4-8 inches), spiky, and filled with sticky latex. Manual processing takes 5-8 minutes per fruit and yields high waste (25-30%). There was no existing machinery for this unique fruit.

## Our Approach: Research-Driven Design
We tested 5 methods (Rotary Peeling, Steam, Knife Slicing, Coring, and Hybrid). The **Hybrid Blade System** with adaptive mechanics was the clear winner.

### Technical Innovations
1.  **Adaptive Sizing System:** Cameras capture 360-degree images. AI determines the fruit's geometry, and servo-controlled guides adjust the blade positioning within **2 seconds**.
2.  **Multi-Stage Blade Assembly:**
    * *Stage 1:* Skin removal with scoring blades and peeling fingers.
    * *Stage 2:* Hollow coring blade extracts the fibrous pith.
    * *Stage 3:* Rotating disc blades section the pulp with 2mm accuracy.
3.  **Latex Management:** A combination of **non-stick titanium coating**, oil injection, and vacuum suction reduced blade fouling by **94%**.
4.  **Cleaning:** Automated Clean-In-Place (CIP) system cleans the machine in 15 minutes.

### Performance & ROI
* **Throughput:** 200-240 fruits/hour (vs. 12/hour manually).
* **Productivity:** **1,600% increase**.
* **Yield:** Increased from 70% to **88%** usable product.
* **Labor Savings:** $12,000/month.
* **Machine Cost:** $180,000.
* **ROI Period:** **9 months**.

## Conclusion
By applying industrial automation principles (Computer Vision, Mechatronics, IoT) to organic, irregular produce, we turned a labor-intensive bottleneck into a scalable commercial advantage.
`,
  },

  // ------------------------------------------------------------------
  // 7. Machine Maintenance App
  // Source: BLOG_POSTS_PART1.md.pdf
  // ------------------------------------------------------------------
  {
    id: "007",
    slug: "ai-machine-maintenance",
    title:
      "The Future of Maintenance: AI-Powered Troubleshooting with Edge Devices",
    excerpt:
      "Revolutionizing industrial maintenance with edge IoT sensors, AI diagnostics, and step-by-step digital repair guides to slash downtime costs.",
    coverImage: "/images/blog/maintenance-hero.jpg",
    author: "Lumora Ventures Team",
    publishDate: "January 26, 2025",
    category: "Industrial IoT",
    readTime: "11 min",
    tags: [
      "IoT",
      "PredictiveMaintenance",
      "AI",
      "Manufacturing",
      "EdgeComputing",
    ],
    content: `
## The Problem: Reactive Maintenance
Unplanned downtime costs manufacturers **$260,000 per hour**. 70% of maintenance time is wasted on diagnosis ("What is broken?") rather than fixing.

## The Solution: Intelligent Maintenance System
We built an end-to-end system combining hardware and software to shift from reactive to predictive maintenance.

### 1. Edge Device Network
We install rugged IoT sensors (ESP32-based) on critical equipment to monitor vibration, temperature, and current.
* **Edge AI:** Processes data locally to detect anomalies (e.g., "Motor 3B bearing failure") with **96% accuracy**.
* **Cost:** ~$800 per conveyor setup.

### 2. Guided Troubleshooting
Instead of a generic alert, the technician receives a specific workflow in the mobile app:
* *Step 1:* Safety Lockout (with photo).
* *Step 2:* Remove Belt (with video guide).
* *Step 3:* Inspect Bearing (interactive 3D diagram).
* *Result:* Diagnosis time reduced from 45 min to **5 min**.

### 3. Predictive Intelligence
The system calculates the **Remaining Useful Life (RUL)**.
* *Scenario:* "Compressor 2A bearing will fail in 18 days."
* *Action:* Schedule repair during planned downtime.
* *Savings:* Avoids an $8,500 emergency repair and $32,000 in production loss.

## Development Status
* **Current Phase:** Sensor Deployment & Data Gathering (Phase 1).
* **Target Launch:** Q4 2025.
* **Investment:** $400,000 development budget.

## Conclusion
The future of maintenance is predictive, guided, and data-driven. Our application connects the factory floor to the cloud, ensuring machines effectively "heal" themselves before they break.
`,
  },

  // ------------------------------------------------------------------
  // 8. Animal Feed Mixing Machine
  // Source: BLOG_POSTS_PART1.md.pdf
  // ------------------------------------------------------------------
  {
    id: "008",
    slug: "automated-feed-mixing",
    title:
      "Precision at Scale: Engineering an 18-Silo Automated Animal Feed Mixing System",
    excerpt:
      "Designing a machine capable of measuring ingredients from 5g to 10kg with 0.1% accuracy, ensuring consistent nutrition for commercial agriculture.",
    coverImage: "/images/blog/feedmixer-hero.jpg",
    author: "Lumora Ventures Team",
    publishDate: "January 26, 2025",
    category: "Industrial Automation",
    readTime: "10 min",
    tags: [
      "Agriculture",
      "Automation",
      "Engineering",
      "PrecisionManufacturing",
      "PLC",
    ],
    content: `
## The Challenge: Precision + Variety
Animal feed requires mixing bulk grains (Corn, 500kg silos) with tiny trace elements (Vitamins, 20kg silos). A single system must handle **10kg dumps** and **5g sprinkles** with equal precision to ensure nutritional safety.

## The Solution: 18-Silo Automated System
We engineered a system with 18 silos, a ribbon mixer, and an automatic packaging unit.

### Key Innovations
1.  **Triple-Scale Architecture:**
    * *Primary Scale:* 0-10kg (±5g) for macros.
    * *Precision Scale:* 0-1kg (±0.5g) for micros.
    * *Micro Scale:* 0-100g (±0.01g) for trace ingredients.
2.  **Intelligent Dispensing Algorithm:**
    * *Coarse Feed:* Fast flow for 90% of weight.
    * *Fine Feed:* Slow dribble for the final precision.
    * *Result:* 99.8% of batches are error-free.
3.  **Traceability:** Every batch is logged digitally with operator ID, recipe used, and actual weights dispensed.

### Performance & ROI
* **Capacity:** Increased from 800kg/day to **5,000kg/day**.
* **Labor:** Reduced from 3 workers to **1 operator**.
* **Accuracy:** Improved from ±5% (manual) to **±0.1%**.
* **Financial Impact:** $174,500 annual benefit.
* **Payback Period:** **12.4 months**.

## Specifications
* **Dimensions:** 6m x 4m footprint.
* **Power:** 380V, 3-phase, 12 kW.
* **Control:** Siemens S7-1200 PLC with 15" HMI.
* **Cleaning:** Automatic vacuum and compressed air cleaning cycles between batches.

## Conclusion
This system proves that high-volume industrial processing does not have to sacrifice laboratory-grade precision. It transformed a small batch mixer into a commercial-scale manufacturer.
`,
  },
];
