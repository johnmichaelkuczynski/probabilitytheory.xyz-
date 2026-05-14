import {
  boolean,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const studentsTable = pgTable("students", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  intro: text("intro"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  isAdmin: boolean("is_admin").notNull().default(false),
  accommodated: boolean("accommodated").notNull().default(false),
  integrityAckAt: timestamp("integrity_ack_at", { withTimezone: true }),
  /**
   * Per-student writing-process baseline used by the diachronic AI-detection
   * layer. Frozen after the second submission to prevent slow-drift attacks.
   * Shape: { n: number, features: Record<string, number> }
   */
  processBaseline: jsonb("process_baseline"),
});

export const insertStudentSchema = createInsertSchema(studentsTable).omit({
  id: true,
  createdAt: true,
});

export type InsertStudent = z.infer<typeof insertStudentSchema>;
export type Student = typeof studentsTable.$inferSelect;
