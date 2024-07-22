import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const reminders = sqliteTable('reminders', {
    id: text('id'),
    createdBy: text('created_by').notNull(),
    title: text('title').notNull(),
    time: text('time').notNull(),
    textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
    intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});

export type InsertReminder = typeof reminders.$inferInsert;
export type SelectReminder = typeof reminders.$inferSelect;
