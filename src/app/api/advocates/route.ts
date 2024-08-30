import { NextRequest, NextResponse } from "next/server";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { and, gte, like } from "drizzle-orm";

export async function GET(req: NextRequest) {
  console.log("inside GET");

  try {
    const { searchParams } = new URL(req.url);

    const lastName = searchParams.get("lastName");
    const firstName = searchParams.get("firstName");
    const city = searchParams.get("city");
    const degree = searchParams.get("degree");
    const specialty = searchParams.get("specialty");
    const yearsOfExperience = searchParams.get("yearsOfExperience");

    const whereClause = [];

    if (firstName) whereClause.push(like(advocates.firstName, firstName + "%"));
    if (lastName) whereClause.push(like(advocates.lastName, lastName + "%"));
    if (city) whereClause.push(like(advocates.city, city + "%"));
    if (degree) whereClause.push(like(advocates.degree, degree));
    if (yearsOfExperience)
      whereClause.push(gte(advocates.yearsOfExperience, yearsOfExperience));

    const data = await db
      .select()
      .from(advocates)
      .where(and(...whereClause));

    const filteredData = await specialty
      ? data.filter((row) => row.specialties.includes(specialty))
      : data;

    return NextResponse.json({ data: filteredData });
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json(
      { message: "Failed to parse JSON" },
      { status: 400 }
    );
  }
}
