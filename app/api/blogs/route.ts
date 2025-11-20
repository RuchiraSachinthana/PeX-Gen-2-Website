import { NextResponse } from 'next/server';

interface Blog {
  _id: string;
  title: string;
  hero_img: string;
  sub_title_1: string;
  paragraph_1: string;
  created_at: string;
  sub_title_2?: string;
  paragraph_2?: string;
  img_url_2?: string;
}

// This is a temporary data store. Replace this with your actual database connection
const BLOGS: Blog[] = [
//   {
//     _id: "1",
//     title: "The Hidden Cost of Manual Compliance",
//     hero_img: "/Asset 7.jpg",
//     sub_title_1: "Why Spreadsheets Are Killing Your Efficiency",
//     paragraph_1:
//       "Many SMEs rely on spreadsheets to manage their ISO compliance. While it seems cost-effective initially, the hidden costs of version control issues, data errors, and lack of real-time visibility can be crippling. Manual systems create silos where information gets trapped, making it impossible for leadership to make data-driven decisions.",
//     created_at: "2023-10-01",
//     sub_title_2: "The Automation Advantage",
//     paragraph_2:
//       "Automating compliance reduces errors by 90% and frees up your team to focus on strategic improvements rather than data entry. With PEx Software, you get a centralized system that ensures everyone is working on the latest version of documents, and non-conformities are tracked and resolved in real-time.",
//     img_url_2: "/Asset 8.jpg",
//   },
//   {
//     _id: "2",
//     title: "From Compliance to Competitive Advantage",
//     hero_img: "/Asset 55.webp",
//     sub_title_1: "Turning ISO Standards into Business Growth",
//     paragraph_1:
//       "ISO standards are often seen as a box-ticking exercise. However, when implemented correctly, they provide a framework for operational excellence. By aligning your quality objectives with your business strategy, you can transform compliance from a cost center into a driver of efficiency and customer satisfaction.",
//     created_at: "2023-10-15",
//     sub_title_2: "Strategic Alignment",
//     paragraph_2:
//       "PEx Software helps you link your quality KPIs directly to your strategic goals. This ensures that every audit, every corrective action, and every improvement initiative contributes to the bigger picture of business growth and market leadership.",
//     img_url_2: "/Asset 56.webp",
//   },
//   {
//     _id: "3",
//     title: "The Future of Quality Management",
//     hero_img: "/Asset 60.webp",
//     sub_title_1: "AI and Predictive Quality",
//     paragraph_1:
//       "The future of quality management is predictive. AI-powered insights can help you identify potential risks before they become non-conformities. By analyzing historical data, you can predict trends and take proactive measures to ensure continuous improvement.",
//     created_at: "2023-11-01",
//     sub_title_2: "Embracing Digital Transformation",
//     paragraph_2:
//       "Digital transformation is no longer optional. To stay competitive, SMEs must embrace digital tools that provide real-time insights and agility. PEx Software is designed to be the catalyst for your digital transformation journey, making quality management seamless and intelligent.",
//     img_url_2: "/Asset 61.webp",
//   },
];

export async function GET() {
  try {
    // TODO: Replace this with actual database query
    // Example: const blogs = await db.collection('blogs').find().toArray();
    
    // Simulate a small delay to mimic real API behavior
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json(BLOGS, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
