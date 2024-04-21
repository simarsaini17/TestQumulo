"use strict";

const SnapshotConfig = use("App/Models/SnapshotConfig");

class SnapshotConfigController {
  async index({ response }) {
    const data = await SnapshotConfig.all();
    return response.json(data);
  }

  async update({ request, response }) {
    const newData = request.only([
      "policy_name",
      "policy_directory",
      "schedule",
      "timezone",
      "snapshot_time",
      "snapshot_days",
      "deletion_time",
    ]);

    const snapshotConfig = new SnapshotConfig();
    snapshotConfig.merge(newData);
    await snapshotConfig.save();
    return response.status(200).json({ message: "Snapshot config updated" });
  }
}

module.exports = SnapshotConfigController;
