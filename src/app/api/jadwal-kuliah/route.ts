import { NextRequest } from "next/server";

import * as controller from "../../../server/controllers/Jadwal_kuliahController"

export const GET = async (req: NextRequest) => controller.GET(req)