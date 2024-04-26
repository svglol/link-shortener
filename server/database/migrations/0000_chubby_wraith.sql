CREATE TABLE `links` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`url` text NOT NULL,
	`uuid` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `links_id_unique` ON `links` (`id`);