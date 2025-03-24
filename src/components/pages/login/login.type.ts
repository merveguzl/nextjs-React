import { z } from "zod";
import { schema } from "./login.schema";

export type LoginFormData = z.infer<typeof schema>;
