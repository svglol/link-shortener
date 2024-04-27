CREATE TABLE `links` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`url` text NOT NULL,
	`uuid` text NOT NULL,
	`qr_code` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `links_id_unique` ON `links` (`id`);