"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SnapshotConfigSchema extends Schema {
  async up() {
    const tableExists = await this.hasTable("snapshot_configs");
    if (!tableExists) {
      this.create("snapshot_configs", (table) => {
        table.increments();
        table.string("policy_name").notNullable();
        table.string("policy_directory").notNullable();
        table.string("schedule").notNullable();
        table.string("timezone");
        table.string("snapshot_time").notNullable();
        table.string("snapshot_days").notNullable();
        table.string("deletion_time");
        table.timestamps();
      });
    }
  }

  down() {
    this.drop("snapshot_configs");
  }
}

module.exports = SnapshotConfigSchema;
