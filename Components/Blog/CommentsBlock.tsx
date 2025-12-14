"use client";

import { useState } from "react";
import { Send } from "lucide-react";
const commentsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "August 12, 2024",
    message:
      "This article was incredibly insightful. I really enjoyed the way the information was presented!",
    avatar: "/images/user/user4.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    date: "August 14, 2024",
    message:
      "Great post! The design and typography make it very easy to read. Looking forward to more content like this.",
    avatar: "/images/user/user3.jpg",
  },
];

export default function CommentsBlock() {
  const [comment, setComment] = useState("");

  return (
    <div className="mt-14">
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Comments (2)
      </h3>

      {/* Comments list */}
      <div className="space-y-6">
        {commentsData.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-5 border border-gray-200 rounded-xl "
          >
            {/* Avatar */}
            <img
              src={item.avatar}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* Content */}
            <div>
              <div className="flex items-center gap-3">
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500">
                  {item.date}
                </span>
              </div>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.message}
              </p>

              <button className="mt-3 text-sm font-medium text-orange-600 hover:underline">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a comment */}
      <div className="mt-10">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Leave a Comment
        </h4>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="
            w-full
            min-h-[140px]
            p-4
            text-sm
            border
            border-gray-200
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-orange-500
            resize-none
          "
        />

       <button
  className="
    mt-4
    inline-flex
    items-center
    gap-2
    bg-orange-600
    text-white
    px-6
    py-3
    rounded-lg
    text-sm
    font-medium
    hover:bg-orange-700
    transition
  "
>
  Post Comment
<Send className="w-4 h-4" />
</button>
      </div>
    </div>
  );
}
