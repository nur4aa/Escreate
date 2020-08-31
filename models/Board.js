const { Schema, model } = require('mongoose');

const BoardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: 'lists',
      },
    ],
    activity: [
      {
        _id: false,
        text: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    backgroundURL: {
      type: String,
    },
    members: [
      {
        _id: false,
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
        role: {
          type: String,
          default: 'admin',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = Board = model('board', BoardSchema);
