const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
  title: String,
  description: String,
  definition: Object, // JSON containing triggers & actions
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Workflow', workflowSchema);
