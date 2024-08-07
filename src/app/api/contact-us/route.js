import dbConnect from "@/utils/dbConn";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export async function POST(request, response) {
 try {
  const body = await request.json();
  await dbConnect();

  await Contact.create(body);

  return NextResponse.json({
   message: "Message sent successfully"
  }, {
   status: 200
  })

 } catch (error) {
  return NextResponse.json({
   message: "Server Error"
  }, {
   status: 500
  })
 }
}